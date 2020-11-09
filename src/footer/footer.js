import html from "./index.html";
import "../header/index.html";

class Footer {
  constructor() {
    this.footer = document.querySelector("footer");
    this.header = document.querySelector("div.container");
  }

  render() {
    const container = document.createElement("div");
    container.innerHTML = html;
    this.header.appendChild(container.firstChild);
  }
}

export default Footer;