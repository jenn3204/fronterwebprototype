window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");

    document.querySelector("#burgericon").addEventListener("click", toggleMenu);

}

function toggleMenu() {

    document.querySelector("#togglemenu").classList.remove("hidden");

    document.querySelector("#keatitle").classList.add("hidden");

    document.querySelector("#menuknap").addEventListener("click", backAgain);

}

function backAgain() {
    document.querySelector("#togglemenu").classList.add("hidden");

    document.querySelector("#keatitle").classList.remove("hidden");
}
