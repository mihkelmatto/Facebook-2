import { JSON_DIR } from "../../config.js";
import { readjson } from "./filereader.js";

export class Session{
    #usersData;
    #postsData;
    #postLikeData;

    #activeUID;

    constructor(){
        this.#usersData = {};
        this.#postsData = [];
        this.#postLikeData = [];
        this.#activeUID = 1;
    }

    async init(){
        this.#usersData = await readjson(JSON_DIR + "users.json");
        this.#postsData = await readjson(JSON_DIR + "posts.json");
        this.#postLikeData = await readjson(JSON_DIR + "post_likes.json");
    }

    /*
        Returns a list [boolean liked, int likecount]
        - liked: true if the current user has liked the post
        - likecount: post's like count from all users
    */

    countLikes(postid){
        let likecount = 0;
        let liked = false;

        for(let rel of this.#postLikeData){
            if(rel.postid == postid){
                if(rel.userid == this.#activeUID){
                    liked = true;
                }
                likecount++;
            }
        }
        
        return [liked, likecount];
    }

    /*
        GETTERS
    */

   getUsername(id){
       return this.#usersData[id].username;
   }

    getPostsData(){
        return this.#postsData;
    }

    getActiveUID(){
        return this.#activeUID;
    }

    getUsersData(){
        return this.#usersData;
    }
}