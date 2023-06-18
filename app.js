// Contact Form Popup
let modalBtns = [...document.querySelectorAll(".button-signup")];
modalBtns.forEach(function (btn) {
    btn.onclick = function () {
        let modal = btn.getAttribute("data-modal");
        document.getElementById(modal).style.display = "block";
    };
});
let closeBtns = [...document.querySelectorAll(".close")];
closeBtns.forEach(function (btn) {
    btn.onclick = function () {
        let modal = btn.closest(".modal");
        modal.style.display = "none";
    };
});
window.onclick = function (event) {
    if (event.target.className === "modal") {
        event.target.style.display = "none";
    }
};

/*
function buttonThanks() {
    alert("Thanks! Someone will get back to you soon!");
    setTimeout(window.location.replace("https://lionstarlawncare.github.io"), 300);
} */

// review slideshow click through
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}
