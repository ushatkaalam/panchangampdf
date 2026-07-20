//
// Wait until HTML has loaded
//
document.addEventListener("DOMContentLoaded", function ()
{

    //
    // Locate the button
    //
    const btnUserManual =
        document.getElementById("btnUserManual");

    //
    // Attach click event
    //
    btnUserManual.addEventListener(
        "click",
        showUserManual
    );

});


//
// Display User Manual
//
function showUserManual()
{
    const viewer =
        document.getElementById("pdfViewer");

    viewer.src = "docs/User_Manual.pdf";
}
