export function calculateTotal(items, tax) {

  const taxableItems = items.filter(({taxable}) => taxable === true);
  const taxablePrices = taxableItems.map(({price}) => price);
  const nontaxItems = items.filter(({taxable}) => taxable === false);
  const nontaxPrices = nontaxItems.map(({price}) => price)

  let taxableItemPrice = taxablePrices.reduce((a, b) => a + b, 0);
  let nontaxItemPrice = nontaxPrices.reduce((x, y) => x + y, 0);

  if (tax > 0) {
    var total = ((taxableItemPrice*tax) + taxableItemPrice) + nontaxItemPrice
   } else if (tax === 0) {
    var total = (taxableItemPrice + nontaxItemPrice)
   } else {
    var total = ((taxableItemPrice*(Math.abs(tax))) + taxableItemPrice) + nontaxItemPrice
   }

    // (tax === 0) ? (total = (taxableItemPrice + nontaxItemPrice)) : (total = ((taxableItemPrice*(Math.abs(tax))) + taxableItemPrice) + nontaxItemPrice)

  return total;
}
