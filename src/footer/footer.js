import template from "lodash.template";
import html from "./index.html";
import "../header/index.html";

const templateRenderer = template(html);


class Footer {
  constructor() {
    this.footer = document.querySelector("footer");
    this.header = document.querySelector("div.container");
  }

  render() {
    const layout = templateRenderer(this.footer);

    const container = document.createElement("div");
    container.innerHTML = layout;
    this.header.appendChild(container.firstChild);
  }
}

export default Footer;