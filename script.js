// Toggle between Login and Signup views
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const signInButton = document.getElementById('signInButton');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

// Handle Signup Form Submission
document.getElementById('signupForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    if (name && email && password) {
        // Store user details in localStorage
        localStorage.setItem('userEmail', email);
        localStorage.setItem('userPassword', password);

        alert("Signup successful! You can now log in.");
        document.getElementById('signupForm').reset();
    } else {
        alert("All fields are required!");
    }
});

// Handle Login Validation
function validateLogin() {
    const loginEmail = document.getElementById('loginEmail').value;
    const loginPassword = document.getElementById('loginPassword').value;

    // Retrieve stored user details
    const storedEmail = localStorage.getItem('userEmail');
    const storedPassword = localStorage.getItem('userPassword');

    if (loginEmail === storedEmail && loginPassword === storedPassword) {
        alert("Login successful!");
        window.location.href = "templates/startcam.html"; // Redirect to the desired page
    } else {
        alert("Invalid email or password. Please try again.");
    }
}

// Redirect to dashboard when Sign In is clicked
signInButton.addEventListener('click', () => {
    const emailInput = document.getElementById('loginEmail');
    const passwordInput = document.getElementById('loginPassword');

    // Simple form validation
    if (!emailInput.value || !passwordInput.value) {
        alert('Please fill in both email and password!');
        return;
    }

    validateLogin(); // Validate user credentials before redirection
});
