
// Navbar Scroll Effect
window.addEventListener("scroll", function () {
    let nav = document.getElementById("navbar");

    if (window.scrollY > 50) {
        nav.style.background = "#ffffff";
        nav.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
    }
    else {
        nav.style.background = "transparent";
        nav.style.boxShadow = "none";
    }
});


// Counter Animation

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    counter.innerText = "0";

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");

        const c = +counter.innerText;

        const increment = target / 100;

        if (c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`;
            setTimeout(updateCounter, 30);
        }
        else {
            counter.innerText = target;
        }

    };

    updateCounter();

});


// Testimonial Slider

let testimonials = document.querySelectorAll(".testimonial");

let index = 0;

function showTestimonials() {

    testimonials.forEach(t => t.classList.remove("active"));

    testimonials[index].classList.add("active");

    index++;

    if (index === testimonials.length) {
        index = 0;
    }

}

setInterval(showTestimonials, 4000);


// Gallery Lightbox

const images = document.querySelectorAll(".gallery-grid img");

images.forEach(img => {

    img.addEventListener("click", () => {

        let lightbox = document.createElement("div");

        lightbox.style.position = "fixed";
        lightbox.style.top = "0";
        lightbox.style.left = "0";
        lightbox.style.width = "100%";
        lightbox.style.height = "100%";
        lightbox.style.background = "rgba(0,0,0,0.8)";
        lightbox.style.display = "flex";
        lightbox.style.alignItems = "center";
        lightbox.style.justifyContent = "center";

        let bigImg = document.createElement("img");

        bigImg.src = img.src;
        bigImg.style.maxWidth = "90%";

        lightbox.appendChild(bigImg);

        document.body.appendChild(lightbox);

        lightbox.addEventListener("click", () => {
            lightbox.remove();
        });

    });

});


// Contact Form

document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Message Sent Successfully!");
});