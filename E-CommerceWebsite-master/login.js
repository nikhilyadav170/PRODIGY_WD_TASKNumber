// Elements for toggle
const toggleRegister = document.getElementById('toggle-register');
const toggleLogin = document.getElementById('toggle-login');

// Forms
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');

// Toggling between forms
toggleRegister.addEventListener('click', function() {
    loginForm.classList.remove('active-form');
    registerForm.classList.add('active-form');
});

toggleLogin.addEventListener('click', function() {
    registerForm.classList.remove('active-form');
    loginForm.classList.add('active-form');
});

// Handle login
loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const loginUsername = document.getElementById('login-username').value;
    const loginPassword = document.getElementById('login-password').value;

    // Get the stored user data from localStorage
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    // Compare the entered credentials with the stored ones
    if (loginUsername === storedUsername && loginPassword === storedPassword) {
        // Redirect to index.html if the credentials match
        window.location.href = 'index.html';
    } else {
        alert('Incorrect username or password');
    }
});

// Handle registration
registerForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const registerUsername = document.getElementById('register-username').value;
    const registerEmail = document.getElementById('register-email').value;
    const registerPassword = document.getElementById('register-password').value;

    // Save the registration data in localStorage
    localStorage.setItem('username', registerUsername);
    localStorage.setItem('email', registerEmail);
    localStorage.setItem('password', registerPassword);

    // Optional: You can log the user registration details to the console for debugging
    console.log('User Registered:', {
        username: registerUsername,
        email: registerEmail,
        password: registerPassword
    });

    // After registration, toggle back to login form
    registerForm.classList.remove('active-form');
    loginForm.classList.add('active-form');
});
