const theme = document.getElementById('theme');
const body = document.getElementById('body');
const nav = document.getElementById('nav');
const currentTheme = localStorage.getItem('currentTheme');

if (currentTheme === 'dark') {
    body.classList.add('dark_body');
    nav.classList.add('nav-dark');
} else {
    body.classList.add('light_body');
    nav.classList.add('nav-light');
}

theme.addEventListener('click', function() {
    if (body.classList.contains("light_body")) {
        body.classList.remove("light_body");
        body.classList.add("dark_body");
        nav.classList.remove("nav-light");
        nav.classList.add("nav-dark");
        localStorage.setItem('currentTheme', 'dark');
    } else {
        body.classList.remove("dark_body");
        body.classList.add("light_body");
        nav.classList.remove("nav-dark");
        nav.classList.add("nav-light");
        localStorage.setItem('currentTheme', 'light');
    }
});