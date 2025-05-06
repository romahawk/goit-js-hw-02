function makeTransaction(quantity, pricePerDroid, customerCredits) {
  const totalPrice = quantity * pricePerDroid;
  return totalPrice > customerCredits
    ? "Insufficient funds!"
    : `You ordered ${quantity} droids worth ${totalPrice} credits!`;
}