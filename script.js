window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#0056b3';
        navbar.style.padding = '10px 0';
    } else {
        navbar.style.backgroundColor = '#007bff';
        navbar.style.padding = '15px 0';
    }
});
