import { MENU, menuLine } from "./menu.js";
import { orderTotal } from "./order.js";

const order = [];
const menuList = document.getElementById("menu");
const totalParagraph = document.getElementById("total");

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
