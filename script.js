const toggleNav = document.querySelector('.toggle-nav');
const navbar = document.getElementById('navbar')
toggleNav.addEventListener('click', () => {
    navbar.classList.toggle('active');
})