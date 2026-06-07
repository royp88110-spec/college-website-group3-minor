// ==========================
// Loader
// ==========================

window.addEventListener("load", function () {
    const loader = document.getElementById("loader");

    if (loader) {
        setTimeout(() => {
            loader.style.display = "none";
        }, 1500);
    }
});


// ==========================
// AOS Animation
// ==========================

if (typeof AOS !== "undefined") {
    AOS.init({
        duration: 1000,
        once: true
    });
}


// ==========================
// Typing Animation
// ==========================

const typingElement = document.getElementById("typing");

if (typingElement) {

    const text =
        "Empowering Future Engineers Through Technical Excellence";

    let index = 0;

    function typeText() {

        if (index < text.length) {

            typingElement.innerHTML += text.charAt(index);

            index++;

            setTimeout(typeText, 70);
        }
    }

    typeText();
}


// ==========================
// Counter Animation
// ==========================

const counters = document.querySelectorAll(".count");

counters.forEach(counter => {

    const updateCounter = () => {

        const target =
            +counter.getAttribute("data-target");

        const count =
            +counter.innerText;

        const increment =
            Math.ceil(target / 100);

        if (count < target) {

            counter.innerText =
                count + increment;

            setTimeout(updateCounter, 20);

        } else {

            counter.innerText = target;
        }
    };

    updateCounter();
});


// ==========================
// Dark Mode
// ==========================

const darkBtn =
    document.getElementById("darkBtn");

if (darkBtn) {

    darkBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        const icon =
            darkBtn.querySelector("i");

        if (document.body.classList.contains("dark")) {

            icon.classList.remove("fa-moon");
            icon.classList.add("fa-sun");

        } else {

            icon.classList.remove("fa-sun");
            icon.classList.add("fa-moon");
        }
    });
}


// ==========================
// Back To Top Button
// ==========================

const topBtn =
    document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (!topBtn) return;

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";
    }
});

if (topBtn) {

    topBtn.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });
}


// ==========================
// Mobile Menu Toggle
// ==========================

const menuBtn =
    document.querySelector(".menu-btn");

const navLinks =
    document.querySelector(".nav-links");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        if (
            navLinks.style.display === "flex"
        ) {

            navLinks.style.display = "none";

        } else {

            navLinks.style.display = "flex";

            navLinks.style.flexDirection =
                "column";

            navLinks.style.position =
                "absolute";

            navLinks.style.top = "80px";

            navLinks.style.right = "20px";

            navLinks.style.background =
                "#0b2f6d";

            navLinks.style.padding =
                "20px";

            navLinks.style.borderRadius =
                "10px";
        }
    });
}


// ==========================
// Navbar Shadow on Scroll
// ==========================

const navbar =
    document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (!navbar) return;

    if (window.scrollY > 50) {

        navbar.style.boxShadow =
            "0 5px 20px rgba(0,0,0,0.2)";

    } else {

        navbar.style.boxShadow = "none";
    }
});


// ==========================
// Hero Button Animation
// ==========================

const buttons =
    document.querySelectorAll(".btn");

buttons.forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform =
            "scale(1.05)";
    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform =
            "scale(1)";
    });
});


// ==========================
// Console Message
// ==========================

console.log(
    "Murarai Government Polytechnic Website Loaded Successfully"
);