
    const productContainer = document.getElementById('productContainer');
    const loadMoreButton = document.getElementById('loadMoreButton');
    const allButton = document.getElementById('allButton');
    const sportsButton = document.getElementById('sportsButton');
    const fashionButton = document.getElementById('fashionButton');
    const electronicsButton = document.getElementById('electronicsButton');
    const booksButton = document.getElementById('booksButton');
    const stationaryButton = document.getElementById('stationaryButton');

  
    const products = [
      { name: 'Wireless Mouse', price: '$20', category: 'electronics', image: 'Allpics/mouse.png', id:1},
      { name: 'Blue Printed T-Shirt', price: '$30', category: 'fashion', image: 'Allpics/1211186_OT84TK0.jpg', id:2 },
      { name: 'Red Nike Running Shoes', price: '$25', category: 'sports', image: 'Allpics/domino-164_6wVEHfI-unsplash.jpg', id:3 },
      { name: 'Money Plant', price: '$25', category: 'all', image: 'Allpics/monstera-deliciosa-plant-pot_53876-133119.jpg', id:4 },
      { name: 'Classmate Spiral Notebooks (Pack of 4)', price: '$20', category: 'stationary', image: 'Allpics/classmate-pulse-1-subject-notebook-240mm-x-180mm-soft-cover-180-pages-single-line.jpg', id:5},
      { name: 'Acer 27-Inch Monitor', price: '$150', category: 'electronics', image: 'Allpics/27-inch-monitor-2048px-1572.jpg', id:6},
      { name: 'Wilson Basketball (Size 7)', price: '$60', category: 'sports', image: 'Allpics/gyb basketball 2.jpg', id:7},
      { name: 'Pocket Spiral Notebook', price: '$30', category: 'stationary', image: 'Allpics/pocket-book-pvc-wiro-80-pages.jpg', id:8},
      { name: 'Ipad Air', price: '$150', category: 'electronics', image: 'Allpics/serwin365-0cG_yQAdYIM-unsplash.jpg', id:9},
      // Add more products as needed  
    ];
    const productsPerPage = 12;
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
      productElement.addEventListener('click', function () {
        // Your onclick logic here, for example, alert the product name
        window.location.href = `productpage.html?id=${product.id}`;
      });
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
  
    function clearProducts() {
      productContainer.innerHTML = '';
    }
    function getSelectedCategory() {
        const activeButton = document.querySelector('all-button.active');
        return activeButton ? activeButton.id.replace('Button', '') : 'all';
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

    booksButton.addEventListener('click', function () {
        filterProducts('books');
      });

    stationaryButton.addEventListener('click', function () {
        filterProducts('stationary');
      });
    loadMoreButton.addEventListener('click', function () {
        loadMore();
      });
    // Initial load
    displayProducts('all');

