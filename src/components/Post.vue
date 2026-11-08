<template>
    <div class="post">
        <div class="post-header">
            <img class="post-profile">          <!-- src="../resources/images/userid.jpg" -->

            <div class="post-header-textbox">
                <p class="post-username"> </p>
                <p class="post-date"></p>
            </div>
        </div>

        <div class="post-content">
            <p class="post-description"></p> 
            <img class="post-image">            <!-- src="../resources/images/posts/postid.jpg" -->
        </div>

        <div class="post-footer">
            <a href="">
                <svg class="post-like" viewBox="0 0 24 24">
                    <path
                        d="M8 10V20M8 10L4 9.99998V20L8 20M8 10L13.1956 3.93847C13.6886 3.3633 14.4642 3.11604 15.1992 3.29977L15.2467 3.31166C16.5885 3.64711 17.1929 5.21057 16.4258 6.36135L14 9.99998H18.5604C19.8225 9.99998 20.7691 11.1546 20.5216 12.3922L19.3216 18.3922C19.1346 19.3271 18.3138 20 17.3604 20L8 20"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round">
                    </path>
                </svg>
            </a>
            <Label class="likecount"></Label>
        </div>
    </div>
</template>

<script setup></script>

<style scoped>
    .post{
        --post-header-height: 60px;
        --post-footer-height: 40px;
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
            
            height: var(--post-header-height);
            border-bottom: 1px solid var(--border-secondary);

            .post-profile{
                display: block;
                height: 30px;
                aspect-ratio: 1 / 1;
                border-radius: 50%;
            }

            .post-header-textbox{
                .post-username{
                    font-size: 15px;
                    font-weight: bold;
                }
                .post-date{
                    font-size: 12px;
                }
            }
        }

        .post-content{
            .post-description{
                padding: var(--default-padding);
                font-size: 15px;
            }
            .post-image{
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

            height: var(--post-footer-height);
            
            padding: var(--default-padding);
            border-top: 1px solid var(--border-secondary);

            .post-like{
                display: block;
                height: 30px;
                color: white;
                fill:transparent;
            }
            .post-like:hover, .liked{
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