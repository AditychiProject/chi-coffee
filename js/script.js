// Feather Icons
feather.replace();

// Menu Active
const headerLinks = document.querySelector(".header-links");
document.querySelector("#hamburger-menu").onclick = () => {
  headerLinks.classList.toggle("active");
};

// Search Input
const searchInput = document.querySelector(".search-input");
const searchBox = document.querySelector("#search-box");
document.querySelector("#search").onclick = (e) => {
  searchInput.classList.toggle("active");
  e.preventDefault();
};

// Cart
const shoppingCart = document.querySelector(".shopping-cart");
document.querySelector("#shopping-cart").onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
};

// Klik di luar elemen
const hamburgerMenu = document.querySelector("#hamburger-menu");
const searchBtn = document.querySelector("#search");
const shoppingCartBtn = document.querySelector("#shopping-cart");
document.addEventListener("click", function (e) {
  // Menu
  if (!hamburgerMenu.contains(e.target) && !headerLinks.contains(e.target)) {
    headerLinks.classList.remove("active");
  }
  // Search Input
  if (!searchBtn.contains(e.target) && !searchInput.contains(e.target)) {
    searchInput.classList.remove("active");
  }
  // Cart
  if (!shoppingCartBtn.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});
