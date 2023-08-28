// vercel/functions/records.js

const fetch = require('node-fetch');

module.exports = async (req, res) => {
  const expressUrl = 'http://51.103.71.229:7000/records'; // Your Express server's records endpoint URL
  try {
    const response = await fetch(expressUrl);
    if (!response.ok) {
      throw new Error('Failed to fetch data from Express server');
    }
    const data = await response.json();

    // Forward the response back to the Vercel app
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
};
