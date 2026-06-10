$("#hamburger").on("click", function () { // ← click event

    // ↓ action snippets ↓
    if ($("#nav-menu").hasClass("accessible-hidden")) { // ← element has css class

        // ↓ action snippets (class on element) ↓
        $("#nav-menu").removeClass("accessible-hidden");
        // ↑ action snippets (class on element) ↑

    } else { // ← element has css class

        // ↓ action snippets (class not on element) ↓
        $("#nav-menu").addClass("accessible-hidden");
        // ↑ action snippets (class not on element) ↑

    } // ← element has css class
    // ↑ action snippets ↑

}); // ← click event

$(document).ready(function () { // ← page ready event

    // ↓ action snippets ↓
    if (window.matchMedia("(max-width: 900px)").matches) { // ← get browser width

        // ↓ action snippets (< width) ↓
        $("#hamburger").removeClass("hidden");

        // ↑ action snippets (< width) ↑

    } else { // ← get browser width

        // ↓ action snippets (> width) ↓
        $("#hamburger").addClass("hidden");
        // ↑ action snippets (> width) ↑

    } // ← get browser width
    // ↑ action snippets ↑

}); // ← page ready event

$(window).on("resize", function () { // ← resize browser window event

    // ↓ action snippets ↓
    if (window.matchMedia("(max-width: 900px)").matches) { // ← get browser width

        // ↓ action snippets (< width) ↓
        $("#hamburger").removeClass("hidden");

        // ↑ action snippets (< width) ↑

    } else { // ← get browser width

        // ↓ action snippets (> width) ↓
        $("#hamburger").addClass("hidden");
        $("#nav-menu").removeClass("accessible-hidden");
        // ↑ action snippets (> width) ↑

    } // ← get browser width
    // ↑ action snippets ↑

}); // ← resize browser window event
