document.addEventListener("DOMContentLoaded", function () {
  const search = document.querySelector(".search");
  const product = document.querySelector(".product");

  let productsData; // Store the original products data

  fetch("https://dummyjson.com/products")
    .then(res => res.json())
    .then(data => {
      productsData = data.products; // Store the original products data

      // Display all products initially
      displayProducts(productsData);

      // Add an input event listener to the search field
      search.addEventListener("input", function () {
        const searchTerm = search.value.toLowerCase();
        const filteredProducts = productsData.filter(product => {
          // Check if the product title contains the search term
          return product.title.toLowerCase().includes(searchTerm);
        });

        // Display the filtered products
        displayProducts(filteredProducts);
      });
    });

  function displayProducts(products) {
    // Clear the existing products
    product.innerHTML = '';

    products.forEach((element) => {
      const stock = document.createElement("div");
      stock.className = "stock";

      const image = document.createElement("img");
      image.className = "image";
      image.src = element.thumbnail;

      const title = document.createElement("h1");
      title.className = "title";
      title.textContent = element.title;

      const price = document.createElement("p");
      price.className = "price";
      price.textContent = "$ " + element.price;

      stock.appendChild(image);
      stock.appendChild(title);
      stock.appendChild(price);

      // Highlight the matching part of the title
      if (search.value) {
        const matchIndex = element.title.toLowerCase().indexOf(search.value.toLowerCase());
        if (matchIndex !== -1) {
          const matchedPart = element.title.substr(matchIndex, search.value.length);
          title.innerHTML = element.title.replace(
            new RegExp(matchedPart, 'i'),
            '<span style="color: blue;">' + matchedPart + '</span>'
          );
        }
      }

      product.appendChild(stock);
    });
  }
});
