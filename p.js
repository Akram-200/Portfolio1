// Wait for the page to load
document.addEventListener("DOMContentLoaded", function () {
  // Find the HTML element with the class "HAG"
  const HAG = document.querySelector(".HAG");
  const HAG2 = document.querySelector(".HAG2");

  // Retrieve product data from localStorage
  const mark = localStorage.getItem('mark');
  const productImg1 = localStorage.getItem('productImg1');
  const productImg2 = localStorage.getItem('productImg2');
  const productImg3 = localStorage.getItem('productImg3');
  const productImg4 = localStorage.getItem('productImg4');
  const productTitle = localStorage.getItem('productTitle');
  const productDescription = localStorage.getItem('productDescription');
  const productStock = localStorage.getItem('productStock');
  const productPromo = localStorage.getItem('productPromo');
  const productBrand = localStorage.getItem('productBrand');
  const productCategory = localStorage.getItem('productCategory');

  const thePrice = document.querySelector(".thePrice");
  const thePromo = document.querySelector(".thePromo");
  const Item = document.querySelector(".Item");
  const incrementButton = document.querySelector(".incrementButton");
  const decrementButton = document.querySelector(".decrementButton");
  

  // If productImg1 is found in localStorage (i.e., a product link was clicked)
  if (productImg1) {
    // Create an "img" element to display the product images
    const productImgElement1 = document.createElement("img");
    productImgElement1.className = "productImgElement1"
    productImgElement1.src = productImg1; // Set the image source

    const productImgElement2 = document.createElement("img");
    productImgElement2.className = "productImgElement2"
    productImgElement2.src = productImg2; // Set the image source

    const productImgElement3 = document.createElement("img");
    productImgElement3.className = "productImgElement3"
    productImgElement3.src = productImg3; // Set the image source

    const productImgElement4 = document.createElement("img");
    productImgElement4.className = "productImgElement4"
    productImgElement4.src = productImg4; // Set the image source

    const stockIMGS = document.createElement("div");
    stockIMGS.className = "stockIMGS";
    const stockIMG = document.createElement("img");
    stockIMG.className = "stockIMG";
    stockIMG.src = productImg1;
    stockIMGS.appendChild(stockIMG);
    HAG.appendChild(stockIMGS);
    
    const imgs = document.createElement("div")
    imgs.className = "imgs"

    const productImgs1 = document.createElement("img");
    productImgs1.className = "productImgs1"
    productImgs1.src = productImg1
    imgs.appendChild(productImgs1)

    const productImgs2 = document.createElement("img");
    productImgs2.className = "productImgs2"
    productImgs2.src = productImg2
    imgs.appendChild(productImgs2)

    const productImgs3 = document.createElement("img");
    productImgs3.className = "productImgs3"
    productImgs3.src = productImg3
    imgs.appendChild(productImgs3)

    const productImgs4 = document.createElement("img");
    productImgs4.className = "productImgs4"
    productImgs4.src = productImg4
    imgs.appendChild(productImgs4)
    HAG.appendChild(imgs)

    // Create a "p" element to display the product title
    const productTitleElement = document.createElement("p");
    productTitleElement.textContent = productTitle;
    productTitleElement.className = "productTitle"; // Add a class for styling
    HAG.appendChild(productTitleElement);

    // Create a "p" element to display the product description
    const productDescriptionElement = document.createElement("p");
    productDescriptionElement.textContent = productDescription;
    productDescriptionElement.className = "productDescription"; // Add a class for styling
    HAG.appendChild(productDescriptionElement);

    // Create a "p" element to display the product stock
    const productStockElement = document.createElement("p");
    productStockElement.className = "productStock";
    function funcStock(price){
      productStockElement.textContent = price;
      thePrice.appendChild(productStockElement);
    }

    funcStock(productStock)
    let countUp = 1;

    Item.textContent =  "x" + countUp
    
    const initialPrice = parseFloat(productStockElement.textContent.substring(2));

    // Function to update the displayed price and enable/disable buttons
    function updatePrice(newPrice) {
      const formattedPrice = "$ " + newPrice.toFixed(2);
      funcStock(formattedPrice);
      
      incrementButton.disabled = (newPrice >= 10 * initialPrice);
      decrementButton.disabled = (newPrice <= initialPrice);
    }
    
    incrementButton.addEventListener("click", () => {
      countUp += 1

      Item.textContent =  "x" + countUp 

      const currentPrice = parseFloat(productStockElement.textContent.substring(2));
      const incrementValue = parseFloat(productStock.substring(2));
      const newPrice = currentPrice + incrementValue;
    
      updatePrice(newPrice);

    });
    
    decrementButton.addEventListener("click", () => {
      if(countUp >= 2){
      countUp -= 1
        Item.textContent =  "x" + countUp
      }

      const currentPrice = parseFloat(productStockElement.textContent.substring(2));
      const decrementValue = parseFloat(productStock.substring(2));
      let newPrice = currentPrice - decrementValue;
      
      if (newPrice < initialPrice) {
        newPrice = initialPrice;
      }
    
      updatePrice(newPrice);
    });
    
    
    

    if (mark === "1" && productPromo && productPromo !== "0") {
      // Create a "p" element to display the product stock
      const productPromoElement = document.createElement("p");
      productPromoElement.textContent = productPromo;
      productPromoElement.className = "productPromo"; // Add a class for styling
      thePromo.appendChild(productPromoElement);
    }

    // Create a "p" element to display the product brand
    const productBrandElement = document.createElement("p");
    productBrandElement.textContent = "Brand: " + productBrand;
    productBrandElement.className = "productBrand"; // Add a class for styling
    HAG2.appendChild(productBrandElement);

    // Create a "p" element to display the product category
    const productCategoryElement = document.createElement("p");
    productCategoryElement.textContent = "Category: " + productCategory;
    productCategoryElement.className = "productCategory"; // Add a class for styling
    HAG2.appendChild(productCategoryElement);

    productImgs1.addEventListener("click", () => {
      stockIMG.src = productImgs1.src;
    })
    
    productImgs2.addEventListener("click", () => {
      stockIMG.src = productImgs2.src;
    })
    
    productImgs3.addEventListener("click", () => {
      stockIMG.src = productImgs3.src;
    })
    
    productImgs4.addEventListener("click", () => {
      stockIMG.src = productImgs4.src;
    })
  }

  const Cart = document.querySelector(".Cart")

  Cart.addEventListener('click', () => {
    localStorage.setItem('mark', mark);
    localStorage.setItem('productImg1', productImg1);
    localStorage.setItem('productImg2', productImg2);
    localStorage.setItem('productImg3', productImg3);
    localStorage.setItem('productImg4', productImg4);
    localStorage.setItem('productTitle', productTitle);
    localStorage.setItem('productStock', productStock);
    localStorage.setItem('productPromo', productPromo);
  });

  
});

