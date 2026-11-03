// Shared price helper. The menu and the order summary both use it.
export function formatPrice(cents) {
  const dollars = cents / 100;
  if (cents % 100 === 0) {
    return `$${dollars}`;
  }
  return `$${dollars.toFixed(2)}`;
}
