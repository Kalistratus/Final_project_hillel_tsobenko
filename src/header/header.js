import template from "lodash.template";
import html from "./index.html";

const templateRenderer = template(html);


class Header {
  constructor() {
    this.header = document.querySelector("header");
  }

  render() {
    const layout = templateRenderer(this.header);

    const container = document.createElement("div");
    container.innerHTML = layout;
    document.body.appendChild(container.firstChild);
  }
}

export default Header;