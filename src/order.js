import { formatPrice } from "./price.js";

export function orderTotal(items) {
  const sum = items.reduce((total, item) => total + item.cents, 0);
  return formatPrice(sum);
}

export function itemCount(items) {
  return items.length;
}
