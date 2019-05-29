window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");

    document.querySelector("#burgericon").addEventListener("click", toggleMenu);

    document.querySelector("#pilnedtryk").addEventListener("click", showMore);

}

function toggleMenu() {

    document.querySelector("#togglemenu").classList.remove("hidden");
    document.querySelector("#menuknap").addEventListener("click", backAgain);


}

function backAgain() {
    document.querySelector("#togglemenu").classList.add("hidden");

    document.querySelector("#keatitle").classList.remove("hidden");

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
