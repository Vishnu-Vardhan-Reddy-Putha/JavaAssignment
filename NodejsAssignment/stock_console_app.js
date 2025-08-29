// stock_console_app.js

const readline = require('readline');
const db = require('./mysqlDbConnection');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function showMenu() {
  console.log(`\nStock Market Management System`);
  console.log(`1. Add Stock`);
  console.log(`2. View All Stocks`);
  console.log(`3. View Stock by ID`);
  console.log(`4. Update Stock Price & Volume`);
  console.log(`5. Delete Stock`);
  console.log(`6. Exit`);
  rl.question(`Enter your choice: `, handleMenu);
}

function handleMenu(choice) {
  switch (choice.trim()) {
    case '1':
      addStock();
      break;
    case '2':
      viewAllStocks();
      break;
    case '3':
      viewStockById();
      break;
    case '4':
      updateStock();
      break;
    case '5':
      deleteStock();
      break;
    case '6':
      rl.close();
      db.end();
      console.log("Exited.");
      break;
    default:
      console.log("Invalid choice.");
      showMenu();
  }
}

function addStock() {
  rl.question('Enter Symbol: ', (symbol) => {
    rl.question('Enter Company Name: ', (companyName) => {
      rl.question('Enter Price: ', (price) => {
        rl.question('Enter Volume: ', (volume) => {
          if (!symbol || !companyName || isNaN(price) || isNaN(volume)) {
            console.log("Invalid input. Try again.");
            showMenu();
            return;
          }
          const sql = 'INSERT INTO stocks (symbol, companyName, price, volume) VALUES (?, ?, ?, ?)';
          db.query(sql, [symbol, companyName, parseFloat(price), parseInt(volume)], (err) => {
            if (err) throw err;
            console.log("Stock added successfully!");
            showMenu();
          });
        });
      });
    });
  });
}

function viewAllStocks() {
  db.query('SELECT * FROM stocks', (err, results) => {
    if (err) throw err;
    results.forEach(stock => {
      console.log(`ID: ${stock.id}, Symbol: ${stock.symbol}, Company: ${stock.companyName}, Price: ${stock.price}, Volume: ${stock.volume}`);
    });
    showMenu();
  });
}

function viewStockById() {
  rl.question('Enter Stock ID: ', (id) => {
    db.query('SELECT * FROM stocks WHERE id = ?', [id], (err, results) => {
      if (err) throw err;
      if (results.length === 0) {
        console.log("No stock found.");
      } else {
        const s = results[0];
        console.log(`ID: ${s.id}, Symbol: ${s.symbol}, Company: ${s.companyName}, Price: ${s.price}, Volume: ${s.volume}`);
      }
      showMenu();
    });
  });
}

function updateStock() {
  rl.question('Enter Stock ID to Update: ', (id) => {
    rl.question('Enter New Price: ', (price) => {
      rl.question('Enter New Volume: ', (volume) => {
        db.query('UPDATE stocks SET price = ?, volume = ? WHERE id = ?', [parseFloat(price), parseInt(volume), id], (err, result) => {
          if (err) throw err;
          console.log("Stock updated successfully!");
          showMenu();
        });
      });
    });
  });
}

function deleteStock() {
  rl.question('Enter Stock ID to Delete: ', (id) => {
    db.query('DELETE FROM stocks WHERE id = ?', [id], (err, result) => {
      if (err) throw err;
      console.log("Stock deleted.");
      showMenu();
    });
  });
}

// Start app
db.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL.");
  showMenu();
});
