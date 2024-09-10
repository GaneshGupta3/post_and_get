const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json()); // This will parse JSON request bodies automatically

// Example GET route
app.get('/api', (req, res) => {
  const data = {
    message: "Hello from Express",
    user: {
      name: "John Doe",
      email: "john.doe@example.com",
      age: 30
    },
    timestamp: new Date().toISOString(),
  };
  res.json(data);
});

// New POST route
app.post('/api/post-data', (req, res) => {
  console.log('Received data:', req.body); // Log the data to the server console

  // Respond back to the client
  res.json({ status: 'Data received successfully', receivedData: req.body });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
