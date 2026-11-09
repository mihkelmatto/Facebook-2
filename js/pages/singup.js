
import { dodajUser } from "../modules/user.js";

const form = document.getElementById("signupForm");

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const passwordError = document.getElementById("passwordError");

form.addEventListener("submit", function(e) {

    e.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value;

    let errors = [];

    // Password length: 8-15 characters
    if (password.length < 8 || password.length > 15) {
        errors.push("length must be 8-15 characters");
    }

    // At least one uppercase letter
    if (!/[A-Z]/.test(password)) {
        errors.push("at least one uppercase letter");
    }

    // At least two lowercase letters
    if ((password.match(/[a-z]/g) || []).length < 2) {
        errors.push("at least two lowercase letters");
    }

    // At least one number
    if (!/[0-9]/.test(password)) {
        errors.push("at least one numeric value");
    }

    // Must start with an uppercase letter
    if (!/^[A-Z]/.test(password)) {
        errors.push("must start with an uppercase letter");
    }

    // Must contain underscore
    if (!password.includes("_")) {
        errors.push("must include '_'");
    }

    // Display validation errors
    if (errors.length > 0) {

        passwordError.textContent =
            "Password is not valid: " + errors.join(", ");

        return;
    }

    passwordError.textContent = "";

    const user = dodajUser(email, password);

    console.log(user);

});
