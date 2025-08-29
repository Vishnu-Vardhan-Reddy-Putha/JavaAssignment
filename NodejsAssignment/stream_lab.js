const fs = require('fs');
const path = require('path');

// Fruit data to write
const fruits = [
  { id: 1, name: "Apple", color: "Red", price: 120 },
  { id: 2, name: "Banana", color: "Yellow", price: 40 },
  { id: 3, name: "Mango", color: "Orange", price: 150 }
];

// 1. Create a Writable Stream
const writeStream = fs.createWriteStream('fruits.txt');

fruits.forEach(fruit => {
  writeStream.write(JSON.stringify(fruit) + '\n');
});

writeStream.end(); // Close the stream

writeStream.on('finish', () => {
  console.log("Data written to fruits.txt successfully.\n");

  // 2. Create a Readable Stream
  console.log("Reading fruits.txt using stream...");
  const readStream = fs.createReadStream('fruits.txt', 'utf8');

  readStream.on('data', (chunk) => {
    const lines = chunk.trim().split('\n');
    lines.forEach(line => {
      const fruit = JSON.parse(line);
      console.log(`Fruit ID: ${fruit.id}, Name: ${fruit.name}, Color: ${fruit.color}, Price: ${fruit.price}`);
    });
  });

  readStream.on('end', () => {
    console.log("\nFinished reading fruits.txt.\n");

    // 3. Pipe Stream: Copy content to another file
    const readForPipe = fs.createReadStream('fruits.txt');
    const writeForPipe = fs.createWriteStream('fruits_copy.txt');

    readForPipe.pipe(writeForPipe);

    writeForPipe.on('finish', () => {
      console.log("Content copied to fruits_copy.txt using pipe.");
    });
  });

  readStream.on('error', (err) => {
    console.error("Error reading file:", err);
  });
});

writeStream.on('error', (err) => {
  console.error("Error writing file:", err);
});
