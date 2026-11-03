// Shared price helper. The menu and the order summary both use it.
export function formatPrice(cents) {
  return `$${(cents / 100).toFixed(2)}`;
}
