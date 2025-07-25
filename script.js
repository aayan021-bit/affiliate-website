const products = [
    { id: 1, name: "iPhone 15", price: 70800, category: "Mobiles", img: "https://via.placeholder.com/200x300?text=iPhone+15" },
    { id: 2, name: "Samsung Galaxy", price: 60999, category: "Mobiles", img: "https://via.placeholder.com/200x300?text=Samsung+Galaxy" },
    { id: 3, name: "Nike Running Shoes", price: 4999, category: "Shoes", img: "https://via.placeholder.com/200x300?text=Nike+Shoes" },
    { id: 4, name: "Sony Headphones", price: 2999, category: "Electronics", img: "https://via.placeholder.com/200x300?text=Sony+Headphones" },
    { id: 5, name: "Dell Laptop", price: 70999, category: "Electronics", img: "https://via.placeholder.com/200x300?text=Dell+Laptop" },
    { id: 6, name: "Levi's T-Shirt", price: 1299, category: "Fashion", img: "https://via.placeholder.com/200x300?text=Levis+T-Shirt" }
];

const cart = [];
let currentCategory = 'All';

function renderProducts() {
    const productContainer = document.getElementById('products');
    const search = document.getElementById('searchBar').value.toLowerCase();
    const maxPrice = parseInt(document.getElementById('priceRange').value);
    const priceValue = document.getElementById('priceValue');
    priceValue.textContent = maxPrice;

    productContainer.innerHTML = "";

    const filtered = products.filter(p => 
        (currentCategory === 'All' || p.category === currentCategory) &&
        p.name.toLowerCase().includes(search) &&
        p.price <= maxPrice
    );

    filtered.forEach(p => {
        const div = document.createElement('div');
        div.className = 'product-card';
        div.innerHTML = `
            <img src="${p.img}" alt="${p.name}" />
            <h3>${p.name}</h3>
            <p>₹${p.price}</p>
            <button onclick="addToCart(${p.id})">Add to Cart</button>
            <a href="https://amazon.in" target="_blank"><button>Buy Now</button></a>
        `;
        productContainer.appendChild(div);
    });
}

function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');
    cartItems.innerHTML = "";
    let total = 0;
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item.name + " - ₹" + item.price;
        cartItems.appendChild(li);
        total += item.price;
    });
    totalElement.textContent = total;
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function filterCategory(category) {
    currentCategory = category;
    renderProducts();
}

function filterProducts() {
    renderProducts();
}

document.addEventListener('DOMContentLoaded', renderProducts);
