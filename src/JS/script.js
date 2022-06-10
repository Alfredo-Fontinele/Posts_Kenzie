const navbar = document.querySelector(".header_right");
const button = document.querySelector(".menu_mobile");

button.addEventListener("click", () => {
    navbar.classList.toggle("active");
})

function mudarTema() {
    let body = document.querySelector("body");
    if (body.classList.contains("bg1")) {
        body.classList.remove("bg1");
        body.classList.add("bg2");
        header.style.color = "#FFF";
    } else {
        body.classList.remove("bg2");
        body.classList.add("bg1");
    }
}
