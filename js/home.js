import { ROOT_DIR, getUserImg, getPostImg } from "../config.js";
import { readhtml } from "./utils/filereader.js";
import { formatDate } from "./utils/formatting.js";
import { Session } from "./utils/session.js";



const session = new Session();
await session.init();

const main = document.querySelector("main");
const postHTMLtemplate = await readhtml(ROOT_DIR + "html/components/post.html");

for(let post of session.getPostsData()){
    main.append(await getPostHTML(post));
}

async function getPostHTML(post){
    const postHTML = postHTMLtemplate.cloneNode(true);

    // DOM-objects
    const userimg = postHTML.querySelector(".post-profile");
    const username = postHTML.querySelector(".post-username");
    const postdate = postHTML.querySelector(".post-date");
    
    const postdescription = postHTML.querySelector(".post-description");
    const postimg = postHTML.querySelector(".post-image");
    const likebutton = postHTML.querySelector(".post-like");
    const likecounter = postHTML.querySelector(".likecount");
    

    // Setting content values
    userimg.src = await getUserImg(post.userid);
    username.textContent = session.getUsername(post.userid);
    postdate.textContent = formatDate(post.time_created);
    
    postdescription.textContent = post.description;
    postimg.src = await getPostImg(post.id);

    
    // Like button & likecount
    let [isLiked, count] = session.countLikes(post.id);

    function updateLikes(){
        likebutton.classList.toggle("liked", isLiked);
        likecounter.textContent = count;
        likecounter.classList.toggle("iszero", count === 0);
    }

    updateLikes();
    
    likebutton.addEventListener("click", e => {
        e.preventDefault();

        isLiked = !isLiked;
        count = Math.max(0, count + (isLiked ? 1 : -1));

        updateLikes();
    });

    return postHTML;
}