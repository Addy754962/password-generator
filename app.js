const passwordBox = document.getElementById("password");
const strengthIndicator = document.getElementById("strengthIndicator");

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+/*?<>";
const allChars = upperCase + lowerCase + numbers + symbols;

function generatePassword() {
    const length = 10; // Change this to the desired length
    let password = "";

    while (length > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    passwordBox.value = password;
    updateStrengthIndicator(password);
}

function updateStrengthIndicator(password) {
    const strength = calculatePasswordStrength(password);
    strengthIndicator.textContent = `Password Strength: ${strength}`;
}

function calculatePasswordStrength(password) {
    // Implement your password strength logic here
    // Used various criteria such as length, uppercase, lowercase, numbers, symbols, etc.
    // Example: A simple logic might be to check the length and the presence of different character types
    const lengthStrength = Math.min(password.length / 8, 1);
    const uppercaseStrength = password.match(/[A-Z]/) ? 1 : 0;
    const lowercaseStrength = password.match(/[a-z]/) ? 1 : 0;
    const numberStrength = password.match(/[0-9]/) ? 1 : 0;
    const symbolStrength = password.match(/[!@#$%^&*()_+/*?<>,.]/) ? 1 : 0;

    const totalStrength = lengthStrength + uppercaseStrength + lowercaseStrength + numberStrength + symbolStrength;

    return totalStrength * 25; // Scale the strength to a percentage (0-100)
}

console.log(allChars);