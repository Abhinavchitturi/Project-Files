document.addEventListener("DOMContentLoaded", function () {
    const productContainer = document.getElementById('productContainer');
    const loadMoreButton = document.getElementById('loadMoreButton');
    const allButton = document.getElementById('allButton');
    const sportsButton = document.getElementById('sportsButton');
    const fashionButton = document.getElementById('fashionButton');
    const electronicsButton = document.getElementById('electronicsButton');
  
    const products = [
      { name: 'Product 1', price: '$20', category: 'sports', image: 'product1.jpg' },
      { name: 'Product 2', price: '$30', category: 'fashion', image: 'product2.jpg' },
      { name: 'Product 3', price: '$25', category: 'electronics', image: 'product3.jpg' },
      // Add more products as needed    
    ];
  
    const productsPerPage = 6;
    let currentPage = 1;
  
    function displayProducts(category) {
      const startIndex = (currentPage - 1) * productsPerPage;
      const endIndex = startIndex + productsPerPage;
  
      for (let i = startIndex; i < endIndex && i < products.length; i++) {
        const product = products[i];
  
        if (category === 'all' || product.category === category) {
          const productElement = createProductElement(product);
          productContainer.appendChild(productElement);
        }
      }
    }
  
    function createProductElement(product) {
      const productElement = document.createElement('div');
      productElement.classList.add('product');
  
      const imageElement = document.createElement('img');
      imageElement.src = product.image;
      imageElement.alt = product.name;
      productElement.appendChild(imageElement);
  
      productElement.innerHTML += `
        <h2>${product.name}</h2>
        <p>Base Price: ${product.price}</p>
      `;
      return productElement;
    }
  
    function loadMore() {
      currentPage++;
      const selectedCategory = getSelectedCategory();
      clearProducts();
      displayProducts(selectedCategory);
    }
  
    function filterProducts(category) {
      currentPage = 1;
      clearProducts();
      displayProducts(category);
    }
  
    function getSelectedCategory() {
      const activeButton = document.querySelector('button.active');
      return activeButton ? activeButton.id.replace('Button', '') : 'all';
    }
  
    function clearProducts() {
      productContainer.innerHTML = '';
    }
  
    allButton.addEventListener('click', function () {
      filterProducts('all');
    });
  
    sportsButton.addEventListener('click', function () {
      filterProducts('sports');
    });
  
    fashionButton.addEventListener('click', function () {
      filterProducts('fashion');
    });
  
    electronicsButton.addEventListener('click', function () {
      filterProducts('electronics');
    });
  
    loadMoreButton.addEventListener('click', loadMore);
  
    // Initial load
    displayProducts('all');
  });
  