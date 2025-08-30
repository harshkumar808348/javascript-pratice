const generateBtn = document.getElementById('generateButton');
const captchaDisplay = document.getElementById('captcha');

generateBtn.addEventListener('click', generateCaptcha);

function generateCaptcha() {
    // Get the current value from the input field
    const name = document.getElementById('userNameInput').value.trim();

    // Check if the entered name is "harsh"
    if (name === "harsh") {
        let uniqueCharacter = "";
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    
        // Loop 5 times to create a 5-character string
        for (let i = 0; i < 5; i++) {
            // Pick a random character from the 'characters' string
            uniqueCharacter += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        
        // Display the generated captcha string in the div
        captchaDisplay.innerHTML = uniqueCharacter;
    } else {
        // Optional: Clear the captcha if the name is not correct
        captchaDisplay.innerHTML = "";
    }
}