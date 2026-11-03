import { MENU, menuLine } from "./menu.js";
import { itemCount, orderTotal } from "./order.js";

const order = [];
const menuList = document.getElementById("menu");
const totalParagraph = document.getElementById("total");
const sendButton = document.getElementById("send-order");

for (const item of MENU) {
  const li = document.createElement("li");
  const label = document.createElement("span");
  label.textContent = menuLine(item);

  const button = document.createElement("button");
  button.type = "button";
  button.textContent = "Add";
  button.addEventListener("click", () => {
    order.push(item);
    totalParagraph.textContent = "Total: " + orderTotal(order);
  });

  li.append(label, " ", button);
  menuList.appendChild(li);
}

sendButton.addEventListener("click", () => {
  if (itemCount(order) === 0) {
    totalParagraph.textContent = "Add at least one item first.";
    return;
  }
  totalParagraph.textContent = "Order sent.";
});
