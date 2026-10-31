import { authenticate } from "../utils/auth.js";
import { PAGE_DIR } from "../../config.js";

main();

function main(){
    const loginForm = document.getElementById("loginform");
    const passwordInput = document.getElementById("password");

    initPasswordField();
    initButtons();

    function initButtons(){
        loginForm.addEventListener("submit", async (event) => {
            event.preventDefault();
            const action = event.submitter.value;
            const formData = new FormData(loginForm);

            const email = formData.get("email");
            const password = formData.get("password");

            if(action === "login"){
                await login(email, password);
            }
            else if(action === "register"){
                await register(email, password);
            }
        });
    }

    function initPasswordField(){
        const togglePassword = document.getElementById("togglePassword");
        const eyeIcon = document.getElementById("eyeIcon");
        
        // SVG icons
        const eyeHidden = `
            <path d="M3 3l18 18"/>
            <path d="M10.6 10.6a2 2 0 0 0 2.8 2.8"/>
            <path d="M9.9 5.2A10.8 10.8 0 0 1 12 5c6.4 0 10 7 10 7a15.7 15.7 0 0 1-4 4.9"/>
            <path d="M6.6 6.6C3.7 8.5 2 12 2 12s3.6 7 10 7a10 10 0 0 0 3.4-.6"/>
        `;

        const eyeShown = `
            <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z"/>
            <circle cx="12" cy="12" r="3"/>
        `;
        
        eyeIcon.innerHTML = eyeHidden;
        
        togglePassword.addEventListener("click", () => {
            const showPassword = (passwordInput.type === "password");
        
            // Show or hide the password
            passwordInput.type = showPassword ? "text" : "password";
        
            // Update the button label
            const labeltext = showPassword ? "Hide password" : "Show password";
            togglePassword.setAttribute("aria-label", labeltext);
        
            // Update the button state
            togglePassword.setAttribute("aria-pressed", String(showPassword));
        
            // Change the eye icon
            eyeIcon.innerHTML = (showPassword) ? eyeShown : eyeHidden;
        });
    }
}

async function login(email, password){
    const authenticated = await authenticate(email, password);

    if(!authenticated){
        console.log("Authentication failed");
        return;
    }
    
    window.location.href = PAGE_DIR + "home.html";
}

async function register(email, password){
    window.location.href = PAGE_DIR + "home.html";
}