// services/pnrService.js
import { mockResponses } from "../components/mockpnrdata";


// Set this to true for testing with mock data, false for real API
const USE_MOCK_DATA = true;

const RAPID_API_KEY = '1af7074433msh8d74f1e64e06834p1f8e14jsnb32827f7d8f9';
const RAPID_API_HOST = 'irctc-indian-railway-pnr-status.p.rapidapi.com';

export const fetchPNRStatus = async (pnrNumber) => {
  // Use mock data for testing
  if (USE_MOCK_DATA) {
    console.log('Using mock data for PNR:', pnrNumber);
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Check if we have mock data for this PNR
    if (mockResponses[pnrNumber]) {
      return mockResponses[pnrNumber];
    } else {
      // Return error for invalid mock PNR
      return {
        success: false,
        message: "FLUSHED PNR / PNR NOT YET GENERATED",
        generatedTimeStamp: Date.now()
      };
    }
  }

  // Real API call (keep this for when you want to switch to real API)
  const url = `https://irctc-indian-railway-pnr-status.p.rapidapi.com/getPNRStatus/${pnrNumber}`;
  
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-host': RAPID_API_HOST,
      'x-rapidapi-key': RAPID_API_KEY
    }
  };

  try {
    console.log('Making API request to:', url);
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error in fetchPNRStatus:', error);
    throw error;
  }
};