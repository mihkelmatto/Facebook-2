document.addEventListener("DOMContentLoaded", function () {

    const passwordInput = document.getElementById("password");
    const togglePassword = document.getElementById("togglePassword");
    const eyeIcon = document.getElementById("eyeIcon");

    if (!passwordInput || !togglePassword || !eyeIcon) {
        console.error("Password elements not found!");
        return;
    }

    togglePassword.addEventListener("click", function () {

        const showPassword = passwordInput.type === "password";

        // Show or hide the password
        passwordInput.type = showPassword ? "text" : "password";

        // Update the button label
        togglePassword.setAttribute(
            "aria-label",
            showPassword ? "Hide password" : "Show password"
        );

        // Update the button state
        togglePassword.setAttribute(
            "aria-pressed",
            String(showPassword)
        );

        // Change the eye icon
        if (showPassword) {

            eyeIcon.innerHTML = '<path d="M3 3l18 18"/>' +
                '<path d="M10.6 10.6a2 2 0 0 0 2.8 2.8"/>' +
                '<path d="M9.9 5.2A10.8 10.8 0 0 1 12 5c6.4 0 10 7 10 7a15.7 15.7 0 0 1-4 4.9"/>' +
                '<path d="M6.6 6.6C3.7 8.5 2 12 2 12s3.6 7 10 7a10 10 0 0 0 3.4-.6"/>';

        } else {

            eyeIcon.innerHTML = '<path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z"/>' +
                '<circle cx="12" cy="12" r="3"/>';

        }

    });

});