// frontend/src/main.js

import { isAuthenticated } from './auth.js';

// Check if user is logged in on app start
window.addEventListener('DOMContentLoaded', () => {
    if (isAuthenticated()) {
        window.location = '/dashboard';  // Redirect logged-in users to dashboard
    } else {
        window.location = '/login';  // Non-logged-in users go to login page
    }
});
