import template from "lodash.template";
import html from "./index.html";

const templateRenderer = template(html);


class Main {
  constructor() {
    this.main = document.querySelector("#content");
  }

  render() {
    const layout = templateRenderer(this.main);

    const container = document.createElement("div");
    container.innerHTML = layout;
    document.body.appendChild(container.firstChild);
  }
}

export default Main;