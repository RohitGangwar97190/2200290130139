const BASE_URL = '/evaluation-service'; 

const API_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQ2Nzk4MzY0LCJpYXQiOjE3NDY3OTgwNjQsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjMxNDc3MTkyLThkYjctNGQwYy1iMTMzLWU5NTgyYmVjY2I0NCIsInN1YiI6ImFkYXJzaC4yMjI2Y3MxMDA5QGtpZXQuZWR1In0sImVtYWlsIjoiYWRhcnNoLjIyMjZjczEwMDlAa2lldC5lZHUiLCJuYW1lIjoiYWRhcnNoIHRpd2FyaSIsInJvbGxObyI6IjIyMDAyOTAxMjAwMDYiLCJhY2Nlc3NDb2RlIjoiU3hWZWphIiwiY2xpZW50SUQiOiIzMTQ3NzE5Mi04ZGI3LTRkMGMtYjEzMy1lOTU4MmJlY2NiNDQiLCJjbGllbnRTZWNyZXQiOiJuQ2NlUGZ3dmRLdkhOQ2tOIn0.phyK3tcvrrMpLQnC0vxlZHSBMHYHzsiAu4R7X5nUNFQ'; // ✅ REPLACE THIS with your actual token

export const fetchStockPrices = async (stockSymbol, minutes = 30) => {
  try {

    const response = await fetch(`${BASE_URL}/stocks/${stockSymbol}?minutes=${minutes}`, {
      headers: {
        'Authorization': `Bearer ${API_TOKEN}`,  
        'Content-Type': 'application/json'
      }
    });

   
    if (!response.ok) {
      const errorText = await response.text();
      console.error('API Error:', response.status, errorText);
      throw new Error(`Fetch failed: ${response.status} - ${errorText}`);
    }

   
    const json = await response.json();

   
    console.log('Fetched data:', json);

   
    return json;
  } catch (err) {
    
    console.error('Network/API error:', err);
    throw err; 
  }
};
