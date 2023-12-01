document.addEventListener("DOMContentLoaded", function () {
    const productContainer = document.getElementById('productContainer');
    const loadMoreButton = document.getElementById('loadMoreButton');
  
    const products = [
      { name: 'Product 1', price: '$20' },
      { name: 'Product 2', price: '$30' },
      { name: 'Product 3', price: '$25' },
      // Add more products as needed
    ];
  
    const productsPerPage = 6;
    let currentPage = 1;
  
    function displayProducts() {
      const startIndex = (currentPage - 1) * productsPerPage;
      const endIndex = startIndex + productsPerPage;
  
      for (let i = startIndex; i < endIndex && i < products.length; i++) {
        const product = products[i];
        const productElement = createProductElement(product);
        productContainer.appendChild(productElement);
      }
    }
  
    function createProductElement(product) {
      const productElement = document.createElement('div');
      productElement.classList.add('product');
      productElement.innerHTML = `
        <h2>${product.name}</h2>
        <p>Price: ${product.price}</p>
      `;
      return productElement;
    }
  
    function loadMore() {
      currentPage++;
      displayProducts();
    }
  
    loadMoreButton.addEventListener('click', loadMore);
  
    // Initial load
    displayProducts();
  });
  