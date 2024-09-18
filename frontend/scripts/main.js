document.addEventListener('DOMContentLoaded', () => {
    // Load header and footer
    fetch('components/header.html')
        .then(response => response.text())
        .then(data => document.getElementById('header').innerHTML = data);

    fetch('components/footer.html')
        .then(response => response.text())
        .then(data => document.getElementById('footer').innerHTML = data);

    // Load the initial page content
    loadPage('login');
});

function loadPage(page) {
    fetch(`components/${page}.html`)
        .then(response => response.text())
        .then(data => document.getElementById('main-content').innerHTML = data);
}
