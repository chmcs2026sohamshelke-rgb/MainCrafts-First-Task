
// Get HTML elements
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

const servicesToggle = document.getElementById("servicesToggle");
const servicesDropdown = servicesToggle.closest(".dropdown");

// Mobile menu toggle
menuToggle.addEventListener("click", () => {

    const isOpen = navLinks.classList.toggle("show");

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.innerHTML = isOpen
        ? '<i class="fa-solid fa-xmark"></i>'
        : '<i class="fa-solid fa-bars"></i>';

});


// Services dropdown
servicesToggle.addEventListener("click", (event) => {

    event.preventDefault();

    event.stopPropagation();

    servicesDropdown.classList.toggle("open");

});


// Close mobile menu after clicking a navigation link
document.querySelectorAll("#navLinks a").forEach((link) => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("show");

        servicesDropdown.classList.remove("open");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';

    });

});


// Close dropdown when clicking outside
document.addEventListener("click", (event) => {

    if (!servicesDropdown.contains(event.target)) {

        servicesDropdown.classList.remove("open");

    }

});
