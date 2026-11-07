import { ROOT_DIR, CSS_DIR, getUserImg, getPostImg } from "../../config.js";
import { readhtml } from "../utils/files.js";
import { formatDate } from "../utils/formatting.js";
import { applyCss } from "../utils/utils.js";

/*
    1. Applies home.css
    2. Creates HTML objects from posts.json and adds them to DOM.
*/

export async function main(session) {
    applyCss(CSS_DIR + "home.css");
    
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
   
        function updateLikes(){
            const count = session.getLikes(post.id);
            const isLiked = session.getIsLiked(post.id);

            likebutton.classList.toggle("liked", isLiked);
            likecounter.textContent = count;
            likecounter.classList.toggle("iszero", count === 0);
        }
        
        updateLikes();

        let liked = likebutton.classList.contains("liked");

        likebutton.addEventListener("click", e => {
            e.preventDefault();

            liked = !liked;
            session.setLiked(post.id, liked);
            session.save();
            
            updateLikes();
        });
    
        return postHTML;
    }   
}