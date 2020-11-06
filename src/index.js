import "./style.css";

import Header from "./header/header";
const header = new Header();
header.render();

import Main from "./main/main";
const main = new Main();
main.render();

import List from "./films/films";
const films = new List();
films.render();