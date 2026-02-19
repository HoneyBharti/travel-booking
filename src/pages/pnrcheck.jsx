import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { fetchPNRStatus } from "../services/pnrapi";
import jsPDF from "jspdf";

const PNRDetailsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const pnrNumber = location.state?.pnrNumber;

  useEffect(() => {
    const getPNRDetails = async () => {
      if (!pnrNumber) {
        setError("No PNR number provided");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const response = await fetchPNRStatus(pnrNumber);
        
        console.log("API Response:", response); // Debug log
        
        if (response.success) {
          setData(response.data);
        } else {
          // Handle the "FLUSHED PNR" message
          setError(response.message || "Failed to fetch PNR details");
        }
      } catch (err) {
        console.error("Error fetching PNR status:", err);
        setError("Error fetching PNR status. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    getPNRDetails();
  }, [pnrNumber]);

  // Format date function
  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    return dateString;
  };

  // Get status color class
  const getStatusColor = (status) => {
    if (status === "CNF" || status === "Confirmed") return "text-green-500";
    if (status === "CAN" || status === "Cancelled") return "text-red-500";
    if (status === "RAC") return "text-yellow-500";
    if (status === "WL" || status?.includes("PQWL") || status?.includes("RLWL")) return "text-orange-500";
    return "text-[#FFB500]";
  };

  // Download PDF function
  const handleDownloadPDF = () => {
    try {
      const doc = new jsPDF();
      
      // Set title
      doc.setFontSize(22);
      doc.setTextColor(255, 180, 0);
      doc.text("RAILWAY TICKET", 105, 20, { align: "center" });
      
      // Reset color
      doc.setTextColor(0, 0, 0);
      doc.setFontSize(12);
      
      // PNR and Train Info
      doc.setFontSize(16);
      doc.text(`PNR: ${data?.pnrNumber || pnrNumber}`, 20, 40);
      doc.setFontSize(12);
      doc.text(`Train: ${data?.trainName || "N/A"} (${data?.trainNumber || "N/A"})`, 20, 50);
      doc.text(`Journey Date: ${formatDate(data?.dateOfJourney)}`, 20, 60);
      doc.text(`From: ${data?.sourceStation || "N/A"} → To: ${data?.destinationStation || "N/A"}`, 20, 70);
      doc.text(`Boarding: ${data?.boardingPoint || "N/A"}`, 20, 80);
      doc.text(`Class: ${data?.journeyClass || "N/A"} | Quota: ${data?.quota || "N/A"}`, 20, 90);
      doc.text(`Total Fare: ₹${data?.bookingFare || data?.ticketFare || "N/A"}`, 20, 100);
      
      // Passenger Details Header
      doc.setFontSize(14);
      doc.setTextColor(255, 180, 0);
      doc.text("Passenger Details", 20, 115);
      doc.setTextColor(0, 0, 0);
      doc.setFontSize(11);
      
      let yPosition = 125;
      
      // List passengers
      if (data?.passengerList && data.passengerList.length > 0) {
        data.passengerList.forEach((passenger) => {
          doc.text(`Passenger ${passenger.passengerSerialNumber}:`, 25, yPosition);
          doc.text(`Booking: ${passenger.bookingStatusDetails || "N/A"}`, 35, yPosition + 7);
          doc.text(`Current: ${passenger.currentStatusDetails || passenger.currentStatus || "N/A"}`, 35, yPosition + 14);
          doc.text(`Berth: ${passenger.currentBerthNo || passenger.bookingBerthNo || "N/A"}`, 35, yPosition + 21);
          yPosition += 30;
          
          // Add new page if needed
          if (yPosition > 270) {
            doc.addPage();
            yPosition = 20;
          }
        });
      } else {
        doc.text("No passenger information available", 25, yPosition);
        yPosition += 10;
      }
      
      // Booking Summary
      doc.setFontSize(14);
      doc.setTextColor(255, 180, 0);
      doc.text("Booking Summary", 20, yPosition + 10);
      doc.setTextColor(0, 0, 0);
      doc.setFontSize(11);
      
      doc.text(`Booking Date: ${formatDate(data?.bookingDate)}`, 25, yPosition + 20);
      doc.text(`Total Passengers: ${data?.numberOfpassenger || 0}`, 25, yPosition + 30);
      doc.text(`Last Updated: ${data?.timeStamp || "N/A"}`, 25, yPosition + 40);
      
      // Footer
      const pageCount = doc.internal.getNumberOfPages();
      for (let i = 1; i <= pageCount; i++) {
        doc.setPage(i);
        doc.setFontSize(8);
        doc.setTextColor(128, 128, 128);
        doc.text("Information displayed is as per Indian Railways database. We do not store your PNR or personal data.", 105, 290, { align: "center" });
      }
      
      // Save PDF
      doc.save(`Ticket_${data?.pnrNumber || pnrNumber}.pdf`);
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("Failed to generate PDF. Please try again.");
    }
  };

  // Share details function
  const handleShareDetails = () => {
    // Create share text
    const shareText = `🚂 PNR Status: ${data?.pnrNumber || pnrNumber}
Train: ${data?.trainName} (${data?.trainNumber})
Journey: ${formatDate(data?.dateOfJourney)}
From: ${data?.sourceStation} → To: ${data?.destinationStation}
Class: ${data?.journeyClass}
Passengers: ${data?.numberOfpassenger}
Total Fare: ₹${data?.bookingFare || data?.ticketFare}
Current Status: ${data?.passengerList?.map(p => p.currentStatusDetails).join(', ') || 'N/A'}`;

    // Check if Web Share API is supported
    if (navigator.share) {
      navigator.share({
        title: 'PNR Status Details',
        text: shareText,
      }).catch((error) => {
        console.log('Share cancelled or failed:', error);
        // Fallback to copy to clipboard
        copyToClipboard(shareText);
      });
    } else {
      // Fallback for browsers that don't support Web Share API
      copyToClipboard(shareText);
    }
  };

  // Copy to clipboard function
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert('PNR details copied to clipboard!');
    }).catch(() => {
      alert('Failed to copy. Please try again.');
    });
  };

  if (loading) {
    return (
      <section
        className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: "url('/herobg.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center">
          <div className="w-16 h-16 border-4 border-[#FFB500] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white text-xl">Fetching PNR details...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section
        className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: "url('/herobg.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center max-w-lg mx-auto px-4">
          <div className="bg-red-500/20 border border-red-500 rounded-lg p-6 mb-6">
            <p className="text-red-500 text-xl mb-2">PNR Status Error</p>
            <p className="text-white/90">{error}</p>
            {error.includes("FLUSHED") && (
              <p className="text-white/80 mt-2 text-sm">
                This PNR number has been flushed from the system or is invalid. 
                Please try another PNR number.
              </p>
            )}
          </div>
          <button
            onClick={() => navigate(-1)}
            className="bg-[#FFB500] hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-lg transition"
          >
            Try Another PNR
          </button>
        </div>
      </section>
    );
  }

  if (!data) {
    return (
      <section
        className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: "url('/herobg.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center">
          <p className="text-white text-xl mb-4">No data available</p>
          <button
            onClick={() => navigate(-1)}
            className="bg-[#FFB500] hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-lg transition"
          >
            Go Back
          </button>
        </div>
      </section>
    );
  }

  return (
    <section
      className="relative w-full min-h-screen overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: "url('/herobg.png')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* CONTENT SECTION */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 z-10 py-20">
        
        {/* Header with Back Button */}
        <div className="flex items-center justify-between pt-6 mb-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-white hover:text-[#FFB500] transition-colors"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="text-lg">Back</span>
          </button>
          
          {/* PNR Badge */}
          <div className="bg-[#FFB500]/20 backdrop-blur-sm px-6 py-3 rounded-full border border-[#FFB500]">
            <span className="text-[#FFB500] font-bold text-xl">PNR: {data?.pnrNumber || pnrNumber}</span>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          
          {/* Left Column - Train Info */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Train Details Card */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 text-white">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#FFB500] rounded-full p-3">
                  <svg className="w-6 h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-bold">{data?.trainName || "N/A"}</h2>
                  <p className="text-gray-300">Train Number: {data?.trainNumber || "N/A"}</p>
                </div>
              </div>

              {/* Journey Route */}
              <div className="relative mb-8">
                <div className="flex justify-between items-center">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-[#FFB500]">{data?.sourceStation || "N/A"}</p>
                    <p className="text-sm text-gray-300 mt-1">Source</p>
                    <p className="text-xs text-gray-400">Boarding: {data?.boardingPoint || "N/A"}</p>
                  </div>
                  
                  <div className="flex-1 mx-4 relative">
                    <div className="h-0.5 bg-white/30 w-full"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm px-4 py-1 rounded-full text-xs text-[#FFB500]">
                      {data?.distance ? `${data.distance} km` : "N/A"}
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-2xl font-bold text-[#FFB500]">{data?.destinationStation || "N/A"}</p>
                    <p className="text-sm text-gray-300 mt-1">Destination</p>
                    <p className="text-xs text-gray-400">Resv Upto: {data?.reservationUpto || "N/A"}</p>
                  </div>
                </div>
              </div>

              {/* Journey Details Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white/5 rounded-lg p-3">
                  <p className="text-gray-400 text-sm">Journey Date</p>
                  <p className="text-white font-semibold text-sm">{formatDate(data?.dateOfJourney)}</p>
                </div>
                <div className="bg-white/5 rounded-lg p-3">
                  <p className="text-gray-400 text-sm">Class</p>
                  <p className="text-white font-semibold">{data?.journeyClass || "N/A"}</p>
                </div>
                <div className="bg-white/5 rounded-lg p-3">
                  <p className="text-gray-400 text-sm">Quota</p>
                  <p className="text-white font-semibold">{data?.quota || "N/A"}</p>
                </div>
                <div className="bg-white/5 rounded-lg p-3">
                  <p className="text-gray-400 text-sm">Total Fare</p>
                  <p className="text-white font-semibold">₹{data?.bookingFare || data?.ticketFare || "N/A"}</p>
                </div>
              </div>
            </div>

            {/* Passenger Details Card */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 text-white">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-[#FFB500]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                Passenger Information ({data?.numberOfpassenger || 0})
              </h3>
              
              <div className="space-y-4">
                {data?.passengerList && data.passengerList.length > 0 ? (
                  data.passengerList.map((passenger, index) => (
                    <div key={index} className="bg-white/5 rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <p className="font-semibold text-[#FFB500]">Passenger {passenger.passengerSerialNumber}</p>
                        <p className={`font-bold ${getStatusColor(passenger.currentStatus)}`}>
                          {passenger.currentStatusDetails || passenger.currentStatus}
                        </p>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
                        <div>
                          <p className="text-gray-400">Booking Status</p>
                          <p className="text-white">{passenger.bookingStatusDetails || "N/A"}</p>
                        </div>
                        <div>
                          <p className="text-gray-400">Current Status</p>
                          <p className={`${getStatusColor(passenger.currentStatus)}`}>
                            {passenger.currentStatusDetails || passenger.currentStatus}
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-400">Berth No.</p>
                          <p className="text-white">
                            {passenger.currentBerthNo || passenger.bookingBerthNo || "N/A"}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-400 text-center py-4">No passenger information available</p>
                )}
              </div>
            </div>
          </div>

          {/* Right Column - Status Card */}
          <div className="space-y-6">
            
            {/* Current Status Card */}
            <div className="bg-gradient-to-br from-[#FFB500] to-yellow-600 rounded-2xl p-6 text-black">
              <h3 className="text-xl font-bold mb-4">Booking Summary</h3>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span>PNR Number:</span>
                  <span className="font-bold">{data?.pnrNumber || "N/A"}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Booking Date:</span>
                  <span className="font-bold">{formatDate(data?.bookingDate)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Quota:</span>
                  <span className="font-bold">{data?.quota || "N/A"}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Total Passengers:</span>
                  <span className="font-bold">{data?.numberOfpassenger || 0}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Total Fare:</span>
                  <span className="font-bold">₹{data?.bookingFare || data?.ticketFare || "N/A"}</span>
                </div>
              </div>
              
              {/* Information Messages */}
              {data?.informationMessage && data.informationMessage.filter(msg => msg && msg.trim() !== "").length > 0 && (
                <div className="mt-4 pt-4 border-t border-black/20">
                  <p className="text-sm font-semibold mb-2">Important Information:</p>
                  {data.informationMessage.filter(msg => msg && msg.trim() !== "").map((msg, idx) => (
                    <p key={idx} className="text-xs mb-1">{msg}</p>
                  ))}
                </div>
              )}
            </div>

            {/* Quick Actions Card */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button 
                  onClick={handleDownloadPDF}
                  className="w-full bg-white/10 hover:bg-white/20 rounded-lg py-3 px-4 text-left transition-colors flex items-center justify-between"
                >
                  <span>Download Ticket (PDF)</span>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </button>
                <button 
                  onClick={handleShareDetails}
                  className="w-full bg-white/10 hover:bg-white/20 rounded-lg py-3 px-4 text-left transition-colors flex items-center justify-between"
                >
                  <span>Share Details</span>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                </button>
                <button className="w-full bg-white/10 hover:bg-white/20 rounded-lg py-3 px-4 text-left transition-colors flex items-center justify-between">
                  <span>Get Updates</span>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Last Updated */}
            <p className="text-white/40 text-xs text-center">
              Last updated: {data?.timeStamp || "N/A"}
            </p>
          </div>
        </div>

        {/* Legal Text */}
        <p className="text-white/60 text-sm mt-8 text-center">
          Information displayed is as per Indian Railways database. We do not store your PNR or personal data.
        </p>
      </div>
    </section>
  );
};

export default PNRDetailsPage;