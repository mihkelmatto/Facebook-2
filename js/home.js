import { ROOT_DIR } from "../config.js";
import { readhtml, readjson, fileExists} from "./utils/filereader.js";

const main = document.querySelector("main");
const postHTMLtemplate = await readhtml(ROOT_DIR + "html/components/post.html");

const postdata = await readjson(ROOT_DIR + "resources/json/posts.json");
const userdata = await readjson(ROOT_DIR + "resources/json/users.json");
const likedata = await readjson(ROOT_DIR + "resources/json/post_likes.json");

const currentUID = 1; // TODO

for(let p of postdata){
    main.append(await getPostHTML(p));
}

async function getPostHTML(p){
    const postHTML = postHTMLtemplate.cloneNode(true);
    const owner = userdata[p.userid];

    const likebutton = postHTML.querySelector(".post-like");
    let [liked, likecount] = countLikes(p.id);
    
    // post-header
    postHTML.querySelector(".post-profile").src = await getProfPath(p.userid);
    postHTML.querySelector(".post-username").textContent = owner.username;
    postHTML.querySelector(".post-date").textContent = formatDate(p.time_created);
    
    // post-content
    postHTML.querySelector(".post-description").textContent = p.description;
    postHTML.querySelector(".post-image").src = await getPostImgPath(p.id);

    // post-footer
    if(liked){
        likebutton.classList.add("liked");
    }
    if(likecount > 0){
        postHTML.querySelector(".likecount").textContent = likecount;
    }

    // Listeners
    likebutton.addEventListener("click", e => {
        e.preventDefault();

        const likeCountLabel = likebutton.closest(".post-footer").querySelector(".likecount");
        const liked = likebutton.classList.toggle("liked");

        let count = Number(likeCountLabel.textContent) || 0;
        count = (liked) ? count + 1 : count - 1;

        likeCountLabel.textContent = (count > 0) ? count : "";
    });

    return postHTML;
}

    /*
        Returns a date in following format:
        - locale: en-GB
        - 21 October 2026 at 14:45
    */

function formatDate(timestamp){
    return new Date(timestamp).toLocaleString("en-GB", {
        day: "2-digit",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false
    });
}

    /*
        returns the path for user's profile image
        - all images have to be jpg
        - img name = userid
        - default: profile-icon.jpg
    */

export async function getProfPath(userid){
    const BASE_PATH = `${ROOT_DIR}resources/images/profile/`;
    let profPath = `${BASE_PATH}${userid}.jpg`;

    if(!(await fileExists(profPath))){
        profPath = `${BASE_PATH}profile-icon.jpg`;
    }

    return profPath;
}

    /*
        returns the path for post's image
        - all images have to be jpg
        - img name = postid
    */

async function getPostImgPath(postid){
    const BASE_PATH = ROOT_DIR + "resources/images/posts/";
    let pImgPath = `${BASE_PATH}${postid}.jpg`

    if(!(await fileExists(pImgPath))){
        pImgPath = "";
    }

    return pImgPath;
}
    /*
        Returns a list [boolean liked, int likecount]
        - liked: true if the current user has liked the post
        - likecount: post's like count from all users
    */

function countLikes(postid){
    let likecount = 0;
    let liked = false;
    
    for(let rel of likedata){
        if(rel.postid == postid){
            if(rel.userid == currentUID){
                liked = true;
            }
            likecount++;
        }
    }
    
    return [liked, likecount];
}