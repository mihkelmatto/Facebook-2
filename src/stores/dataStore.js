import { IMG_DIR, JSON_DIR } from "@/config";
import { fileExists, readjson } from "@/utils/files";
import { defineStore } from "pinia";
import { ref } from "vue";

import profileIcon from '@/assets/images/profile-icon.jpg';

/*
    This entire store emulates a database and will be replaced with one.
*/

export const useDataStore = defineStore('data', setup);

function setup(){
    const users = ref([]);
    const posts = ref([]);
    const postLikes = ref([]);

    const initialized = ref(false);

    async function init(){
        const [a, b, c] = await Promise.all([
            readjson(JSON_DIR + "users.json"),
            readjson(JSON_DIR + "posts.json"),
            readjson(JSON_DIR + "post_likes.json")
        ]);

        users.value = a;
        posts.value = b; 
        postLikes.value = c;

        initialized.value = true;
    }

    async function save(){
        console.log("dataStore: save function called.");
    }

    /*
        Users
    */

    function getUsername(userid){
        for(let user of users.value){
            if(user.id == userid){
                return user.username;
            }
        }
        console.error("dataStore: username not found");
        return null;
    }

    function getUserData(userid){
        for(let user of users.value){
            if(user.id == userid){
                return user;
            }
        }
        console.error("dataStore: userdata not found");
        return null;
    }

    async function getUserImg(userid){
        const path = `${IMG_DIR}profile/${userid}.jpg`;

        if(await fileExists(path)){
            return path;
        }

        return profileIcon;
    }
   
    /*
        Likes
    */

    function getLikes(postid){
        return postLikes.value.filter(
            rel => rel.postid == postid
        ).length;
    }

    function isLiked(postid, userid){
        return postLikes.value.some(
            rel => rel.postid == postid && rel.userid == userid
        );
    }

    function addLike(postid, userid){
        if(isLiked(postid, userid)){
            return;
        }

        const rel = {
            "postid": postid,
            "userid": userid
        };

        postLikes.value.push(rel);
    }

    function removeLike(postid, userid){
        const i = postLikes.value.findIndex(
            rel => rel.postid == postid && rel.userid == userid
        );

        if(i === -1) return;

        postLikes.value.splice(i, 1);
    }

    return {
            users, posts, postLikes,
            init, initialized, save,
            getUsername, getUserImg, getUserData, 
            getLikes, isLiked, addLike, removeLike
        };
}