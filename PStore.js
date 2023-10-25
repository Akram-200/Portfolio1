const photos = document.querySelector(".photos");
const photos2 = document.querySelector(".photos2");

fetch("https://dummyjson.com/products")
  .then(res => res.json())
  .then(data => {
    const products = data.products;

    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }

    shuffleArray(products);

    const selectedProductsPhotos = products.slice(0, 10);

    selectedProductsPhotos.forEach(product => {
      const cas_stock = document.createElement("a");
      cas_stock.className = "cas_stock";

      const img_stock = document.createElement("img");
      img_stock.className = "img_stock";

      const category_stock = document.createElement("p");
      category_stock.className = "category_stock";

      const price_stock = document.createElement("p");
      price_stock.className = "price_stock";

      img_stock.src = product.images[0];
      category_stock.textContent = product.title;
      price_stock.textContent = "$ " + product.price.toFixed(2);

      const productImg1 = product.thumbnail;
      const productImg2 = product.images[1];
      const productImg3 = product.images[2];
      const productImg4 = product.images[3];

      const productTitle = product.title;
      const productDescription = product.description;
      const productStock = price_stock;
      const productBrand = product.brand;
      const productCategory = product.category;

      cas_stock.href = "product.html";

      cas_stock.appendChild(img_stock);
      cas_stock.appendChild(category_stock);
      cas_stock.appendChild(price_stock);

      const mark = 0;

      cas_stock.addEventListener('click', () => {
        localStorage.setItem('mark', mark);
        localStorage.setItem('productImg1', productImg1);
        localStorage.setItem('productImg2', productImg2);
        localStorage.setItem('productImg3', productImg3);
        localStorage.setItem('productImg4', productImg4);
        localStorage.setItem('productTitle', productTitle);
        localStorage.setItem('productDescription', productDescription);
        localStorage.setItem('productStock', productStock.textContent);
        localStorage.setItem('productBrand', productBrand);
        localStorage.setItem('productCategory', productCategory);
      });

      photos.appendChild(cas_stock);
    });

    shuffleArray(products);

    const selectedProductsPhotos2 = products.slice(0, 10);

    selectedProductsPhotos2.forEach(product => {
      const cas2_stock = document.createElement("a");
      cas2_stock.className = "cas_stock";

      const img2_stock = document.createElement("img");
      img2_stock.className = "img_stock";

      const category2_stock = document.createElement("p");
      category2_stock.className = "category_stock";

      const price2_stock = document.createElement("p");
      price2_stock.className = "price_stock";

      const price2_promo = document.createElement("p");
      price2_promo.className = "price_promo";

      img2_stock.src = product.images[0];
      category2_stock.textContent = product.title;
      price2_promo.textContent = "-" + product.discountPercentage + " %"
      price2_stock.textContent = "$ " + (product.price * (1 - product.discountPercentage / 100)).toFixed(2);

      cas2_stock.href = "product.html";

      const both = document.createElement("div")
      both.className = "both"

      both.appendChild(price2_stock)
      both.appendChild(price2_promo)

      cas2_stock.appendChild(img2_stock);
      cas2_stock.appendChild(category2_stock);
      cas2_stock.appendChild(both);

      const productImg1 = product.thumbnail;
      const productImg2 = product.images[1];
      const productImg3 = product.images[2];
      const productImg4 = product.images[3];

      const productTitle = product.title;
      const productDescription = product.description;
      const productStock = price2_stock;
      const productPromo = price2_promo;
      const productBrand = product.brand;
      const productCategory = product.category;
      
      const mark = 1;

      cas2_stock.addEventListener('click', () => {
        localStorage.setItem('mark', mark);
        localStorage.setItem('productImg1', productImg1);
        localStorage.setItem('productImg2', productImg2);
        localStorage.setItem('productImg3', productImg3);
        localStorage.setItem('productImg4', productImg4);
        localStorage.setItem('productTitle', productTitle);
        localStorage.setItem('productDescription', productDescription);
        localStorage.setItem('productStock', productStock.textContent);
        localStorage.setItem('productPromo', productPromo.textContent);        
        localStorage.setItem('productBrand', productBrand);
        localStorage.setItem('productCategory', productCategory);
      });

      
      photos2.appendChild(cas2_stock);
    });


    let currentI = 0;
    let currentIn = 0;

    function theslides(currentI) {
      photos.style.transform = `translateX(-${currentI * 70}%)`;
    }

    function theslidez(currentIn) {
      photos2.style.transform = `translateX(-${currentIn * 70}%)`;
    }

    document.querySelector(".left-arrow").addEventListener("click", () => {
      currentI = (currentI - 1 + 10) % 10;
      theslides(currentI);
    });

    document.querySelector(".right-arrow").addEventListener("click", () => {
      currentI = (currentI + 1) % 10;
      theslides(currentI);
    });

    document.querySelector(".left-arrows").addEventListener("click", () => {
      currentIn = (currentIn - 1 + 10) % 10;
      theslidez(currentIn);
    });

    document.querySelector(".right-arrows").addEventListener("click", () => {
      currentIn = (currentIn + 1) % 10;
      theslidez(currentIn);
    });
  });


  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach((item) => {
    item.addEventListener('click', () => {
      const answer = item.querySelector('.faq-answer');
      if (answer.style.display === 'block') {
        answer.style.display = 'none';
      } else {
        // Hide all other answers
        faqItems.forEach((otherItem) => {
          if (otherItem !== item) {
            otherItem.querySelector('.faq-answer').style.display = 'none';
          }
        });
        answer.style.display = 'block';
      }
    });


const bigImgs = document.querySelector(".bigImgs");
let currentI = 0;

function theslides(currentI) {
  bigImgs.style.transform = `translateX(-${currentI * 107}%)`;
}

document.querySelector(".left").addEventListener("click", () => {
  currentI = (currentI - 1 + 3) % 3;
  theslides(currentI);
});

document.querySelector(".right").addEventListener("click", () => {
  currentI = (currentI + 1) % 3;
  theslides(currentI);
});

function autoSlide() {
  currentI = (currentI + 1) % 3;
  theslides(currentI);
}

// Set interval for automatic sliding every 2 seconds (2000 milliseconds)
const autoSlideInterval = setInterval(autoSlide, 2000);

// Stop auto-slide when hovering
bigImgs.addEventListener("mouseenter", () => {
  clearInterval(autoSlideInterval);
});

// Resume auto-slide when not hovering
bigImgs.addEventListener("mouseleave", () => {
  autoSlideInterval = setInterval(autoSlide, 2000);
});


  });
  
  
