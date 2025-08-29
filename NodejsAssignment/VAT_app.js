// app.js

const { calculateVAT } = require('./vatCalculator');

const jewellery = {
  id: 1,
  name: "Gold Necklace",
  price: 50000
};

const result = calculateVAT(jewellery.price);

console.log(`Jewellery ID: ${jewellery.id}`);
console.log(`Name: ${jewellery.name}`);
console.log(`Price: ${jewellery.price}`);
console.log(`VAT (3%): ${result.vat}`);
console.log(`Total Price: ${result.totalPrice}`);







