// server.js - Simple Express Proxy for BDG API

const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get('/bdg', async (req, res) => {
  const apiUrl = 'https://api.bdg88zf.com/api/webapi/GetNoaverageEmerdList?GameCode=win5&Count=1';

  try {
    const response = await fetch(bdgUrl, {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
    'Accept': 'application/json'
  }
});

  } catch (err) {
    console.error('Error fetching BDG API:', err);
    res.status(500).json({ error: 'Failed to fetch BDG data' });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server running on port ${PORT}`);
});
