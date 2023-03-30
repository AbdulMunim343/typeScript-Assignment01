"use strict";
const tableBody = document.querySelector('#myTable tbody');
fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(json => {
    let products = [];
    for (let i = 0; i < json.products.length; i++) {
        products.push({
            id: json.products[i].id,
            brand: json.products[i].brand,
            category: json.products[i].category,
            price: json.products[i].price,
            discountPercentage: json.products[i].price,
        });
    }
    products.forEach(product => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td >${product.id}</td>
              <td>${product.brand}</td>
              <td>${product.category}</td>
              <td>${product.price}</td>
              <td>${product.discountPercentage}%</td>
            `;
        tableBody.appendChild(row);
    });
});
//# sourceMappingURL=index.js.map