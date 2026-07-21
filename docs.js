//
// Documentation definitions
//
const documents =
{
    A:
    [
        {label:"Cat A PDF 1", file:"cat_a_pdf_1.pdf"},
        {label:"Cat A PDF 2", file:"cat_a_pdf_2.pdf"},
        {label:"Cat A PDF 3", file:"cat_a_pdf_3.pdf"}

        // Add remaining Category A documents here
    ],

    B:
    [
        {label:"Cat B PDF 1", file:"cat_b_pdf_1.pdf"},
        {label:"Cat B PDF 2", file:"cat_b_pdf_2.pdf"}

        // Add remaining Category B documents here
    ],

    C:
    [
        {label:"Cat C PDF 1", file:"cat_c_pdf_1.pdf"}
    ],

    D:
    [
        {label:"Cat D PDF 1", file:"cat_d_pdf_1.pdf"}
    ]
};


//
// Wait until page has loaded
//
document.addEventListener(
    "DOMContentLoaded",
    function ()
    {
        document
            .getElementById("btnCategoryA")
            .addEventListener(
                "click",
                function()
                {
                    showCategory("A");
                });

        document
            .getElementById("btnCategoryB")
            .addEventListener(
                "click",
                function()
                {
                    showCategory("B");
                });

        document
            .getElementById("btnCategoryC")
            .addEventListener(
                "click",
                function()
                {
                    showCategory("C");
                });

        document
            .getElementById("btnCategoryD")
            .addEventListener(
                "click",
                function()
                {
                    showCategory("D");
                });

        //
        // Display Category A initially
        //
        showCategory("A");
    });


//
// Display one category
//
function showCategory(category)
{
    //
    // Highlight selected category
    //
    document
        .querySelectorAll(".category")
        .forEach(
            function(button)
            {
                button.classList.remove("active");
            });

    document
        .getElementById("btnCategory" + category)
        .classList.add("active");

    //
    // Clear previous buttons
    //
    const container =
        document.getElementById(
            "pdfButtonContainer");

    container.innerHTML = "";

    //
    // Get selected documents
    //
    const list =
        documents[category];

    //
    // Create one button for each document
    //
    list.forEach(
        function(doc)
        {
            const button =
                document.createElement(
                    "button");

            button.textContent =
                doc.label;

            button.addEventListener(
                "click",
                function()
                {
                    window.open(
                        doc.file,
                        "_blank");
                });

            container.appendChild(
                button);
        });
}
