<template>
    <div id="LoginView">
        <form
            id="loginform"
            class="login-form">
    
            <p class="login-title">
                Login
            </p>
            
            <!-- Email field -->
            <label for="email">
                Email
            </label>
            <input
                id="email"
                type="email"
                name="email"
                required>
    
            <!-- Password field -->
            <label for="password">
                Password
            </label>
            <div class="password-container">
    
                <input
                    id="password"
                    type="password"
                    name="password"
                    required>
    
                <button
                    type="button"
                    class="password-toggle"
                    id="togglePassword"
                    aria-label="Show password"
                    aria-pressed="false">
    
                    <svg
                        id="eyeIcon"
                        xmlns="http://www.w3.org/2000/svg">
                    </svg>
                </button>
            </div>
    
            <!-- Buttons -->
            <div class="buttonsbox">
                <button
                    type="submit"
                    name="action"
                    value="register"
                    class="button register-button">
                    Register
                </button>
    
                <button
                    type="submit"
                    name="action"
                    value="login"
                    class="button login-button">
                    Login
                </button>
            </div>
    
            <a
                href="html/forgotPassword.html"
                class="forgot-password">
                Forgot password?
            </a>
        </form>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
</script>

<style scoped>
    .LoginView {
        --button-primary: hsl(210, 79%, 46%);
        --button-primary-hover: hsl(210, 79%, 36%);

        --button-secondary: hsl(0, 0%, 15%);
        --button-secondary-hover: hsl(0, 0%, 10%);

        --default-padding: 10px 20px;

        .login-form {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 15px;
    
            box-sizing: border-box;
    
            border: 1px solid var(--border-secondary);
            border-radius: 10px;
    
            background-color: var(--bg-content);
    
            width: min(680px, 90%);
            min-height: 500px;
            padding: 30px;
        }
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

    .login-form > label {
        width: 100%;
        font-size: 18px;
    }

    .login-form > input {
        box-sizing: border-box;

        width: 100%;
        height: 50px;
        padding: 10px 15px;

        border: 1px solid var(--border-secondary);
        border-radius: 10px;

        background-color: transparent;
        color: var(--text-primary);

        font-family: inherit;
        font-size: 18px;
    }

    .login-form > input:focus {
        outline: none;
        border-color: var(--button-primary);
    }

    /* Password */

    .password-container {
        position: relative;
        width: 100%;
    }

    .password-container input {
        display: block;
        box-sizing: border-box;

        width: 100%;
        height: 50px;
        padding: 10px 45px 10px 15px;

        border: 1px solid var(--border-secondary);
        border-radius: 10px;

        background-color: transparent;
        color: var(--text-primary);

        font-family: inherit;
        font-size: 18px;
    }

    .password-container input:focus {
        outline: none;
        border-color: var(--button-primary);
    }

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

    #eyeIcon{
        object-view-box: 0px 0px 24px 24px;

        width: 22px;
        height: 22px;
        fill: none;

        stroke: currentColor;
        stroke-width: 2px;
        stroke-linecap: round;
        stroke-linejoin: round;
    }

    /* Buttons */

    .buttonsbox {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 20px;

        width: 100%;
        margin-top: 15px;
    }

    .buttonsbox .button {
        display: flex;
        align-items: center;
        justify-content: center;

        box-sizing: border-box;

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

    /* Forgot password */

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

    /* Responsive */

    @media (max-width: 480px) {
        .login-form {
            padding: 20px;
        }

        .buttonsbox {
            gap: 10px;
        }

        .buttonsbox .button {
            padding: 10px;
            font-size: 16px;
        }
    }
</style>