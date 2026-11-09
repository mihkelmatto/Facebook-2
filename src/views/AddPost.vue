<template>
    <Header />
    
    <main>
        <form class="addpost"
            action="home.html"
            method="get"
            enctype="">

            <p class="addpost-title">
                Add post
            </p>

            <textarea
                id="post-textarea"
                class="addpost-textarea"
                placeholder="What's on your mind?"
            ></textarea>
            
            <div class="addpost-buttons">

                <label for="image" class="button addpost-file">
                    <svg viewBox="0 0 24 24">
                        <path
                            d="M13.6471 16.375L12.0958 14.9623C11.3351 14.2694 10.9547 13.923 10.5236 13.7918C10.1439 13.6762 9.73844 13.6762 9.35878 13.7918C8.92768 13.923 8.5473 14.2694 7.78652 14.9623L4.92039 17.5575M13.6471 16.375L13.963 16.0873C14.7238 15.3944 15.1042 15.048 15.5352 14.9168C15.9149 14.8012 16.3204 14.8012 16.7 14.9168C17.1311 15.048 17.5115 15.3944 18.2723 16.0873L19.4237 17.0896M13.6471 16.375L17.0469 19.4528M17 9C17 10.1046 16.1046 11 15 11C13.8954 11 13 10.1046 13 9C13 7.89543 13.8954 7 15 7C16.1046 7 17 7.89543 17 9ZM21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                            stroke="currentColor"
                            stroke-width="1"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            fill="none"
                        ></path>
                    </svg>
                </label>
                <input
                    id="image"
                    type="file"
                    accept="image/*"
                    hidden>


                <label for="submit"
                    class="button addpost-submit">
                    create post
                </label>
                <input
                    type="submit"
                    id="submit"
                    value="Create post"
                    hidden>

            </div>
        </form>
    </main>

    <Footer />
</template>

<script setup>
    import Header from '@/components/Header.vue';
    import Footer from '@/components/Footer.vue';
</script>

<style scoped>
    main{
        --button-primary: hsl(210, 79%, 46%);
        --button-secondary: hsl(0, 0%, 20%);
        --button-primary-hover: hsl(210, 79%, 36%);
        --button-secondary-hover: hsl(0, 0%, 10%);

        --addpost-header-height: 1lh;
        --addpost-footer-height: 15%;
        
        --default-padding: 10px 20px;

        justify-content: center;
        
        .addpost{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            /* overflow: hidden; */
            
            border: 1px solid var(--border-secondary);
            border-radius: 10px;
            
            background-color: var(--bg-content);
            width: min(680px, 90%);
            height: 650px;
    
            .addpost-title{
                display: flex;
                align-items: center;
                justify-content: center;
    
                min-width: max-content;
                height: var(--addpost-header-height);
    
                font-size: 35px;
                line-height: 2.5;
                font-weight: bold;
            }
    
            .addpost-textarea{
                resize: none;
                width: 100%;
                height: calc(100% - var(--addpost-header-height) - var(--addpost-footer-height));
                padding: 15px;
                
                border-color: var(--border-secondary);
                border-width: 1px 0;
                
                background-color: transparent;
                color: var(--text-primary);
                font-size: 20px;
            }
    
            .addpost-textarea:focus{
                outline: none;
            }
    
            .addpost-buttons{
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                gap: 10px;
                
                height: var(--addpost-footer-height);
                width: 100%;
    
                .button{
                    height: 55%;
                }
                
                .addpost-file{
                    aspect-ratio: 1 / 1;
                    border-radius: 50%;
                }
                
                .addpost-submit{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 30%;
                    min-width: max-content;
                    
                    padding: var(--default-padding);
                    border-radius: 10px;
            
                    background-color: var(--button-primary);
                    font-size: min(20px, 90%);
                }
                
                .addpost-file:hover{
                    color: var(--text-hover);
                    cursor: pointer;
                }
            
                .addpost-submit:hover{
                    background-color: var(--button-primary-hover);
                    color: var(--text-hover);
                    cursor: pointer;
                }
    
            }
        }
    }
</style>