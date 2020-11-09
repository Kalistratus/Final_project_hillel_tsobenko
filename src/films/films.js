import template from "lodash.template";
import html from "./index.html";
import "../main/index.html";
import filmsList from "./filmList.json"

const templateRenderer = template(html);

class List {
  constructor() {
    this.films = filmsList;
    this.main = document.querySelector("main");
  }

  render() {
    const layout = templateRenderer({
      films: this.films
    });

    const container = document.createElement("div");
    container.className = "card_items";
    container.innerHTML = layout;

    document.addEventListener('click', (event) => {
      switch (event.target.dataset.id) {
        case "edit":
          console.log("Edit");
          break;
        case "delete":
          console.log("Delete");
          break;
        case "more":
          console.log("More");
          break;
        default:
          break;
      }
    });

    this.main.appendChild(container);
  }
}

export default List;