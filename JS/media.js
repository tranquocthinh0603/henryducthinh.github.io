function myMenu() {
    var x = document.getElementById("menu-top");
    if (x.className === "menu") {
        x.className += " responsive";
    } else {
        x.className = "menu";
    }
}