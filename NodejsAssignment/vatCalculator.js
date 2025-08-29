// vatCalculator.js

const defaultVATRate = 0.03;

function calculateVAT(price, vatRate = defaultVATRate) {
  const vat = price * vatRate;
  const totalPrice = price + vat;

  return {
    vat: Math.round(vat),
    totalPrice: Math.round(totalPrice)
  };
}

module.exports = { calculateVAT };
