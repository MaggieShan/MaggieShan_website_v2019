// Tabbed Feature Menu
var panel = document.getElementsByClassName("panel");
function togglePanel() {
    if (event.target.previousElementSibling) {
        if (event.target.previousElementSibling.style.maxHeight) {
            event.target.previousElementSibling.style.maxHeight = null;
            event.target.previousElementSibling.previousElementSibling.classList.remove("tabActive");
        }
        if (event.target.previousElementSibling.previousElementSibling.previousElementSibling) {
            if (event.target.previousElementSibling.previousElementSibling.previousElementSibling.style.maxHeight) {
                event.target.previousElementSibling.previousElementSibling.previousElementSibling.style.maxHeight = null;
                event.target.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.classList.remove("tabActive");
            }
        }
    }
    if (event.target.nextElementSibling.nextElementSibling) {
        if (event.target.nextElementSibling.nextElementSibling.nextElementSibling.style.maxHeight) {
            event.target.nextElementSibling.nextElementSibling.nextElementSibling.style.maxHeight = null;
            event.target.nextElementSibling.nextElementSibling.classList.remove("tabActive");
        }
        if (event.target.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling) {
            event.target.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.style.maxHeight = null;
            event.target.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.classList.remove("tabActive");
        }
    } 
    if(event.target.nextElementSibling.style.maxHeight) {
        event.target.nextElementSibling.style.maxHeight = null;
        event.target.classList.remove("tabActive");
    } else {
        event.target.nextElementSibling.style.maxHeight = event.target.scrollHeight + 50 + "px";
        event.target.nextElementSibling.classList.add("openPanel");event.target.classList.add("tabActive");
    }

    
}

