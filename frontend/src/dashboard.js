// frontend/src/dashboard.js

import { getDashboardData } from './api.js';

// On page load, fetch and display dashboard data
window.addEventListener('load', async () => {
    if (!isAuthenticated()) {
        window.location = '/login';  // Redirect to login if not authenticated
    }
    
    try {
        const dashboardData = await getDashboardData();
        document.getElementById('welcomeMessage').innerText = `Welcome, ${dashboardData.username}!`;
        // Additional dashboard data rendering...
    } catch (error) {
        console.error('Error fetching dashboard data:', error);
    }
});
