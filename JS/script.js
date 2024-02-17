// <======== Initializing AOS-Animations JS ========>
AOS.init({
    duration: 1200,
});


// <======== JS Program For the Scroll-To-Top Button ========>
const navbarContainer = document.querySelector("#header .navbar-container");
const scrollBtn = document.querySelector("#scrollBtn");
window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
        scrollBtn.classList.add("show");
        navbarContainer.classList.add("scroll");
    }
    else {
        scrollBtn.classList.remove("show");
        navbarContainer.classList.remove("scroll");
    }
})


// <======== JS Program For the Responsive Navigation Bar ========>
const menuIcon = document.querySelector("#navbar .ri-menu-line");
const closeIcon = document.querySelector("#navbar .middle-navbar.responsive .ri-close-line");
const middleNavbarResponsive = document.querySelector("#navbar .middle-navbar.responsive");
const navigationMenuLinks = document.querySelectorAll("#navbar .middle-navbar.responsive ul li a");

menuIcon.addEventListener("click", () => {
    middleNavbarResponsive.style.transform = 'translate(0px)';
})

closeIcon.addEventListener("click", () => {
    middleNavbarResponsive.style.transform = 'translate(200%)';
})

navigationMenuLinks.forEach((link) => {
    link.addEventListener("click", () => {
        middleNavbarResponsive.style.transform = 'translate(200%)';
    })
})


// <======== JS Program to Execute Owl-Carousel for Brands-Container ========>
$(function () {
    var owl = $("#brands-container .owl-carousel");
    owl.owlCarousel({
        margin: 0,
        loop: true,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 8000,
        smartSpeed: 1500,
        responsive: {
            0: {
                items: 2
            },
            400: {
                items: 3
            },
            600: {
                items: 4
            },
            750: {
                items: 5
            },
            900: {
                items: 6
            },
            1200: {
                items: 8
            },
            1800: {
                items: 10
            }
        }
    });
});


// <======== JS Program to Execute Owl-Carousel for Testimonial-Container ========>
$(function () {
    var owl = $("#testimonial-container .owl-carousel");
    owl.owlCarousel({
        margin: 0,
        loop: true,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 8000,
        smartSpeed: 1500,
        responsive: {
            0: {
                items: 1
            },
            700: {
                items: 2
            },
            1200: {
                items: 3
            },
            2000: {
                items: 4
            }
        }
    });
});


// <======== JS Program to Send all the Data of the Contact-Container Form to Google Sheet ========>
const contactContainerForm = document.querySelector("#contact-container .contact-container-form form");
const contactContainerFormAllInputs = document.querySelectorAll("#contact-container .contact-container-form .form-input .contact-container-form-inputs");
const contactContainerFormSelect = document.querySelector("#contact-container .contact-container-form .form-input select");
const contactContainerAlert = document.querySelector("#contact-container-alert");
const contactContainerAlertIcon = document.querySelector("#contact-container-alert .ri-close-line");

contactContainerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let data = new FormData(contactContainerForm);
    fetch('https://script.google.com/macros/s/AKfycbweOWg8Prw1BI5AWuhibiKe3RgMzRWr3wiVfuqtDSu5V5hR_FYEKvu4AqAvtI24xpUs/exec', {
        method: "POST",
        body: data,
    })
        .then(res => res.text())
    contactContainerFormAllInputs.forEach((input) => {
        input.value = "";
    })
    contactContainerFormSelect.value = "AC Repairing"

    contactContainerAlert.classList.add("show");
    contactContainerAlertIcon.addEventListener("click", () => {
        contactContainerAlert.classList.remove("show");
    })

    setTimeout(() => {
        contactContainerAlert.classList.remove("show");
    }, 4000);
})
