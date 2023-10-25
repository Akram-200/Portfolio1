document.addEventListener("DOMContentLoaded", function () {
  const HAG = document.querySelector(".HAG");
  const thePrice = document.querySelector(".thePrice");
  const Item = document.querySelector(".Item");
  const incrementButton = document.querySelector(".incrementButton");
  const decrementButton = document.querySelector(".decrementButton");
  const saveButton = document.querySelector(".saveB");

  let cart = [];

  function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  function updateCartDisplay() {
    // Clear the existing cart
    HAG.innerHTML = "";
  
    // Loop through the items in the current cart and display them
    for (const [index, item] of cart.entries()) {
      // Create a productDiv for each item in the cart
      const productDiv = document.createElement("div");
      productDiv.className = "product";
  
      const img = document.createElement("img");
      img.src = item.productImg;
      productDiv.appendChild(img);
  
      const title = document.createElement("h1");
      title.textContent = item.productTitle;
      title.className = "productTitle";
      productDiv.appendChild(title);
  
      const price = document.createElement("p");
      price.textContent = item.productPrice;
      price.className = "productPrice";
      productDiv.appendChild(price);
  
      const itemText = document.createElement("p");
      itemText.textContent = `x${item.quantity}`;
      itemText.className = "productItem";
      productDiv.appendChild(itemText);


      // Create a delete button
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.className = "delete-button";
      deleteButton.addEventListener("click", () => {
        // Call a function to remove the item from the cart
        removeFromCart(index);
      });
      productDiv.appendChild(deleteButton);

  
      HAG.appendChild(productDiv);
    }
  }

  
  // Add a function to remove an item from the cart:
  function removeFromCart(index) {
    if (index >= 0 && index < cart.length) {
      cart.splice(index, 1); // Remove the item at the specified index
      saveCart();
      updateCartDisplay();
    }
  }


  function addToCart(productImg, productTitle, productPrice, chosenQuantity) {
    const existingItem = cart.find(item => item.productTitle === productTitle);

    if (existingItem) {
      existingItem.quantity += chosenQuantity;
    } else {
      cart.push({ productImg, productTitle, productPrice, quantity: chosenQuantity });
    }

    saveCart();
    updateCartDisplay();
  }

  function loadCart() {
    const cartData = localStorage.getItem("cart");
    if (cartData) {
      cart = JSON.parse(cartData);
    }
  }

  loadCart();
  updateCartDisplay();

  saveButton.addEventListener("click", () => {
    const productImg = localStorage.getItem('productImg1');
    const productTitle = localStorage.getItem('productTitle');
    const productPrice = thePrice.textContent;
    const chosenQuantity = parseInt(Item.textContent.slice(1), 10);


    addToCart(productImg, productTitle, productPrice, chosenQuantity);
  });

  const thePromo = document.querySelector(".thePromo");
  const mark = localStorage.getItem('mark');
  const productImg1 = localStorage.getItem('productImg1');
  const productImg2 = localStorage.getItem('productImg2');
  const productImg3 = localStorage.getItem('productImg3');
  const productImg4 = localStorage.getItem('productImg4');
  const productTitle = localStorage.getItem('productTitle');
  const productStock = localStorage.getItem('productStock');

  if (productImg1) {
    const productImgElement1 = document.createElement("img");
    productImgElement1.className = "productImgElement1";
    productImgElement1.src = productImg1;

    const productImgElement2 = document.createElement("img");
    productImgElement2.className = "productImgElement2";
    productImgElement2.src = productImg2;

    const productImgElement3 = document.createElement("img");
    productImgElement3.className = "productImgElement3";
    productImgElement3.src = productImg3;

    const productImgElement4 = document.createElement("img");
    productImgElement4.className = "productImgElement4";
    productImgElement4.src = productImg4;

    const imgs = document.createElement("div");
    imgs.className = "imgs";

    const productImgs1 = document.createElement("img");
    productImgs1.className = "productImgs1";
    productImgs1.src = productImg1;
    imgs.appendChild(productImgs1);

    const productImgs2 = document.createElement("img");
    productImgs2.className = "productImgs2";
    productImgs2.src = productImg2;
    imgs.appendChild(productImgs2);

    const productImgs3 = document.createElement("img");
    productImgs3.className = "productImgs3";
    productImgs3.src = productImg3;
    imgs.appendChild(productImgs3);

    const productImgs4 = document.createElement("img");
    productImgs4.className = "productImgs4";
    productImgs4.src = productImg4;
    imgs.appendChild(productImgs4);
    HAG.appendChild(imgs);

    const productTitleElement = document.createElement("p");
    productTitleElement.textContent = productTitle;
    productTitleElement.className = "productTitle";
    HAG.appendChild(productTitleElement);

    const productStockElement = document.createElement("p");
    productStockElement.className = "productStock";

    function funcStock(price) {
      productStockElement.textContent = price;
      thePrice.appendChild(productStockElement);
    }

    funcStock(productStock);
    let countUp = 1;
    Item.textContent = "x" + countUp;

    incrementButton.addEventListener("click", () => {
      let currentQuantity = parseInt(Item.textContent.slice(1), 10);
      if (currentQuantity < 10) {
        currentQuantity += 1;
        Item.textContent = `x${currentQuantity}`;
        updateProductPrice();
      }
    });

    decrementButton.addEventListener("click", () => {
      let currentQuantity = parseInt(Item.textContent.slice(1), 10);
      if (currentQuantity > 1) {
        currentQuantity -= 1;
        Item.textContent = `x${currentQuantity}`;
        updateProductPrice();
      }
    });

    if (mark === "1" && productPromo && productPromo !== "0") {
      const productPromoElement = document.createElement("p");
      productPromoElement.textContent = productPromo;
      productPromoElement.className = "productPromo";
      thePromo.appendChild(productPromoElement);
    }
  }
});
