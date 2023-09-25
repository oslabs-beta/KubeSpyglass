const express = require('express');
const path = require('path');
const fs = require('fs'); 
const cors = require('cors');

const app = express();
const PORT = 3005;

app.use(express.json());
app.use(cors());

// Serve your React app
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/index.html'));
});

// Create an endpoint to serve the JSON data
app.get('/api/structure', (req, res) => {
  try {
    const data = fs.readFileSync(path.resolve(__dirname, '../sampleStructure.json'), 'utf-8');
    const jsonData = JSON.parse(data);
    res.json(jsonData);
  } catch (error) {
    console.error('Error reading JSON file:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));

module.exports = app; 