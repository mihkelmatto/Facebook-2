<template>
    <Header />
    
    <main>
        <form @submit.prevent="handleSubmit">

            <p class="form-header">Add post</p>

            <textarea
                id="text-input"
                name="description"
                placeholder="What's on your mind?"
            ></textarea>
            
            <div class="form-footer">

                <label for="image-input" class="button image-input">
                    <svg
                        class="imageIcon"
                        viewBox="0 0 24 24"
                        v-html="imageInputSVG">
                    </svg>
                </label>
                <input
                    id="image-input"
                    type="file"
                    name="image"
                    accept="image/*"
                    hidden>

                <label for="submit" class="button form-submit">create post</label>
                <input
                    id="submit"
                    type="submit"
                    hidden>
            </div>
        </form>
    </main>

    <Footer />
</template>

<script setup>
    import Header from '@/components/Header.vue';
    import Footer from '@/components/Footer.vue';

    import { ref } from 'vue';
    import router from '@/router';
    import { imageInputSVG } from '@/assets/svg.js';

    async function handleSubmit(event){
        const form = event.currentTarget;
        const formData = new FormData(form);

        const description = formData.get('description');
        const image = formData.get('image');
        addPost(description, image);
    }

    async function addPost(description, image){
        console.log("Post added");
        console.log(description, image);
        
        router.push('home');
    }

</script>

<style scoped>
    main{
        --button: hsl(210, 79%, 46%);
        --button-hover: hsl(210, 79%, 36%);

        --form-header-height: 1lh;
        --form-footer-height: 15%;
        
        --default-padding: 10px 20px;

        justify-content: center;
        
        form{
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
    
            .form-header{
                display: flex;
                align-items: center;
                justify-content: center;
    
                min-width: max-content;
                height: var(--form-header-height);
    
                font-size: 35px;
                line-height: 2.5;
                font-weight: bold;
            }
    
            textarea{
                resize: none;
                width: 100%;
                height: calc(100% - var(--form-header-height) - var(--form-footer-height));
                padding: 15px;
                
                border-color: var(--border-secondary);
                border-width: 1px 0;
                
                background-color: transparent;
                color: var(--text-primary);
                font-size: 20px;
            }
    
            textarea:focus{
                outline: none;
            }
    
            .form-footer{
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                gap: 10px;
                
                height: var(--form-footer-height);
                width: 100%;
    
                .button{
                    height: 55%;
                    cursor: pointer;
                }
                
                .image-input{
                    border-radius: 50%;
                    aspect-ratio: 1 / 1;

                    .imageIcon{
                        height: 100%;
                        width: 100%;

                        stroke: currentColor;
                        stroke-width: 1;
                        stroke-linecap: round;
                        stroke-linejoin: round;
                        fill: none;
                    }
                }
                
                .form-submit{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 30%;
                    min-width: max-content;
                    
                    padding: var(--default-padding);
                    border-radius: 10px;
            
                    background-color: var(--button);
                    font-size: min(20px, 90%);
                }

                .button:hover{
                    color: var(--text-hover);
                }
            
                .form-submit:hover{
                    background-color: var(--button-hover);
                }
    
            }
        }
    }
</style>