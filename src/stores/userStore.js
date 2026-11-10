import { defineStore } from "pinia";
import { useDataStore } from "./dataStore";
import { ref } from "vue";
import profileIcon from '@/assets/images/profile-icon.jpg';

export const useUserStore = defineStore('user', setup);

function setup(){
    const dataStore = useDataStore();

    const userid = ref(-1);
    const username = ref("");
    const email = ref("");
    const userImg = ref(profileIcon);

    const initialized = ref(false);

    async function init(id){
        const data = dataStore.getUserData(id);
    
        if(data === null){
            console.error("UserStore: user not found")
            return;
        }

        userid.value = data.id;
        username.value = data.username;
        email.value = data.email;
        userImg.value = await dataStore.getUserImg(id);

        initialized.value = true;
    }

    return {
        init, initialized,
        userid, username, email, userImg
    };
}