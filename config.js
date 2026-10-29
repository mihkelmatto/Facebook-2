import { fileExists } from "./js/utils/files.js";

    /*
        File directories
    */

export const ROOT_DIR = new URL("./", import.meta.url).href;

export const IMG_DIR = ROOT_DIR + "resources/images/"
export const CSS_DIR = ROOT_DIR + "resources/css/"
export const JSON_DIR = ROOT_DIR + "resources/json/"
export const JS_DIR = ROOT_DIR + "js/";
export const PAGE_DIR = ROOT_DIR + "html/";

    /*
        API variables
        
        used for:
        - files.readJson()

        ### REMOVE API KEY BEFORE PUSHING ###
    */

export const USE_API = false;
export const API_KEY = "";
export const API_ROOT = "https://api.jsonbin.io/v3/b/"

const BIN_POSTS = "6ae3bfcdac6210605a5d4e2c";
const BIN_USERS = "6ae3bfb8ffd5d1605396ff34";
const BIN_POST_LIKES = "6ae3bfd8ac6210605a5d4e4a";

export const BINS = {
    "posts.json": BIN_POSTS,
    "users.json": BIN_USERS,
    "post_likes.json": BIN_POST_LIKES
}

    /*
        returns the path for user's profile image
        - all images have to be jpg
        - img name = userid
        - default: profile-icon.jpg
    */

export async function getUserImg(userid){
    let userImg = `${IMG_DIR}profile/${userid}.jpg`;

    if(!(await fileExists(userImg))){
        userImg = `${IMG_DIR}profile/profile-icon.jpg`;
    }

    return userImg;
}
    /*
        returns the path for post's image
        - all images have to be jpg
        - img name = postid
    */

export async function getPostImg(postid){
    let postImg = `${IMG_DIR}posts/${postid}.jpg`

    if(!(await fileExists(postImg))){
        postImg = "";
    }

    return postImg;
}