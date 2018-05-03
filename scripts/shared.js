
/**
 * loads all the required parts of the page
 * all code is shared across each page
 */
exports.loadShared = function(){
    $("#headerBar").load("./sharedHtml/headerBar.html");
    $("#navBar").load("./sharedHtml/navBar.html");
    $("#footerBar").load("./shared/navBar.html");
}
