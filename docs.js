//
// Wait until HTML has loaded
//
document.addEventListener("DOMContentLoaded", function ()
{

    //
    // Locate the button
    //
    const btntestdoc =
        document.getElementById("btntestdoc");

    //
    // Attach click event
    //
    btntestdoc.addEventListener(
        "click",
        showtestdoc
    );

});


//
// Display User Manual
//
function showtestdoc()
{
    const viewer =
        document.getElementById("pdfViewer");

    viewer.src = "test_doc.pdf";
}
