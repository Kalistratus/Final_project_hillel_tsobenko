import "./style.css";
import { getHistory } from "./app-history";

const history = getHistory();


import Container from "./container/container";
const container = new Container();
document.body.appendChild(container.render());

const containerTag = document.querySelector("div.container");


import Header from "./header/header";
const header = new Header();
containerTag.appendChild(header.render());


import Main from "./main/main";
const main = new Main();
containerTag.appendChild(main.render());

const mainTag = document.querySelector("main");


import List from "./films/films"

function renderRoute(path) {
  switch (path) {
      case "/list":
        const list = new List();
        mainTag.appendChild(list.render());
          break;
      default:
        console.log("404");
          break;
  }
}

history.listen(listener => {
  console.log("LISTEN", listener);
  renderRoute(listener.location.pathname);
});


import MainHead from "./mainhead/mainhead";

if (history.location.pathname === "/") {
  const mainhead = new MainHead();
  mainTag.appendChild(mainhead.render());

} else {
  renderRoute(history.location.pathname);
}


import Footer from "./footer/footer";
const footer = new Footer();
containerTag.appendChild(footer.render());