function mudarTema() {
    let header = document.querySelector("header");
    let body = document.querySelector("body");
    let main = document.querySelector("main");
    if (body.classList.contains("bg1")) {
        body.classList.remove("bg1");
        body.classList.add("bg2");
        header.style.backgroundColor = "rgb(20,30,40)";
        header.style.color = "#FFF";
        main.style.backgroundColor = "rgba(20,30,40, 0.8)";
    } else {
        body.classList.remove("bg2");
        body.classList.add("bg1");
        header.style.backgroundColor = "#FFF";
        header.style.color = "#000";
        main.style.backgroundColor = "#FFF";
    }
}
