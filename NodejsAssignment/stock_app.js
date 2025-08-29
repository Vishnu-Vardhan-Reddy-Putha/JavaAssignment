// app.js
const db = require('./mysqlDbConnection');

// 1. CREATE: Add a stock
function addStock(symbol, companyName, price, volume, callback) {
  const sql = 'INSERT INTO stocks (symbol, companyName, price, volume) VALUES (?, ?, ?, ?)';
  db.query(sql, [symbol, companyName, price, volume], (err, result) => {
    if (err) return callback(err);
    console.log(`Stock added with ID: ${result.insertId}`);
    callback(null);
  });
}

// 2. READ: List all stocks
function listStocks(callback) {
  db.query('SELECT * FROM stocks', (err, results) => {
    if (err) return callback(err);
    console.log('All Stocks:');
    results.forEach((stock) => {
      console.log(`ID: ${stock.id}, Symbol: ${stock.symbol}, Company: ${stock.companyName}, Price: ${stock.price}, Volume: ${stock.volume}`);
    });
    callback(null);
  });
}

// 3. UPDATE: Update stock price and volume
function updateStockPriceAndVolume(id, price, volume, callback) {
  const sql = 'UPDATE stocks SET price = ?, volume = ? WHERE id = ?';
  db.query(sql, [price, volume, id], (err, result) => {
    if (err) return callback(err);
    console.log(`Updated stock ID ${id}`);
    callback(null);
  });
}

// 4. DELETE: Delete stock by ID
function deleteStock(id, callback) {
  const sql = 'DELETE FROM stocks WHERE id = ?';
  db.query(sql, [id], (err, result) => {
    if (err) return callback(err);
    console.log(`Deleted stock ID ${id}`);
    callback(null);
  });
}

// Sequential Execution
db.connect((err) => {
  if (err) throw err;
  console.log('MySQL Connected');

  // Step 1: Add stock
  addStock('AAPL', 'Apple Inc.', 175.50, 1000, (err) => {
    if (err) throw err;

    // Step 2: List stocks
    listStocks((err) => {
      if (err) throw err;

      // Step 3: Update price and volume for ID 1
      updateStockPriceAndVolume(1, 180.00, 1200, (err) => {
        if (err) throw err;

        // Step 4: Delete stock ID 1
        deleteStock(1, (err) => {
          if (err) throw err;

          // Close DB
          db.end((err) => {
            if (err) throw err;
            console.log('MySQL connection closed');
          });
        });
      });
    });
  });
});
