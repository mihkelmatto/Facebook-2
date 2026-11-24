<template>
    <main class="signup-main">
        <form class="signup-form" @submit.prevent="handleSubmit" novalidate>
            <p class="signup-title">Sign up</p>

            <label for="email">Email</label>
            <input
                id="email"
                v-model.trim="email"
                type="email"
                name="email"
                autocomplete="email"
                required
            >

            <label for="password">Password</label>
            <input
                id="password"
                v-model="password"
                type="password"
                name="password"
                autocomplete="new-password"
                required
                :aria-invalid="passwordText.length > 0"
                aria-describedby="password-error password-requirements"
            >

            <div class="buttonsbox">
                <button class="back-button" @click="router.push('login')">Back</button>
                <button type="submit" class="signup-button">Sign up</button>
            </div>
            
            <p id="password-requirements"
                class="requirements"
                :class="{'validation-error': passwordText.length != 0}">
                {{ passwordText }}
            </p>
        
            <p v-if="emailError" class="validation-error" role="alert">
                {{ emailError }}
            </p>
            
        </form>
    </main>
</template>

<script setup>
    import { ref } from 'vue';
    import router from '@/router';
    import { failedConditions } from '@/utils/auth.js';

    const email = ref('');
    const password = ref('');
    const passwordText = ref("8–14 characters; starts with an uppercase letter; at least two lowercase letters, one number and one underscore (_).");
    const emailError = ref('');

    function handleSubmit() {
        refreshPasswordText();
        emailError.value = '';

        if (!email.value || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
            passwordText.value = "";
            emailError.value = 'Please enter a valid email address.';
            return;
        }


        if(passwordText.value.length != 0){
            return;
        }

        console.log('Signup successful:', email.value);
        router.push('home');
    }

    function refreshPasswordText(){
        passwordText.value = "";
        passwordText.value = failedConditions(password.value);
    }

</script>

<style scoped>
    main{
        --button-primary: hsl(210, 79%, 46%);
        --button-primary-hover: hsl(210, 79%, 36%);

        --button-secondary: hsl(0, 0%, 15%);
        --button-secondary-hover: hsl(0, 0%, 10%);

        --default-padding: 10px 20px;

        justify-content: center;
        height: 100vh;

        .signup-form {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 15px;
    
            border: 1px solid var(--border-secondary);
            border-radius: 10px;
            background-color: var(--bg-content);
    
            width: min(680px, 90%);
            min-height: 500px;
    
            padding: 30px;
        }

        label{
            width: 100%;
            font-size: 18px;
        }

        .signup-title {
            display: flex;
            align-items: center;
            justify-content: center;
    
            width: 100%;
    
            font-size: 35px;
            line-height: 1.5;
            font-weight: bold;
        }
    
        .signup-form input {
            width: 100%;
            height: 50px;
            padding: 10px 15px;
            border: 1px solid var(--border-secondary);
            border-radius: 10px;
            background-color: var(--bg-content);
            color: var(--text-primary);
            font-family: inherit;
            font-size: 18px;
        }
    
        .signup-form input:focus {
            outline: none;
            border-color: hsl(210, 79%, 46%);
        }
    
        .requirements {
            width: 100%;
            color: hsl(0, 0%, 75%);
            font-size: 14px;
            line-height: 1.5;
        }
    
        .validation-error {
            width: 100%;
            color: #ff7777;
            font-size: 14px;
            line-height: 1.5;
            overflow-wrap: anywhere;
        }
    
        .buttonsbox{
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            gap: 20px;
    
            width: 100%;
            margin-top: 15px;
    
            button{
                display: flex;
                align-items: center;
                justify-content: center;
                
                width: 50%;
                min-width: 0;
                min-height: 55px;
        
                padding: var(--default-padding);
        
                border: none;
                border-radius: 10px;
        
                color: var(--text-primary);
        
                font-family: inherit;
                font-size: 20px;
        
                cursor: pointer;
            }

            .signup-button {
                background-color: var(--button-primary);
            }

            .signup-button:hover {
                background-color: var(--button-primary-hover);
                color: var(--text-hover);
            }

            .back-button{
                background-color: var(--button-secondary);
            }

            .back-button:hover{
                background-color: var(--button-secondary-hover);
                color: var(--text-hover);
            }
    
        }
    }
</style>

