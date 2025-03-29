document.addEventListener("DOMContentLoaded", function() {
    const productContainer = document.getElementById("product-container");
    const modal = new bootstrap.Modal(document.getElementById("productModal"));

    products.forEach(product => {
        const productHTML = `
            <div class="col">
                <div class="card product-card" data-id="${product.id}">
                    <span class="super-price">${product.discount}</span>
                    <span class="heart-icon">❤️</span>
                    <img src="${product.image}" alt="${product.title}" class="img-fluid">
                    <div class="card-body">
                        <h5 class="card-title">${product.title}</h5>
                        <div class="rating">⭐ ${product.rating} (${product.reviews} ta aksiya)</div>
                        <p class="monthly-price">${product.monthly_price}</p>
                        <p class="price">${product.price}</p>
                    </div>
                </div>
            </div>
        `;
        productContainer.innerHTML += productHTML;
    });

    // Mahsulotga bosganda modal ochish
    document.querySelectorAll(".product-card").forEach(card => {
        card.addEventListener("click", function() {
            const productId = this.getAttribute("data-id");
            const product = products.find(p => p.id == productId);

            document.getElementById("modalTitle").innerText = product.title;
            document.getElementById("modalImage").src = product.image;
            document.getElementById("modalDescription").innerText = product.description;
            document.getElementById("modalPrice").innerText = product.price;
            document.getElementById("modalMonthly").innerText = product.monthly_price;

            modal.show();
        });
    });
});
