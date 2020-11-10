import html from "./index.html";
import {renderTemplate} from "../template-utils";
import films from "./filmList.json";
import { getHistory } from "../app-history";

const history = getHistory();

class List {
  constructor() {
    this.films = renderTemplate(html, { films });
  }

  onClick(event) {
    if (event.target.tagName !== "button") return;

    event.preventDefault();
    history.push(event.target.href);
}

  render() {
    this.films.addEventListener("click", this.onClick.bind(this));

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

    return this.films;
  }
}

export default List;