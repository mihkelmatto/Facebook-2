<template>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/@vueform/vueform@1.13.13/dist/vueform.css"
  />

  <div class="register-page">
    <h1>Create Account</h1>

    <div class="register-form">
      <Vueform
        add-class="form-layout"
        @submit="handleRegistration"
        :display-errors="false"
      >
        <TextElement
          name="userEmail"
          label="Email Address"
          placeholder="Enter your email"
        />

        <TextElement
          name="userPassword"
          input-type="password"
          label="Create Password"
          placeholder="Enter your password"
        />

        <ButtonElement
          name="registerAction"
          submits
          :add-classes="{ button: 'register-btn' }"
        >
          Create Account
        </ButtonElement>
      </Vueform>
    </div>

    <div v-if="registrationComplete" class="modal-backdrop" @click.self="dismissModal">
      <div class="modal-window" role="dialog" aria-modal="true">
        <h2>Registration Complete!</h2>
        <p>Your account has been created successfully.</p>
        <button class="confirm-btn" @click="dismissModal">Continue</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegisterPage",

  data() {
    return {
      registrationComplete: false,
    };
  },

  methods: {
    handleRegistration(form$) {
      const enteredPassword = form$.data.userPassword;
      const passwordField = form$.el$("userPassword");

      passwordField.messageBag.clear();

      const validationMessages = [];

      if (!enteredPassword) {
        validationMessages.push("Password cannot be empty.");
      } else {
        if (enteredPassword.length < 8 || enteredPassword.length > 14) {
          validationMessages.push("Password must contain between 8 and 14 characters.");
        }

        if (!/[A-Z]/.test(enteredPassword)) {
          validationMessages.push("Include at least one uppercase letter.");
        }

        if ((enteredPassword.match(/[a-z]/g) || []).length < 2) {
          validationMessages.push("Include at least two lowercase letters.");
        }

        if (!/[0-9]/.test(enteredPassword)) {
          validationMessages.push("Include at least one digit.");
        }

        if (!enteredPassword.includes("_")) {
          validationMessages.push("Include an underscore (_).");
        }

        if (!/^[A-Z]/.test(enteredPassword)) {
          validationMessages.push("The password must begin with an uppercase letter.");
        }
      }

      if (validationMessages.length) {
        passwordField.messageBag.append(
          `Password requirements: ${validationMessages.join(" ")}`
        );
        return;
      }

      this.registrationComplete = true;
    },

    dismissModal() {
      this.registrationComplete = false;
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.register-page {
  max-width: 440px;
  margin: 30px auto;
  padding: 28px;
  background: var(--card);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
}

.register-page h1 {
  color: var(--primary);
}

.register-form :deep(.form-layout) {
  padding: 8px 14px;
  color: var(--text);
  font-weight: 600;
  border-radius: 12px;
}

.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-window {
  background: var(--card, #ffffff);
  color: var(--text, #222222);
  padding: 28px 34px;
  border-radius: 14px;
  text-align: center;
  min-width: 280px;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.25);
}

.confirm-btn {
  margin-top: 14px;
  background: var(--accent);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 11px 26px;
  cursor: pointer;
}
</style>
