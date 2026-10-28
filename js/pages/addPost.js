import { applyCss } from "../utils/utils.js";
import { CSS_DIR } from "../../config.js";

/*
    1. applies addPost.css
    2. 
*/

export async function main(session){
    applyCss(CSS_DIR + "addPost.css");
    
}
