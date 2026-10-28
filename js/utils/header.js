import { ROOT_DIR, CSS_DIR, getUserImg } from "../../config.js";
import { readhtml, readjson } from "./filereader.js";
import { applyCss } from "./utils.js";

export async function main(activeUID){
    applyCss(CSS_DIR + "header.css");

    // format: xxxx.html
    const header = await readhtml(ROOT_DIR + "html/components/header.html");
    const userdata = await readjson(ROOT_DIR + "resources/json/users.json");
    
    await initDropdown();
    
    header.querySelector("ul").children[getCurrentPage()].querySelector("a").classList.add("active");
    document.querySelector("header").replaceWith(header);
    
    async function initDropdown(){
        const dropdown = header.querySelector(".profile-dropdown");
        const dropdowncontent = dropdown.querySelector(".dropdown-content");
        const currentuser = userdata[activeUID];
    
        const dropdownbutton = dropdown.querySelector(".dropdown-button");
        dropdownbutton.addEventListener("click", e => {
            e.preventDefault();
            dropdown.classList.toggle("active");
            dropdownbutton.classList.toggle("active"); 
        });
    
        const profimg = dropdown.querySelector(".profileimg");
        profimg.src = await getUserImg(activeUID);
    
        const logout = dropdowncontent.querySelector("#logout");
        logout.href = ROOT_DIR + "index.html";
    
        const username = document.createElement("a");
        username.textContent = currentuser.username;
    
        const email = document.createElement("a");
        email.textContent = currentuser.email;
    
        dropdowncontent.prepend(username, email);
    }
    
    function getCurrentPage(){
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
    
        return i;
    }
}

