import { JS_DIR } from "../config.js";
import { Session } from "./utils/session.js";
import { main as headermain } from "./utils/header.js";

await loadPage();

/*
    1. Runs the JS-script of the currently opened html page
    2. Runs the header script
    3. after the scripts are finished, unhides the body tag (removes the class of "init")
        
    prerequisites for the JS-script:
    - has to be located in js/pages
    - have a matching name (page.js)
    - export async function main(session)
    
    To use the hide functionality, the HTML-s body tag has to have a classname of "init"
*/
async function loadPage(){
    // extracts the page name from the path (file extension is also removed)
    const currentPage = window.location.pathname
        .split("/").pop()
        .split(".")[0];

    try{
        const session = new Session();
        await session.init();

        // loads the JS-script
        const modulePath = `${JS_DIR}pages/${currentPage}.js`;

        const pageModule = await import(modulePath);
        await pageModule.main(session);
        await headermain(session.getActiveUID());
        
        document.body.classList.toggle("init", false);
    }
    catch(error){
        console.error(`Page script failed: ${modulePath}`);
    }
}
