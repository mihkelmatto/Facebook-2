<template>
    <header>
        <nav class="navbar">
            <ul>
                <li><RouterLink to="home">Home</RouterLink></li>
                <li><RouterLink to="addPost">Add Post</RouterLink></li>
                <li><RouterLink to="login">Login</RouterLink></li>
            </ul>

            <div class="profile-dropdown" :class="{ active: dropdownActive }">
                <a class="dropdown-button" :class="{ active: dropdownActive }"
                    @click.prevent="dropdownActive = !dropdownActive"
                >
                    <img class="profileimg" :src="profileImg">
                </a>
                <div class="dropdown-content">
                    <a>{{ currentuser.username }}</a>
                    <a>{{ currentuser.email }}</a>
                    <a id="logout" @click.prevent="logout">logout</a>
                </div>
            </div>
        </nav>
    </header>
</template>

<script setup>
    import { ref } from 'vue';
    import { RouterLink } from 'vue-router';
    import router from '@/router';
    import profileIcon from '@/assets/images/profile-icon.jpg';

    const dropdownActive = ref(false);
    const profileImg = ref(profileIcon);

    const currentuser = ref({
        id: "1",
        username: "username",
        email: "username@gmail.com"
    });

    async function logout(){
        console.log("logging out");
        router.push("login");
    }

</script>


<style scoped>
    header{
        z-index: 1;
        height: var(--header-height);
        border-bottom: 1px solid var(--border-primary);
        width: 100%;

        background-color: var(--bg-header);

        .navbar{
            display: flex;
            flex-direction: row;
                
            font-size: 20px;
            height: 100%;
    
            a{
                display: block;
                color: var(--text-primary);
            }
            a:hover{
                background-color: hsl(0, 0%, 10%);
                color: var(--text-hover);
            }
            a.active{
                color: var(--text-active);
            }
    
            > ul{
                display: flex;
                flex-direction: row;
                justify-content: left;
                align-items: center;
                
                flex-grow: 1;
                height: 100%;
    
                list-style-type: none;
                margin: 0px;
                padding: 0px;
    
                > li{
                    flex: 0 1 175px;
                    min-width: max-content;
                    display: block;
    
                    height: 100%;
    
                    > a{
                        display: flex;
                        align-items: center;
                        justify-content: center;
    
                        width: 100%;
                        height: 100%;
                    }
                }
            }
    
            .profile-dropdown{
                position: relative;
                flex: 0 0 var(--header-height);
    
                width: var(--header-height);
                height: 100%;
    
                cursor: pointer;
    
                > .dropdown-button{
                    display: flex;
                    align-items: center;
                    justify-content: center;
    
                    height: 100%;
                    aspect-ratio: 1 / 1;           
    
                    > img{
                        height: 80%;
                        aspect-ratio: 1 / 1;
                        border-radius: 50%;
                    }
                }
    
                .dropdown-content{
                    display: none;
                    position: absolute;
                    top: 100%;
                    right: 3px;
    
                    width: min(250px, 70vw);
                    min-width: 100%;
                    
                    background-color: var(--bg-header);
                    border-bottom: 2px solid var(--border-primary);
    
                    > a{ 
                        display: flex;
                        align-items: center;
                        justify-content: center;
    
                        min-height: var(--header-height);
                        padding: 5px 10px;
    
                        overflow-wrap: anywhere;
                    }
                }
            }
    
            .profile-dropdown.active .dropdown-content{
                display: block;
            }
        }
    }
</style>