import { defineStore } from "pinia";
import { useDataStore } from "./dataStore";
import { IMG_DIR } from "@/config";
import { formatDate } from "@/utils/formatting";
import { useUserStore } from "./userStore";
import { fileExists } from "@/utils/files";
import { ref } from "vue";

export const usePostsStore = defineStore('posts', setup);

function setup(){
    const dataStore = useDataStore();
    const userStore = useUserStore();

    const posts = ref([]);
    const initialized = ref(false);

    async function init(){
        const activeUID = userStore.id;
              
        for(let post of dataStore.posts){
            posts.value.push(await formatPost(post, activeUID));
        }

        initialized.value = true;
    }

    async function refresh(){
        console.log("postsStore refresh function called");
    }

    async function formatPost(post, activeUID){      
        const postFormatted = {
            "id": post.id,
            "userimg": await dataStore.getUserImg(post.userid),
            "username": dataStore.getUsername(post.userid),
            "date": formatDate(post.time_created),
            "description": post.description,
            "img": "",
            "liked": dataStore.isLiked(post.id, activeUID),
            "likecount": dataStore.getLikes(post.id),
        };

        const path = `${IMG_DIR}posts/${post.id}.jpg`;
        if(await fileExists(path)){
            postFormatted.img = path;
        }

        return postFormatted;
    }

    return {
        init, initialized, refresh,
        posts
    };
}