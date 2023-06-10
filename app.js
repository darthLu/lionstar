// Contact Form Popup
let modalBtns = [...document.querySelectorAll(".button")];
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



// Contact Form - Successful submit alert and back to homepage
window.addEventListener("load", function () {
    const form = document.getElementById('signup');
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const data = new FormData(form);
        const action = e.target.action;
        fetch(action, {
            method: 'POST',
            body: data,
        })
            .then(() => {
                alert("Thanks! We'll get back to you soon.");
                window.location.replace("http://127.0.0.1:5500/index.html");
            })
    });
});


// button onClick to services
document.getElementById("services").onclick = function () {
    location.href = "#services";
};