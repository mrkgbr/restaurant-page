import structure from "./pages/structure.js";
import header from "./pages/header.js";
import home from "./pages/home.js";
import footer from "./pages/footer.js";
import menu from "./pages/menu.js";
import contact from "./pages/contact.js";

// loading starting page
structure();
header();
home();
footer();

// add listeners to toe buttons
// load page on click, refresh the main section
const button1 = document.getElementById("button-1");
button1.addEventListener("click", home);
const button2 = document.getElementById("button-2");
button2.addEventListener("click", menu);
const button3 = document.getElementById("button-3");
button3.addEventListener("click", contact);
