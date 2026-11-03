import test from "node:test";
import assert from "node:assert/strict";
import { formatPrice } from "../src/price.js";

test("formats cents as dollars and cents", () => {
  assert.equal(formatPrice(425), "$4.25");
});

test("formats small amounts with a leading zero", () => {
  assert.equal(formatPrice(5), "$0.05");
});
