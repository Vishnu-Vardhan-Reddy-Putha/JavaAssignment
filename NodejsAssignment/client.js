// client.js
const net = require('net');
const readline = require('readline');

const client = new net.Socket();

// Connect to server
client.connect(5000, 'localhost', () => {
  console.log('Connected to server.');
  askInput(); // Ask for input once connected
});

// Read user input from terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask for input and send to server
function askInput() {
  rl.question('Client Input: ', (input) => {
    client.write(input);
    // Wait for server response before asking next input
  });
}

// Handle data from server
client.on('data', (data) => {
  console.log(`\nServer Response:\n${data.toString()}`);
  if (data.toString().includes('disconnected')) {
    rl.close();
    client.end();
  } else {
    askInput();
  }
});

// Handle errors
client.on('error', (err) => {
  console.error('Client error:', err.message);
});

// Handle close event
client.on('close', () => {
  console.log('Connection closed.');
});

/*
C:\Users\putha\NodeJsAssignment>node client.js
Connected to server.
Client Input: LIST

Server Response:
ID: 1, Name: Gold Ring, Quantity: 5, Price: 15000
ID: 2, Name: Silver Necklace, Quantity: 3, Price: 5000

Client Input: ADD 3 Diamond Earring 2 75000

Server Response:
Jewellery item added successfully!

Client Input: exit

Server Response:
Unknown command. Use LIST, ADD, or EXIT.

Client Input: EXIT

Server Response:
Client disconnected.

Connection closed.
*/