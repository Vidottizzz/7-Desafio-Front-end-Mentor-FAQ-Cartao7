
function showhide(divElement) {
    let div = document.getElementById(divElement);

    if (div.style.display !== "none") {
        div.style.display = "none";
    }
    else {
        div.style.display = "block";
    }
}