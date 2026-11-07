import { JSON_DIR, USE_API } from "../../config.js";
import { readjson } from "./files.js";

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

    save() {
        const sessionData = JSON.stringify({
            usersData: this.#usersData,
            postsData: this.#postsData,
            postLikeData: this.#postLikeData,
            activeUID: this.#activeUID
        })
        
        // sessionStorage.setItem("session", sessionData);

    }

    restore() {
        const data = JSON.parse(
            sessionStorage.getItem("session")
        );

        this.#usersData = data.usersData;
        this.#postsData = data.postsData;
        this.#postLikeData = data.postLikeData;
        this.#activeUID = data.activeUID;
    }

    /*
        Posts
    */
    


    /*
        Likes
    */

        // replace with a database request
    setLiked(postid, isLiked){
        const wasLiked = this.getIsLiked(postid);
        
        if(isLiked){
            if(wasLiked) return;
            
            this.#postLikeData.push({
                "postid": postid,
                "userid": this.#activeUID
            });
        }
        else{
            if(!wasLiked) return;

            const index = this.#postLikeData.findIndex(rel =>
                rel.postid === postid &&
                rel.userid === this.#activeUID
            );

            this.#postLikeData.splice(index, 1);
        }
    }

    // replace with a database request
    getLikes(postid){
        let likecount = 0;

        for(let rel of this.#postLikeData){
            if(rel.postid == postid){
                likecount++;
            }
        }

        return likecount;
    }
    
    // replace with a database request
    getIsLiked(postid){
        let liked = false;

        for(let rel of this.#postLikeData){
            if(rel.postid == postid && rel.userid == this.#activeUID){
                liked = true;
                break;
            }
        }

        return liked;
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