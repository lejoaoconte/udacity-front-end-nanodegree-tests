/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */

const main = document.getElementsByTagName("main")[0];
const sections = document.getElementsByTagName("section");
const navlist = document.getElementById("navbar__list");
const maxWidth = window.matchMedia("(max-width: 600px)");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// add new section
function createNewSection() {
  const section = document.createElement("section");
  section.setAttribute("id", "section4");
  section.setAttribute("data-nav", "Section 4");

  const divSection = document.createElement("div");
  divSection.setAttribute("class", "landing__container");

  const divSectionValues = `
    <h2>Section 4</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer interdum, turpis eu iaculis tincidunt, metus nulla eleifend tellus, non faucibus eros sapien sit amet tellus. Cras tincidunt, arcu sit amet convallis lacinia, nibh sapien condimentum sapien, eget pretium ipsum turpis vel ex. Praesent tincidunt tincidunt nunc id porta. Sed consectetur est dictum scelerisque euismod. Mauris vitae suscipit enim. Aenean viverra sem a tellus facilisis, quis tristique urna ultrices. Aenean dignissim nec sem eu aliquam. Sed ut leo vitae quam porta pellentesque semper volutpat lorem.</p>
    `;

  divSection.innerHTML = divSectionValues;

  section.appendChild(divSection);
  main.appendChild(section);
}

createNewSection();

// build the nav

function changeStyleMediaQuery(maxWidth) {
  const ulElement = document.getElementsByTagName("ul")[0];

  if (maxWidth.matches) {
    ulElement.style.textAlign = "center";
  } else {
    ulElement.style.textAlign = "right";
  }
}

changeStyleMediaQuery(maxWidth);

function handleSmoothScroll(e, section) {
  e.preventDefault();

  window.scrollTo({
    top: section.offsetTop,
    behavior: "smooth",
  });
}

function buildNavList() {
  [...sections].map((section) => {
    const li = document.createElement("li");

    const a = `<a class="menu__link" id="li-${section.id}" href="#${section.id}" style='padding: 10px'>${section.dataset.nav}</a>`;

    li.innerHTML = a;
    li.addEventListener("click", (e) => handleSmoothScroll(e, section));

    navlist.appendChild(li);
  });
}
buildNavList();

// Add class 'active' to section when near top of viewport
function handleScrollPage() {
  [...sections].forEach((section) => {
    const liElement = document.getElementById("li-" + section.id);
    const distance = section.getBoundingClientRect();

    if (distance.top < 450 && distance.top >= -450) {
      liElement.style.color = "#fff";
      liElement.style.background = "#333";
      section.classList.add("your-active-class");
    } else {
      liElement.style.color = "#000";
      liElement.style.background = "none";
      section.classList.remove("your-active-class");
    }
  });
}

// Scroll to anchor ID using scrollTO event
window.addEventListener("scroll", handleScrollPage);

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
