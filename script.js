// navbar
window.addEventListener("scroll", () => {
    document.querySelector("nav").classList.toggle("window-scroll", window.scrollY > 0)
});

const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("open");

        const icon = faq.querySelector(".faq-icon i");
        if (icon.className === "fa-solid fa-plus") {
            icon.className = "fa-solid fa-minus";
        } else {
            icon.className = "fa-solid fa-plus";
        }
    });
});

// 
const menu = document.querySelector(".nav_menu");
const menuOpen = document.querySelector("#open-menu");
const menuClose = document.querySelector("#close-menu");


menuOpen.addEventListener("click", () => {
    menu.style.display = "flex";
    menuClose.style.display = "inline-block";
    menuOpen.style.display = "none";
});


const closeNavMenu = () => {
    menu.style.display = "none";
    menuOpen.style.display = "inline-block";
    menuClose.style.display = "none";
}

menuClose.addEventListener("click", closeNavMenu);

// project completed