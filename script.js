
let cart = [];

function addToCart(product, price) {
  cart.push({ product, price });
  alert(`${product} added to cart! Total items: ${cart.length}`);
}

window.onscroll = function () {
  const scrollBtn = document.getElementById("scrollToTopBtn");
  scrollBtn.style.display = (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) ? "block" : "none";
};

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("scrollToTopBtn").onclick = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
});
