import { JS_DIR, PAGE_DIR } from "../src/config.js";
import { Session } from "./session.js";
import { main as headermain, initNavigation } from "./header.js";


const session = await findSession();
await loadPage();


async function findSession(){
    const session = new Session();

    if(sessionStorage.getItem("session") === null){
        await session.init();
        session.save();
    }
    else{
        session.restore();
    }

    return session;
}

/*
    1. Runs the JS-script of the currently opened html page
    2. Runs the header script
    3. after the scripts are finished, unhides the body tag (removes the class of "init")
        
    prerequisites for the JS-script:
    - has to be located in js/pages/..
    - have a matching name (page.js)
    - export async function main(session)

    applying this to an html file:
    - <script type="module" src="...../page-init.js"></script>
    - html file should be in root/html/pages/.. (required for header navigation)
    - add class="init" to html body tag for the hide functionality
*/

async function loadPage(){
    // extracts the page name from the path (file extension is also removed)
    const currentPage = window.location.pathname
        .split("/").pop()
        .split(".")[0];
    
    let modulePath;

    try{
        // loads the JS-script
        modulePath = `${JS_DIR}pages/${currentPage}.js`;

        const pageModule = await import(modulePath);
        await pageModule.main(session);
        await headermain(session);
        initNavigation(navigate);
        
        document.body.classList.toggle("init", false);
    }
    catch(error){
        console.error(`Page script failed: ${modulePath} \n${error}`);
    }
}

/*
    Navigates to a new page in PAGE_DIR.
    Argument has to be in form of page.html
*/

export function navigate(filename){
    session.save();
    window.location.href = PAGE_DIR + filename;
}
