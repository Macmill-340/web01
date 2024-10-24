// Get the navigation links
const navLinks = document.querySelectorAll('nav ul li a');

// Add a click event listener to each link
navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent the default link behavior

        const targetId = link.getAttribute('href').substring(1); // Get the target section ID
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});