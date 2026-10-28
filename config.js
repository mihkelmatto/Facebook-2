import { fileExists } from "./js/utils/filereader.js";

export const ROOT_DIR = new URL("./", import.meta.url).href;

export const IMG_DIR = ROOT_DIR + "resources/images/"
export const CSS_DIR = ROOT_DIR + "resources/css/"
export const JSON_DIR = ROOT_DIR + "resources/json/"
export const JS_DIR = ROOT_DIR + "js/";



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