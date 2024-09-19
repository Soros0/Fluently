// frontend/src/api.js

// Base URL for the API
const apiBaseUrl = process.env.NODE_ENV === 'production'
    ? 'https://production-backend-url.com/api'   // Production URL
    : 'http://localhost:3000/api';  // Development local URL

// Login User API call
export async function loginUser(email, password) {
    const response = await fetch(`${apiBaseUrl}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    });

    if (response.ok) {
        const data = await response.json();
        localStorage.setItem('authToken', data.token);  // Store token locally
        return data;
    } else {
        return { success: false, message: 'Login failed' };
    }
}

// Fetch Dashboard Data (Protected Route)
export async function getDashboardData() {
    const token = localStorage.getItem('authToken');
    
    const response = await fetch(`${apiBaseUrl}/dashboard`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`  // Send the token in request header
        }
    });
    
    if (response.ok) {
        return await response.json();
    } else {
        alert('Unauthorized. Please login again.');
        window.location = '/login';  // Redirect to login page
    }
}
