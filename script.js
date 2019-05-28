window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");

    document.querySelector("#burgericon").addEventListener("click", toggleMenu);

    document.querySelector("#pilnedtryk").addEventListener("click", showMore);

}

function toggleMenu() {

    document.querySelector("#togglemenu").classList.remove("hidden");

    document.querySelector("#keatitle").classList.add("hidden");

    document.querySelector("#menuknap").addEventListener("click", backAgain);

    // HVIS SHOWMORE ER PÅ, GEM DEN
    document.querySelector("#scrollnedcontainer").classList.add("move");

    // FJERN IKONER NÅR MENU ER NEDE
    document.querySelector("#linkikon").classList.add("hidden");

    document.querySelector("#uploadikon").classList.add("hidden");

    document.querySelector("#pilnedtryk").classList.add("hidden");

    document.querySelector("#piloptryk").classList.add("hidden");
    document.querySelector("#pil1").classList.add("hidden");
    document.querySelector("#pil2").classList.add("hidden");
    document.querySelector("#pil3").classList.add("hidden");

}

function backAgain() {
    document.querySelector("#togglemenu").classList.add("hidden");

    document.querySelector("#keatitle").classList.remove("hidden");


    // VIS IKONER IGEN
    document.querySelector("#linkikon").classList.remove("hidden");
    document.querySelector("#uploadikon").classList.remove("hidden");
    document.querySelector("#pilnedtryk").classList.remove("hidden");
    document.querySelector("#pil1").classList.remove("hidden");
    document.querySelector("#pil2").classList.remove("hidden");
    document.querySelector("#pil3").classList.remove("hidden");
}

function showMore() {
    document.querySelector("#pilnedtryk").classList.add("hidden");

    document.querySelector("#scrollnedcontainer").classList.remove("move");

    document.querySelector("#piloptryk").classList.remove("hidden");

    document.querySelector("#piloptryk").addEventListener("click", showLess);
}

function showLess() {

    document.querySelector("#pilnedtryk").classList.remove("hidden");

    document.querySelector("#scrollnedcontainer").classList.add("move");

    document.querySelector("#piloptryk").classList.add("hidden");

}
