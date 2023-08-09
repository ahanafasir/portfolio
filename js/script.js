// Get a reference to the document body
const body = document.body;

// Get references to theme toggle button and hamburger menu button
const btnTheme = document.querySelector(".fa-moon");
const btnHamburger = document.querySelector(".fa-bars");

// Function to add theme-related classes to the body and button
const addThemeClass = (bodyClass, btnClass) => {
  body.classList.add(bodyClass);
  btnTheme.classList.add(btnClass);
};

// Get theme preferences from local storage
const getBodyTheme = localStorage.getItem("portfolio-theme");
const getBtnTheme = localStorage.getItem("portfolio-btn-theme");

// Apply the stored theme classes to the body and button
addThemeClass(getBodyTheme, getBtnTheme);

// Function to check if the current theme is dark
const isDark = () => body.classList.contains("dark");

// Function to set the theme classes and update local storage
const setTheme = (bodyClass, btnClass) => {
  // Remove the previous theme classes
  body.classList.remove(localStorage.getItem("portfolio-theme"));
  btnTheme.classList.remove(localStorage.getItem("portfolio-btn-theme"));

  // Apply the new theme classes
  addThemeClass(bodyClass, btnClass);

  // Store the theme preferences in local storage
  localStorage.setItem("portfolio-theme", bodyClass);
  localStorage.setItem("portfolio-btn-theme", btnClass);
};

// Function to toggle between light and dark themes
const toggleTheme = () =>
  isDark() ? setTheme("light", "fa-moon") : setTheme("dark", "fa-sun");

// Attach the theme toggle function to the theme button's click event
btnTheme.addEventListener("click", toggleTheme);

// Function to display/hide the navigation menu list
const displayList = () => {
  const navUl = document.querySelector(".nav__list");

  if (btnHamburger.classList.contains("fa-bars")) {
    // Change the hamburger icon to a close icon
    btnHamburger.classList.remove("fa-bars");
    btnHamburger.classList.add("fa-times");
    // Display the navigation menu list
    navUl.classList.add("display-nav-list");
  } else {
    // Change the close icon back to a hamburger icon
    btnHamburger.classList.remove("fa-times");
    btnHamburger.classList.add("fa-bars");
    // Hide the navigation menu list
    navUl.classList.remove("display-nav-list");
  }
};

// Attach the navigation menu display function to the hamburger button's click event
btnHamburger.addEventListener("click", displayList);

// Function to show/hide the scroll-to-top button based on scroll position
const scrollUp = () => {
  const btnScrollTop = document.querySelector(".scroll-top");

  if (body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    // Display the scroll-to-top button
    btnScrollTop.style.display = "block";
  } else {
    // Hide the scroll-to-top button
    btnScrollTop.style.display = "none";
  }
};

// Attach the scroll position check function to the scroll event
document.addEventListener("scroll", scrollUp);
