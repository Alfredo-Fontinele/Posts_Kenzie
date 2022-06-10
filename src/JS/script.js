function mudarTema() {
    let main = document.querySelector("main");
    let header = document.querySelector("header");
    let body = document.querySelector("body");
    if (body.classList.contains("bg1")) {
        body.classList.remove("bg1");
        body.classList.add("bg2");
        main.style.backgroundColor = "rgba(20,30,40, 0.8)";
        header.style.backgroundColor = "rgb(20,30,40)";
        header.style.color = "#FFF";
    } else {
        body.classList.remove("bg2");
        body.classList.add("bg1");
        header.style.backgroundColor = "#FFF";
        header.style.color = "#000";
        main.style.backgroundColor = "#FFF";
    }
}
