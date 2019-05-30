window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");

    document.querySelector("#burgericon").addEventListener("click", burgerMenu);

    document.querySelector("#pilnedtryk").addEventListener("click", showMore);

}

function burgerMenu() {

    document.querySelector("#burgermenu").classList.remove("hidden");
    document.querySelector("#menuknap").addEventListener("click", burgerGone);


}

function burgerGone() {
    document.querySelector("#burgermenu").classList.add("hidden");

    document.querySelector("#keatitle").classList.remove("hidden");

}

function showMore() {
    document.querySelector("#pilnedtryk").classList.add("hidden");

    document.querySelector("#tryknedcontainer").classList.remove("move");

    document.querySelector("#piloptryk").classList.remove("hidden");

    document.querySelector("#piloptryk").addEventListener("click", showLess);
}

function showLess() {

    document.querySelector("#pilnedtryk").classList.remove("hidden");

    document.querySelector("#tryknedcontainer").classList.add("move");

    document.querySelector("#piloptryk").classList.add("hidden");

}
