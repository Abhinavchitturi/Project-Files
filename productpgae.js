const products = [
    { name: 'Wireless Mouse', price: 20, category: 'electronics', image: 'Allpics/mouse.png', id:1,description: ""},
    { name: 'Blue Printed T-Shirt', price: 30, category: 'fashion', image: 'Allpics/1211186_OT84TK0.jpg', id:2 ,description: "New T.Shirt Bought at 50. selling for 30. size too bif gor me"},
    { name: 'Red Nike Running Shoes', price: 25, category: 'sports', image: 'Allpics/domino-164_6wVEHfI-unsplash.jpg', id:3,description: "" },
    { name: 'Money Plant', price: 25, category: 'all', image: 'Allpics/monstera-deliciosa-plant-pot_53876-133119.jpg', id:4 ,description: ""},
    { name: 'Classmate Spiral Notebooks (Pack of 4)', price: 20, category: 'stationary', image: 'Allpics/classmate-pulse-1-subject-notebook-240mm-x-180mm-soft-cover-180-pages-single-line.jpg', id:5,description: ""},
    { name: 'Acer 27-Inch Monitor', price: 150, category: 'electronics', image: 'Allpics/27-inch-monitor-2048px-1572.jpg', id:6,description: ""},
    { name: 'Wilson Basketball (Size 7)', price: 60, category: 'sports', image: 'Allpics/gyb basketball 2.jpg', id:7,description: ""},
    { name: 'Pocket Spiral Notebook', price: 30, category: 'stationary', image: 'Allpics/pocket-book-pvc-wiro-80-pages.jpg', id:8,description: ""},
    { name: 'Ipad Air', price: 150, category: 'electronics', image: 'Allpics/serwin365-0cG_yQAdYIM-unsplash.jpg', id:9,description: ""},
    // Add more products as needed  
  ];
// Get the product id from the query parameter
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');
const productImg = document.getElementById('image');
const productTitle = document.getElementById("product-title");
const productPrice = document.getElementById("product-price");  
const productDescription = document.getElementById("product-description");
const bidBtn = document.getElementById("bit-btn");
const bidInput = document.getElementById("bid-input");
const failorpass = document.getElementById("failorpass");
productDescription.textContent = "test";
document.addEventListener("DOMContentLoaded", function () {
    for(let i = 0; i<products.length; i++)
    {
        const product = products[i];
        if(product.id == productId)
        {
            productImg.src = product.image;
            productTitle.textContent = product.name;
            productPrice.innerHTML = `Current Bid : ₹${product.price}`;
            productDescription.textContent = product.description;
        }
    }
});
function process()
{
    var userBid = parseInt(bidInput.value);
    for(let i =0; i<products.length; i++)
    {
        const product = products[i];
        if(product.id == productId)
        {
            if(userBid>product.price )
            {
                product.price = userBid;
                productPrice.textContent = `Current Bid : ₹${userBid}`;
                failorpass.textContent = "Bid placed successfully!";
                failorpass.style.color = "green";
            }
            else
            {
                failorpass.textContent = "Please enter a valid bid amount higher than the current bid.";
                failorpass.style.color = "red";
            }
        }
    }
}