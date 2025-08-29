// server.js
const net = require('net');

// In-memory jewellery stock
let jewelleryItems = [
  { id: 1, name: 'Gold Ring', quantity: 5, price: 15000 },
  { id: 2, name: 'Silver Necklace', quantity: 3, price: 5000 }
];

const server = net.createServer((socket) => {
  console.log('Client connected.');

  socket.on('data', (data) => {
    const input = data.toString().trim();
    console.log(`Received: ${input}`);

    if (input === 'LIST') {
      let response = jewelleryItems.map(item =>
        `ID: ${item.id}, Name: ${item.name}, Quantity: ${item.quantity}, Price: ${item.price}`
      ).join('\n');
      socket.write(response + '\n');
    }

    else if (input.startsWith('ADD')) {
      const parts = input.split(' ');
      if (parts.length < 5) {
        socket.write('Invalid ADD command. Format: ADD <id> <name> <quantity> <price>\n');
      } else {
        const id = parseInt(parts[1]);
        const name = parts.slice(2, parts.length - 2).join(' ');
        const quantity = parseInt(parts[parts.length - 2]);
        const price = parseInt(parts[parts.length - 1]);

        jewelleryItems.push({ id, name, quantity, price });
        console.log(`Added item: ID=${id}, Name=${name}, Quantity=${quantity}, Price=${price}`);
        socket.write('Jewellery item added successfully!\n');
      }
    }

    else if (input === 'EXIT') {
      socket.write('Client disconnected.\n');
      socket.end();
    }

    else {
      socket.write('Unknown command. Use LIST, ADD, or EXIT.\n');
    }
  });

  socket.on('end', () => {
    console.log('Client disconnected.');
  });

  socket.on('error', (err) => {
    console.error('Socket error:', err.message);
  });
});

server.listen(5000, () => {
  console.log('TCP Server running on port 5000...');
});


/*
C:\Users\putha\NodeJsAssignment>node server.js
TCP Server running on port 5000...
Client connected.
Received: LIST
Received: ADD 3 Diamond Earring 2 75000
Added item: ID=3, Name=Diamond Earring, Quantity=2, Price=75000
Received: exit
Received: EXIT
Client disconnected.
*/