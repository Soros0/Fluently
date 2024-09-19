// frontend/src/auth.js

import { loginUser } from './api.js';

// Handle Login form submission
const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();  // Prevent form from refreshing page
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    const result = await loginUser(email, password);
    
    if (result.token) {
        alert('Login successful!');
        window.location = '/dashboard';  // Redirect to dashboard
    } else {
        alert(result.message || 'Login failed, please try again.');
    }
});

// Check if user is authenticated (For Protected Pages)
export function isAuthenticated() {
    return !!localStorage.getItem('authToken');  // Returns true if token exists
}
