document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navbarLinks = document.querySelector(".navbar-links");

    menuToggle.addEventListener("click", () => {
        console.log("Menu toggle clicked!");
        navbarLinks.classList.toggle("show");
    });

    const navLinks = document.querySelectorAll("nav .navbar-links li a");

    navLinks.forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 70,
                    behavior: "smooth"
                });
            }
        });
    });

    const form = document.getElementById("messageForm");
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            alert("Thank you! Your message has been sent successfully.");
            this.reset();
        });
    }
});
