<template>
    <main>
        <form
            class="login-form"
            @submit.prevent="handleSubmit">
    
            <p class="login-title">Login</p>
            
            <!-- Email field -->
            <label for="email">Email</label>
            <input
                id="email"
                type="email"
                name="email"
                required>
    
            <!-- Password field -->
            <label for="password">Password</label>
            <div class="password-container">
    
                <input
                    id="password"
                    :type="showPassword ? 'text' : 'password'"
                    name="password"
                    required>
    
                <button
                    type="button"
                    class="password-toggle"
                    @click="togglePassword"
                    :aria-label="showPassword ? 'Hide password' : 'Show password'"
                    :aria-pressed="showPassword">

                    <svg
                        class="eyeIcon"
                        viewBox="0 0 24 24"
                        v-html="showPassword ? eyeShownSVG : eyeHiddenSVG">
                    </svg>
                </button>
            </div>
    
            <!-- Buttons -->
            <div class="buttonsbox">
                <button
                    type="submit"
                    name="action"
                    value="register"
                    class="register-button">
                    Register
                </button>
    
                <button
                    type="submit"
                    name="action"
                    value="login"
                    class="login-button">
                    Login
                </button>
            </div>
    
            <a
                @click="forgotPassword"
                class="forgot-password">
                Forgot password?
            </a>
        </form>
    </main>
</template>

<script setup>
    import { ref } from 'vue';
    import router from '@/router';
    import { eyeShownSVG, eyeHiddenSVG } from '@/assets/svg.js';
    import { authenticate } from '@/utils/auth.js';

    const showPassword = ref(false);

    function togglePassword(){
        showPassword.value = !showPassword.value;
    }

    async function handleSubmit(event){
        const form = event.currentTarget;
        const action = event.submitter.value;

        const formData = new FormData(form);

        const email = formData.get('email');
        const password = formData.get('password');

        if(action === "login"){
            await login(email, password);
        }
        else if(action === "register"){
            await register(email, password);
        }
    }

    async function login(email, password){
        const authenticated = await authenticate(email, password);

        if(!authenticated){
            console.log("Authentication failed");
            return;
        }
        
        console.log("login successful");
        router.push('home');
    }

    async function register(email, password){
        console.log("register successful");
        router.push('home');
    }

    function forgotPassword(){
        console.log("forgot password");
        router.push('home');
    }

</script>

<style scoped>
    main {
        --button-primary: hsl(210, 79%, 46%);
        --button-primary-hover: hsl(210, 79%, 36%);

        --button-secondary: hsl(0, 0%, 15%);
        --button-secondary-hover: hsl(0, 0%, 10%);

        --default-padding: 10px 20px;

        justify-content: center;
        min-height: 100vh;

        .login-form {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 15px;
    
            border: 1px solid var(--border-secondary);
            border-radius: 10px;
            background-color: var(--bg-content);
    
            width: min(680px, 90%);
            height: 500px;
            
            padding: 30px;
        }

        .login-title {
            display: flex;
            align-items: center;
            justify-content: center;
    
            width: 100%;
    
            font-size: 35px;
            line-height: 1.5;
            font-weight: bold;
        }

        label {
            width: 100%;
            font-size: 18px;
        }
        input,
        input:autofill,
        input:-webkit-autofill{  
            width: 100%;
            height: 50px;
            padding: 10px 15px;
    
            border: 1px solid var(--border-secondary);
            border-radius: 10px;
    
            background-color: var(--bg-content);
            box-shadow: 0 0 0 1000px var(--bg-content) inset;
            color: var(--text-primary);
            -webkit-text-fill-color: var(--text-primary);
            caret-color: var(--text-primary);
            
            font-family: inherit;
            font-size: 18px;
        }
        input:focus {
            outline: none;
            border-color: var(--button-primary);
        }

        .password-container {
            position: relative;
            width: 100%;

            .password-toggle {
                position: absolute;
                top: 50%;
                right: 12px;
                transform: translateY(-50%);
        
                display: flex;
                align-items: center;
                justify-content: center;
        
                padding: 4px;
                border: none;
        
                background: transparent;
                color: var(--text-primary);
        
                cursor: pointer;
            }
            .password-toggle:hover {
                color: var(--text-hover);
            }

            .eyeIcon{
                width: 22px;
                height: 22px;

                stroke: currentColor;
                stroke-width: 2px;
                stroke-linecap: round;
                stroke-linejoin: round;
                fill: none;
            }
        }

        
        .buttonsbox {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            gap: 20px;
    
            width: 100%;
            margin-top: 15px;

            button {
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

            .login-button {
                background-color: var(--button-primary);
            }
            .login-button:hover {
                background-color: var(--button-primary-hover);
                color: var(--text-hover);
            }
            
            .register-button {
                background-color: var(--button-secondary);
            }
        
            .register-button:hover {
                background-color: var(--button-secondary-hover);
                color: var(--text-hover);
            }
        }

        .forgot-password {
            display: flex;
            align-items: center;
            justify-content: center;
    
            width: max-content;
            padding: 10px;
    
            color: var(--text-link);
            text-decoration: none;
            cursor: pointer;
        }
    
        .forgot-password:hover {
            color: var(--text-hover);
        }
    }
</style>