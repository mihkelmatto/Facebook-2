import { ROOT_DIR } from "../config.js";

console.log(ROOT_DIR);

fetch(ROOT_DIR + "/html/header.html")
    .then(response => {
        if(!response.ok){
            throw new Error("header.html not found");
        }
        return response.text();
    })
    .then(html => {
        const parser = new DOMParser();
        const header = parser.parseFromString(html, "text/html").body.children[0];

        // format: xxxx.html
        const currentPage = window.location.pathname.split("/").pop();
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


        document.body.prepend(header);
    })
    .catch(error => console.error(error));