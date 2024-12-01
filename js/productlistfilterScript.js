const products = [
    { id: 1, name: 'Smartphone', category: 'electronics', price: 299, rating: 4.5, image: 'https://images.indianexpress.com/2024/08/7142Yat1NiL._SX679_.jpg' },
    { id: 2, name: 'Laptop', category: 'electronics', price: 799, rating: 4.7, image: 'https://in-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/c/0/c08192495_1_5_4.png' },
    { id: 3, name: 'T-shirt', category: 'clothing', price: 20, rating: 4.2, image: 'https://5.imimg.com/data5/SELLER/Default/2023/11/359807181/FV/ND/DC/161342414/oversized-black-tshirt-vs-tees-500x500.png' },
    { id: 4, name: 'Wristwatch', category: 'accessories', price: 150, rating: 4.8, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTevg2ZQ6fl7Y43OsC2d41pTnrQzN8zScKS2g&s' },
    { id: 5, name: 'Headphones', category: 'electronics', price: 79, rating: 4.3, image: 'https://m.media-amazon.com/images/I/61+R5rOj9+L.jpg' },
    { id: 6, name: 'Jeans', category: 'clothing', price: 40, rating: 4.0, image: 'https://www.shutterstock.com/image-photo/fashion-trendy-womens-jeans-isolated-600nw-2466839305.jpg' },
    { id: 7, name: 'Backpack', category: 'accessories', price: 60, rating: 4.5, image: 'https://www.fgear.in/cdn/shop/files/1_9822ae18-0551-41fa-8cc1-1745a1359531.jpg?v=1717826522&width=1946' },
    { id: 8, name: 'Sneakers', category: 'clothing', price: 90, rating: 4.6, image: 'https://redtape.com/cdn/shop/products/8-800x800_22c88bd9-f9c2-4c61-ab55-71edce92bf57.jpg?v=1728477061' },
];

function displayProducts(filteredProducts) {
    const productContainer = document.querySelector('#product-list');
    productContainer.innerHTML = '';
    filteredProducts.forEach(product => {
        const productCard = `
            <div class="bg-white p-4 rounded-lg shadow-md">
                <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover rounded-md mb-4">
                <h3 class="text-lg font-semibold">${product.name}</h3>
                <p class="text-sm text-gray-500">Category: ${product.category}</p>
                <p class="text-lg font-bold text-blue-600">$${product.price}</p>
                <p class="text-sm text-yellow-500">Rating: ${'★'.repeat(Math.round(product.rating))}</p>
            </div>
        `;
        productContainer.innerHTML += productCard;
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const categoryFilter = document.getElementById('category');
    const priceFilter = document.getElementById('price');
    const sortBy = document.getElementById('sortBy');
    displayProducts(products);
    categoryFilter.addEventListener('change', () => {
        const filteredProducts = filterProducts();
        const sortedProducts = sortProducts(filteredProducts);
        displayProducts(sortedProducts);
    });
    priceFilter.addEventListener('input', () => {
        const priceLabel = document.getElementById('price-label');
        priceLabel.textContent = `Max Price: $${priceFilter.value}`;
        const filteredProducts = filterProducts();
        const sortedProducts = sortProducts(filteredProducts);
        displayProducts(sortedProducts);
    });
    sortBy.addEventListener('change', () => {
        const filteredProducts = filterProducts();
        const sortedProducts = sortProducts(filteredProducts);
        displayProducts(sortedProducts);
    });
    function filterProducts() {
        const categoryValue = categoryFilter.value;
        const maxPrice = parseInt(priceFilter.value);

        return products.filter(product => {
            const matchesCategory = categoryValue === 'all' || product.category === categoryValue;
            const matchesPrice = product.price <= maxPrice;
            return matchesCategory && matchesPrice;
        });
    }
    function sortProducts(productsToSort) {
        const sortValue = sortBy.value;
        return productsToSort.sort((a, b) => {
            if (sortValue === 'rating') {
                return b.rating - a.rating;
            } else if (sortValue === 'price') {
                return a.price - b.price;
            }
        });
    }
});