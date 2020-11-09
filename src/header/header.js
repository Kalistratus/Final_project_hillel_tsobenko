import html from "./index.html";


class Header {
  constructor() {
    this.header = document.querySelector("header");
  }

  render() {
    const container = document.createElement("div");
    container.innerHTML = html;
    document.body.appendChild(container.firstChild);
  }
}

export default Header;