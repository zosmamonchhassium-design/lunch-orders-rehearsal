import { formatPrice } from "./price.js";

export const MENU = [
  { id: "soup", name: "Soup", cents: 650 },
  { id: "salad", name: "Salad", cents: 1200 },
  { id: "wrap", name: "Wrap", cents: 875 },
];

export function menuLine(item) {
  return `${item.name} - ${formatPrice(item.cents)}`;
}
