// Select the menu toggle button and the menu container
const menuToggle = document.getElementById('menu-toggle');
const navbarDropdown = document.getElementById('navbar-dropdown');

// Add a click event listener to toggle the menu visibility
menuToggle.addEventListener('click', () => {
    navbarDropdown.classList.toggle('hidden');
});