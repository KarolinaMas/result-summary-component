import { data } from "./data.js";

console.log(data);

function renderListItems() {
  const itemList = document.querySelector("ul");

  let html = "";

  data.forEach((item) => {
    html += `
  <li class=${item.color}>
        <span>
            <img src=${item.icon} alt="icon" />
            <h4>${item.category}</h4>
        </span>
        <p class="points"><span>${item.score}</span>/ 100</p>
    </li>
  `;
  });

  itemList.innerHTML = html;
}

renderListItems();
