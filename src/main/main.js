import html from "./index.html";
import "../header/index.html";


class Main {
  constructor() {
    this.main = document.querySelector("#content");
    this.header = document.querySelector("div.container");
  }

  render() {
    const container = document.createElement("div");
    container.innerHTML = html;
    this.header.appendChild(container.firstChild);
  }
}

export default Main;