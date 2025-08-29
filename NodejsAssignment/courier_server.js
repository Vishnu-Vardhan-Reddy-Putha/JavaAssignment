// courier_server.js
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 4000; // Use a different port than your existing server

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve the HTML form
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle form submission
app.post('/submit', (req, res) => {
  const {
    trackingId,
    senderName,
    receiverName,
    pickupAddress,
    deliveryAddress,
    weight
  } = req.body;

  // Basic validation
  if (!trackingId || !senderName || !receiverName || !pickupAddress || !deliveryAddress || !weight) {
    return res.send("All fields are required.");
  }

  const weightNum = parseFloat(weight);
  const cost = 50 + (weightNum * 20);

  const response = `
    <h2>Courier Submitted Successfully!</h2>
    <p><strong>Courier Tracking ID:</strong> ${trackingId}</p>
    <p><strong>Sender:</strong> ${senderName}</p>
    <p><strong>Receiver:</strong> ${receiverName}</p>
    <p><strong>Pickup:</strong> ${pickupAddress}</p>
    <p><strong>Delivery:</strong> ${deliveryAddress}</p>
    <p><strong>Weight:</strong> ${weightNum} kg</p>
    <p><strong>Courier Cost:</strong> ₹${cost}</p>
  `;
  res.send(response);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Courier server running at http://localhost:${PORT}`);
});
