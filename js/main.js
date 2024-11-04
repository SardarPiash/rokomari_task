// global variable
let totalParchaseAmount = 700;
let trackOfferDiv;
let selectAllDiv;
let orderListDiv;

// discount on offer track
// data
const discountData = [
  { discount: 10, order: 800 },
  { discount: 20, order: 1200 },
  { discount: 30, order: 1600 },
  { discount: "free", order: 2000 },
];

const orderListData = [
  {
    title: "গল্পে গল্পে আল কুরআন সিরিজ",
    author: "মুহাম্মদ শামীমুল বাশির",
    availability: 4,
    quantity: 1,
    original_price: 200,
    discounted_price: 180,
    selected: true,
  },
  {
    title: "গল্পে গল্পে আল কুরআন সিরিজ",
    author: "মুহাম্মদ শামীমুল বাশির",
    availability: 3,
    quantity: 2,
    original_price: 400,
    discounted_price: 360,
    selected: true,
  },
];

// function to print discount data
function DiscountAmount() {
  trackOfferDiv = document.getElementById("track-offer");
  trackOfferDiv.innerHTML = `<div class="discount-container">
    <span class="discount-text">Your total</span>
    <span class="discount-on-order">ট${totalParchaseAmount}</span>
    </div>`;

  if (discountData) {
    discountData.forEach((data) => {
      let value;
      if (data.discount === "free") {
        value = "FREE SHIPPING";
      } else {
        value = `ট${data.discount} OFF`;
      }
      const childDiv = document.createElement("div");
      childDiv.classList.add("discount-container");

      childDiv.innerHTML = `
              <span class="discount-text">${value}</span>
              <span class="discount-on-order">Order ট${data.order}</span>
            `;

      trackOfferDiv.appendChild(childDiv);
    });
  }
}

// Select all container
// function to handle select all container
function SelectAll() {
  selectAllDiv = document.getElementById("select-all-container");
  selectAllDiv.innerHTML = "";
  const selectDivElements = document.createElement("div");
  selectDivElements.classList.add("select-elements");

  selectDivElements.innerHTML = `
    <div class="select-checkbox">
    <span><input type="checkbox" name="checkbox" value="" /></span>
    <span>SelectAll(2 items)</span>
    </div>
    <div class="select-total-amount"> 
    <span>Your Total:<span class="select-discount-text">ট600</span>ট700</span>
    </div>
    `;
  selectAllDiv.appendChild(selectDivElements);
}

// order list container
function OrderList() {
  let orderListContent = "";
  orderListDiv = document.getElementById("order-list-container");
  orderListDiv.innerHTML = "";
  const orderConfimDiv = document.createElement("div");
  orderConfimDiv.classList.add('order-confirm-div');
  orderConfimDiv.innerHTML = `<span><button class="order-button-gift">Order as a Gift</button></span>
  <span><button class="order-button-shipping">Go to Shipping Page</button></span>
  `;

  const orderListElement = document.createElement("div");
  //orderListElement.classList.add('');

  orderListData.forEach((data, index) => {
    orderListContent += `
    <div>
        <div class="order-list-elements">
            <div class="order-list-info">
            <div class="order-checkbox"><input type="checkbox" name="checkbox" value="" /></div> 
                <div class="product-img"><img class="order-product-img" src="./assets/book.jpg" /></div> 
                <div class="product-info">
                <div class="product-data">
                    <span>${data.title}</span>
                    <span>${data.author}</span>
                    <span>Only ${data.availability} Copies Available</span>
                    </div>
                    <div class="product-info-action">
                        <span>
                            <button>delete</button>
                        </span>
                        <span>
                            <button>wishlist</button>
                        </span>
                    </div>
                </div>
            </div>
            <div class="order-quantity-container">
              <div class="order-quantity-elements">
                  <div class="order-quantity-block">-</div>
                  <div class="order-quantity-number">1</div>
                  <div class="order-quantity-block">+</div>
              </div>
            </div>
            <div class="price-container">
                <span class="price-original">ট${data.original_price}</span>
                <span class="price-discount">ট${data.discounted_price}</span>
            </div>
        </div>
        <div class="border"></div>
        </div>
    `;
  });
  orderListElement.innerHTML = orderListContent;
  orderListDiv.appendChild(orderListElement);
  orderListDiv.appendChild(orderConfimDiv);
}

document.addEventListener("DOMContentLoaded", () => {
  DiscountAmount();
  SelectAll();
  OrderList();
});
