import test from "node:test";
import assert from "node:assert/strict";
import { MENU } from "../src/menu.js";
import { itemCount, orderTotal } from "../src/order.js";

test("counts the items in an order", () => {
  const [soup, , wrap] = MENU;
  assert.equal(itemCount([soup, wrap]), 2);
});

test("order total shows a whole-dollar total with cents", () => {
  const items = [
    { id: "soup", name: "Soup", cents: 650 },
    { id: "side", name: "Side", cents: 550 },
  ];
  assert.equal(orderTotal(items), "$12.00");
});
