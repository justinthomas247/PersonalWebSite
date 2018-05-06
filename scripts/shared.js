
/**
 * loads all the required parts of the page
 * all code is shared across each page
 */
export function loadShared(){
    $("#headerBar").load("./sharedHtml/headerBar.html");
    $("#navBar").load("./sharedHtml/navBar.html");
    $("#footerBar").load("./sharedHtml/navBar.html");
    console.log("loadShared called");
}
