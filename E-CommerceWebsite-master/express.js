document.addEventListener("DOMContentLoaded", () => {
    const token = localStorage.getItem("authToken");

    if (!token) {
        document.getElementById('authModal').style.display = 'flex';
    }
});

function showLogin() {
    document.getElementById('loginForm').classList.add('active');
    document.getElementById('registerForm').classList.remove('active');
}

function showRegister() {
    document.getElementById('registerForm').classList.add('active');
    document.getElementById('loginForm').classList.remove('active');
}

function handleLogin() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    fetch('/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    })
    .then(res => res.json())
    .then(data => {
        if (data.token) {
            localStorage.setItem('authToken', data.token);
            document.getElementById('authModal').style.display = 'none';
        } else {
            alert('Invalid login credentials.');
        }
    })
    .catch(err => console.error(err));
}

function handleRegister() {
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;

    fetch('/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password })
    })
    .then(res => {
        if (res.status === 201) {
            alert('Registration successful! Please log in.');
            showLogin();
        } else {
            alert('Registration failed. Try again.');
        }
    })
    .catch(err => console.error(err));
}
