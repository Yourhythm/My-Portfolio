const menuIcon = document.querySelector('#menu-icon'); // Use '#' for an ID selector
const navLinks = document.querySelector('.nav-links'); // This assumes .nav-links is a valid class

menuIcon.onclick = () => {
    navLinks.classList.toggle('active'); // Toggles the 'active' class
};
