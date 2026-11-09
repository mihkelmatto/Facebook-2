<template>
    <div class="post">
        <div class="post-header">
            <img
                class="userimg"
                :src="post.userimg">

            <div class="textbox">
                <p class="username">{{ post.username }}</p>
                <p class="date">{{ post.date }}</p>
            </div>
        </div>

        <div class="post-content">
            <p class="description">{{ post.description }}</p> 
            
            <img
                class="postimg"
                :src="post.img">
        </div>

        <div class="post-footer">
            <a @click.prevent="like">
                <svg 
                    class="likebutton"
                    :class="{ liked: post.liked }"
                    viewBox="0 0 24 24"
                    v-html="likeSVG">
                </svg>
            </a>

            <label
                class="likecount"
                :class="{iszero : post.likecount === 0}">
                {{ post.likecount }}</label>
        </div>
    </div>
</template>

<script setup>
    import profileIcon from '@/assets/images/profile-icon.jpg';
    import { likeSVG } from '@/assets/svg';

    const { post } = defineProps({
        post: Object
    })

    // TODO: doesn't update the underlying data correctly (+ potential loss of reactivity)
    function like(){
        post.liked = !post.liked;
        post.likecount += (post.liked ? 1 : -1);
    }

</script>

<style scoped>
    .post{
        --header-height: 60px;
        --footer-height: 40px;
        --default-padding: 10px 20px;

        display: flex;
        flex-direction: column;

        width: min(680px, 90%);
        /* overflow: hidden; */

        border: 1px solid var(--border-secondary);
        border-radius: 10px;

        background-color: var(--bg-content);

        .post-header{
            display: flex;
            flex-direction: row;
            justify-content: left;
            align-items: center;
            gap: 10px;

            padding: var(--default-padding);
            
            height: var(--header-height);
            border-bottom: 1px solid var(--border-secondary);

            .userimg{
                display: block;
                height: 30px;
                aspect-ratio: 1 / 1;
                border-radius: 50%;
            }

            .textbox{
                .username{
                    font-size: 15px;
                    font-weight: bold;
                }
                .date{
                    font-size: 12px;
                }
            }
        }

        .post-content{
            .description{
                padding: var(--default-padding);
                font-size: 15px;
            }
            .postimg{
                display: block;
                width: 100%;
            }
        }

        .post-footer{
            display: flex;
            flex-direction: row;
            justify-content: left;
            align-items: center;
            gap: 5px;

            height: var(--footer-height);
            
            padding: var(--default-padding);
            border-top: 1px solid var(--border-secondary);

            .likebutton{
                display: block;
                height: 30px;
                color: white;
                fill:transparent;

                stroke: currentColor;
                stroke-width: 1.5;
                stroke-linecap: round;
                stroke-linejoin: round;
            }
            .likebutton:hover, .liked{
                fill: var(--text-hover);
            }
            .likecount{
                font-weight: bold;
                position: relative;
                top: 3px;
            }
            .likecount.iszero{
                display: none;
            }
        }
    }
</style>