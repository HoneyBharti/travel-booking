// // components/APITest.jsx
// import React, { useState } from 'react';

// const APITest = () => {
//   const [pnr, setPnr] = useState('');
//   const [response, setResponse] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   const testAPI = async () => {
//     if (!pnr || pnr.length !== 10) {
//       setError('Please enter a valid 10-digit PNR');
//       return;
//     }

//     setLoading(true);
//     setError('');
    
//     try {
//       const response = await fetch(`https://irctc-indian-railway-pnr-status.p.rapidapi.com/getPNRStatus/${pnr}`, {
//         method: 'GET',
//         headers: {
//           'x-rapidapi-host': 'irctc-indian-railway-pnr-status.p.rapidapi.com',
//           'x-rapidapi-key': '1af7074433msh8d74f1e64e06834p1f8e14jsnb32827f7d8f9'
//         }
//       });
      
//       const data = await response.json();
//       console.log('API Response:', data);
//       setResponse(data);
//     } catch (err) {
//       console.error('API Error:', err);
//       setError('Failed to fetch PNR status');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="p-8 max-w-2xl mx-auto">
//       <h2 className="text-2xl font-bold mb-4">API Test Page</h2>
      
//       <div className="mb-4">
//         <input
//           type="text"
//           value={pnr}
//           onChange={(e) => setPnr(e.target.value)}
//           placeholder="Enter 10-digit PNR"
//           className="border p-2 w-full rounded"
//           maxLength="10"
//         />
        
//         <button
//           onClick={testAPI}
//           disabled={loading}
//           className="mt-2 bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
//         >
//           {loading ? 'Testing...' : 'Test API'}
//         </button>
        
//         {error && <p className="text-red-500 mt-2">{error}</p>}
//       </div>
      
//       {response && (
//         <div className="mt-4">
//           <h3 className="font-bold mb-2">Response:</h3>
//           <pre className="bg-gray-100 p-4 rounded overflow-auto max-h-96">
//             {JSON.stringify(response, null, 2)}
//           </pre>
          
//           {response.success && (
//             <div className="mt-4 bg-green-100 p-4 rounded">
//               <p className="text-green-700 font-bold">API is working!</p>
//               <p>Train: {response.data?.trainName}</p>
//               <p>PNR: {response.data?.pnrNumber}</p>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default APITest;