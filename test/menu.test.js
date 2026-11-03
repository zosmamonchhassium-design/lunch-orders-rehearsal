import test from "node:test";
import assert from "node:assert/strict";
import { MENU, menuLine } from "../src/menu.js";

test("lists menu items in order", () => {
  assert.deepEqual(
    MENU.map((item) => item.id),
    ["soup", "salad", "wrap"],
  );
});

test("menu line shows a whole-dollar price with cents", () => {
  const salad = MENU.find((item) => item.id === "salad");
  assert.equal(menuLine(salad), "Salad - $12.00");
});
