const temp = document.querySelector("#temp-popular");
const tempDis = document.querySelector("#temp-dis");
const ul = document.querySelector("#pop-list");
const disList = document.querySelector("#dis-list");
// const overlay = document.getElementById("overlay");
const badge = document.getElementById("badge");
const CartItems = document.getElementById("cart-items");
const total = document.getElementById("total");

function loader(state) {
  if (state) {
    overlay.classList.remove("hidden");
  } else {
    setTimeout(() => {
      overlay.classList.add("hidden");
    }, 1000);
  }
}

const updateUI = (products) => {
  products
    .sort((a, b) => {
      return b.rating - a.rating;
    })
    .slice(0, 6)
    .forEach((product) => {
      console.log(product);
      const rating = product.rating;
      let fullstar = Math.round(rating);
      const li = temp.content.cloneNode(true);
      const star = li.querySelectorAll(".star");
      const h3 = li.querySelector("h3");
      const thumbnail = li.querySelector("#thumbnail");
      const infoBtn = li.querySelector("#info-btn");
      const cartBtn = li.querySelector("#cart-btn");
      const cartBtns = li.querySelectorAll(".cart-btn");
      const oldPrice = li.querySelector("#oldPrice");
      const card = li.getElementById("card");
      const newPrice = li.querySelector("#new-price");
      const discount = li.querySelector("#discount");
      for (let i = 0; i < fullstar; i++) {
        star[i].classList.add("filled");
      }

      h3.textContent = product.title;
      oldPrice.textContent = product.price + " $";
      discount.textContent = product.discountPercentage + "% OFF";
      newPrice.textContent =
        (
          product.price -
          (product.price * product.discountPercentage) / 100
        ).toFixed(2) + "$";
      thumbnail.src = product.thumbnail;
      infoBtn.href = `./about.html?productID=${product.id}`;
      ul.appendChild(li);
      card.addEventListener("click", click);
      function click() {
        infoBtn.click();
      }
      cartBtn.addEventListener("click", (e) => {
        e.stopPropagation();
      });
      // cartBtn.addEventListener("click", addToCart);
      cartBtn.addEventListener("click", addToCart);
    });

  products
    .sort((a, b) => {
      return b.discountPercentage - a.discountPercentage;
    })
    .slice(0, 6)
    .forEach((product) => {
      console.log(product);
      const rating = product.rating;
      let fullstar = Math.round(rating);
      const cloneDis = tempDis.content.cloneNode(true);
      console.log(cloneDis);
      const starDis = cloneDis.querySelectorAll(".star-dis");
      const titleDis = cloneDis.querySelector("#dis-title");
      const thumbnailDis = cloneDis.querySelector("#thumbnail-dis");
      const infoBtnDis = cloneDis.querySelector("#info-btn-dis");
      const cartBtnDis = cloneDis.querySelector("#cart-btn-dis");
      const cartBtnsDis = cloneDis.querySelectorAll(".cart-btn-dis");
      const oldPriceDis = cloneDis.querySelector("#oldPrice-dis");
      const cardDis = cloneDis.getElementById("card-dis");
      const newPriceDis = cloneDis.querySelector("#new-price-dis");
      const discountDis = cloneDis.querySelector("#discount-dis");
      for (let i = 0; i < fullstar; i++) {
        starDis[i].classList.add("filled");
      }

      titleDis.textContent = product.title;
      oldPriceDis.textContent = product.price + " $";
      discountDis.textContent = product.discountPercentage + "% OFF";
      newPriceDis.textContent =
        (
          product.price -
          (product.price * product.discountPercentage) / 100
        ).toFixed(2) + "$";
      thumbnailDis.src = product.thumbnail;
      infoBtnDis.href = `./about.html?productID=${product.id}`;
      disList.appendChild(cloneDis);
      cardDis.addEventListener("click", click);
      function click() {
        infoBtnDis.click();
      }
      cartBtnDis.addEventListener("click", (e) => {
        e.stopPropagation();
      });
      // cartBtnDis.addEventListener("click", addToCart);
      cartBtnDis.addEventListener("click", addToCart);
    });
};
let counter = 0;
function addToCart(event) {
  counter++;
  badge.textContent = counter;
  CartItems.textContent = counter + " Items";
}

// loader
