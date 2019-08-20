// Tabbed Feature Menu
// To make sure a tab opens when clicked, while other active ones close
var panel = document.getElementsByClassName("panel");
function togglePanel() {
    // If there exists a tab before the current one
    if (event.target.previousElementSibling) {
        event.target.previousElementSibling.style.minHeight = null;
        event.target.previousElementSibling.previousElementSibling.classList.remove("tabActive");
        // If there exists 2 tabs before the current one 
        if (event.target.previousElementSibling.previousElementSibling.previousElementSibling) {
            event.target.previousElementSibling.previousElementSibling.previousElementSibling.style.minHeight = null;
            event.target.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.classList.remove("tabActive");
        }
    }
    // If there exists a tab after the current one
    if (event.target.nextElementSibling.nextElementSibling) {
        event.target.nextElementSibling.nextElementSibling.nextElementSibling.style.minHeight = null;
        event.target.nextElementSibling.nextElementSibling.classList.remove("tabActive");
        // If there there exists 2 tabs after the current one
        if (event.target.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling) {
            event.target.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.style.minHeight = null;
            event.target.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.classList.remove("tabActive");
        }
    } 
    // If current tab is already open
    if(event.target.nextElementSibling.style.minHeight) {
        event.target.nextElementSibling.style.minHeight = null;
        event.target.classList.remove("tabActive");
    } else {
        event.target.nextElementSibling.style.minHeight = "150px";
        event.target.nextElementSibling.classList.add("openPanel");event.target.classList.add("tabActive");
    }
}