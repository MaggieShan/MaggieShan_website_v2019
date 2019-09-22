// Tabbed Feature Menu
// To make sure a tab opens when clicked, while other active ones close
var panel = document.getElementsByClassName("panel");
function togglePanel() {
    var accordians = document.getElementsByClassName("accordian");
    var tabClicked = event.target; 
    var tabPanel = tabClicked.nextElementSibling; 

    // Open current panel 
    tabPanel.style.minHeight = "150px";
    tabPanel.classList.add("openPanel");
    tabPanel.classList.add("tabActive");

    //Close all others 
    if (tabClicked == accordians[0]) { // Development 
        close(accordians[1]);
        close(accordians[2]); 
    } else if (tabClicked == accordians[1]) { // Design
        close(accordians[0]);
        close(accordians[2]); 
    } else { // Languages
        close(accordians[0]);
        close(accordians[1]); 
    }
}

// Closes the given tab 
function close(tab) {
    tab.nextElementSibling.style.minHeight = null; 
    tab.nextElementSibling.classList.remove("tabActive");
}