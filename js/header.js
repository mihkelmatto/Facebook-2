import { ROOT_DIR } from "../config.js";
import { readhtml } from "./utils/filereader.js";

// format: xxxx.html
const currentPage = window.location.pathname.split("/").pop();
const header = await readhtml(ROOT_DIR + "/html/components/header.html");

let i = 0;
switch(currentPage){
    case "home.html":
        i = 0;
        break;
    case "addPost.html":
        i = 1;
        break;
}

header.querySelector("ul").children[i].querySelector("a").classList.add("active");
document.querySelector("header").replaceWith(header);