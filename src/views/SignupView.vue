<template>
    <main class="signup-main">
        <form class="signup-form" @submit.prevent="handleSubmit" novalidate>
            <p class="signup-title">Sign up</p>

            <div class="form-row">
                <label for="email">Email</label>
                <input
                    id="email"
                    v-model.trim="email"
                    type="email"
                    name="email"
                    autocomplete="email"
                    placeholder="Email"
                    required
                >
            </div>

            <div class="form-row">
                <label for="password">Password</label>
                <input
                    id="password"
                    v-model="password"
                    type="password"
                    name="password"
                    autocomplete="new-password"
                    placeholder="Password"
                    required
                    :aria-invalid="password.length > 0 && Conditions.length > 0"
                    aria-describedby="password-error password-requirements"
                >
            </div>

            <p id="password-requirements" class="requirements">
                8–14 characters; starts with an uppercase letter; at least two lowercase letters,
                one number and one underscore (_).
            </p>

            <p
                v-if="password.length > 0 && Conditions.length > 0"
                id="password-error"
                class="validation-error"
                role="alert"
            >
                password is not valid: {{ Conditions.join('; ') }}
            </p>

            <p v-if="emailError" class="validation-error" role="alert">
                {{ emailError }}
            </p>

            <button type="submit" class="signup-button">Sign up</button>
        </form>
    </main>
</template>

<script setup>
    import { computed, ref } from 'vue';
    import router from '@/router';
    import { failedConditions } from '@/utils/auth.js';

    const email = ref('');
    const password = ref('');
    const emailError = ref('');
    const Conditions = computed (() => failedConditions(password.value));

    function handleSubmit() {
        emailError.value = '';

        if (!email.value || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
            emailError.value = 'Please enter a valid email address.';
            return;
        }

        if (Conditions.value.length > 0) {
            return;
        }

        console.log('Signup successful:', email.value);
        router.push('home');
    }
</script>

<style scoped>
    .signup-main {
        justify-content: center;
        height: 100vh; 
    }

    .signup-form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;

        width: min(680px, 90%);
        padding: 30px;

        border: 1px solid var(--border-secondary);
        border-radius: 10px;
        background-color: var(--bg-content);
    }

    .signup-title {
        width: 100%;
        margin-bottom: 10px;
        text-align: center;
        font-size: 35px;
        font-weight: bold;
    }

    .form-row {
        display: grid;
        grid-template-columns: 90px minmax(0, 1fr);
        align-items: center;
        gap: 12px;
        width: 100%;
    }

    .form-row label {
        text-align: right;
        font-size: 16px;
    }

    .signup-form input {
        width: 100%;
        height: 42px;
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

    .signup-button {
        width: 120px;
        min-height: 55px;
        margin-top: 5px;
        padding: 10px 20px;
        border: none;
        border-radius: 10px;
        background-color: hsl(210, 79%, 46%);
        color: var(--text-primary);
        font-family: inherit;
        font-size: 20px;
        cursor: pointer;
    }

    @media (max-width: 480px) {
        .signup-form {
            padding: 22px 16px;
        }

        .form-row {
            grid-template-columns: 1fr;
            gap: 6px;
        }

        .form-row label {
            text-align: left;
        }
    }

    .signup-button:hover {
        background-color: hsl(210, 79%, 36%);
        color: var(--text-hover);
    }
</style>

