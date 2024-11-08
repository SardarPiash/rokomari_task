// global variable
let totalParchaseAmount;
let trackOfferDiv;
let selectAllDiv;
let orderListDiv;
let productQuantity;
let tempDisPrice = 0;
let tempOriPrice = 0;
let selectAllState = true;
let discountOffer = 0;
let shippingCharge = 70;
let discountOnShippingCharge = 0;

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
    original_price: 200,
    discounted_price: 180,
    selected: true,
  },
  {
    title: "গল্পে গল্পে আল কুরআন সিরিজ",
    author: "মুহাম্মদ শামীমুল বাশির",
    availability: 3,
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
    <span class="discount-on-order" id="discount-on-order">ট${totalParchaseAmount}</span>
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
    <span><input id="select-all-input" type="checkbox" name="checkbox" value="" onchange="handleSelectAll()" /></span>
    <span>SelectAll(2 items)</span>
    </div>
    <div class="select-total-amount"> 
            <span class="total-text">Your Total: </span>
            <span class="select-discount-text">
            <span class="original-price">ট 0</span>
            <span class="discounted-price"> ট 0</span>
             </span>
</div>

    `;

  selectAllDiv.appendChild(selectDivElements);
  let checkedb = document.getElementById("select-all-input");
  checkedb.checked = selectAllState;
}

// order list container
function OrderList() {
  let orderListContent = "";
  orderListDiv = document.getElementById("order-list-container");
  orderListDiv.innerHTML = "";
  const orderConfimDiv = document.createElement("div");
  orderConfimDiv.classList.add("order-confirm-div");
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
            <div class="order-checkbox"><input data-index=${index} type="checkbox" class="product-checkbox" name="checkbox" value="" onchange="handleBookSlection(${index})"/></div> 
                <div class="product-img"><img class="order-product-img" src="./assets/book.jpg" /></div> 
                <div class="product-info">
                <div class="product-data">
                    <span>${data.title}</span>
                    <span class="author-name-text">${data.author}</span>
                    <span class="available-text">*Only <span class="availability">${data.availability}</span> Copies Available</span>
                    </div>
                    <div class="product-info-action">
                        <div>
                            <button class="action-button">
                            <img src="./assets/delete.png" class="dlt-icon" />
                            <span style="margin-top: 2px;">Delete</span>
                            </button>
                        </div>
                        <div>
                            <button class="action-button">
                             <img src="./assets/love.png" class="love-icon" />
                             <span style="margin-top: 2px;">Wishlist</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="order-quantity-container">
              <div class="order-quantity-elements">
                  <div class="order-quantity-block">
                  <button class="increment-button" onclick="handleProductQuantity(${index},false)">-</button></div>
                  <div class="order-quantity-number">1</div>
                  <div class="order-quantity-block">
                  <button class="increment-button" onclick="handleProductQuantity(${index},true)">+</button></div>
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
  ProductInputCheckbox();
}

// shipping address function
const addressData = {
  area: "Mirpur-1",
  name: "Abu Shaleh Md. Kaium",
  place: "Home",
  phone: "01627754406",
  fullAddress:
    "Flat#157/2/A, Ahamed Nagar, Paikepara, Mirpur-1, Dhaka, Bangladesh ",
};
function CustomerAddress(addressData) {
  const customerAddressDiv = document.getElementById("customer-address");
  customerAddressDiv.innerHTML = "";
  const address = document.createElement("div");
  address.innerHTML = `
        <div class="customer-address-container">
        <div class="customer-address">
            <div class="address-location">
               <span class="circle-1">
               <span class="circle-2"></span>
               </span>
               <span><b>${addressData.area}</b> (${addressData.place})</span>
            </div>
            <div class="change-location">
            <button class="change-address-button" onclick="handleOpenModal()">
               <div class="change-address-elements">
               <div class="s">
                  <div class="c">
                  <div class="g">
                    <div class="f">
                        <div class="m"> 
                        </div>
                    </div>
                  </div>
                  </div>
               </div>
               <div>Change Address</div>
            </div>
        </div>
            </button>
            </div>
        <div class="customer-name">
           <span>Name:${addressData.name}</span>
           <span>Phone:${addressData.phone}</span>
        </div>
        <div class="customer-fulladdress">
           <span>${addressData.fullAddress}</span>
        </div>
        </div>
        `;

  customerAddressDiv.appendChild(address);
}

// handle select all function
function handleSelectAll() {
  selectAllState = !selectAllState;
  ProductInputCheckbox();
  handleYourTotal();

  // update dom of prgress bar in total
  handleBookSlection();
}

// checked uncheck checking
function ProductInputCheckbox() {
  const checkbox = document.querySelectorAll(".product-checkbox");
  checkbox.forEach((check) => {
    if (selectAllState) {
      check.checked = true;
    } else {
      check.checked = false;
    }
  });
}

// handleProductQuantity
function handleProductQuantity(index, value) {
  const products = document.querySelectorAll(".order-quantity-number");
  const product = products[index];
  productQuantity = parseInt(product.innerHTML, 10);

  const productsPrice = document.querySelectorAll(".price-container");
  const availability = document.querySelectorAll(".availability");
  const available = availability[index];
  const productPrice = productsPrice[index];
  tempDisPrice = orderListData[index].discounted_price;
  tempOriPrice = orderListData[index].original_price;
  let bookAvailabe = orderListData[index].availability;
  // book quantity control
  if (value) {
    if (bookAvailabe > 0) {
      productQuantity = productQuantity + 1;
      bookAvailabe = bookAvailabe - 1;
    }
  } else {
    if (productQuantity > 1) {
      productQuantity = productQuantity - 1;
      bookAvailabe = bookAvailabe + 1;
    }
  }
  orderListData[index].availability = bookAvailabe;
  // price calculation
  tempDisPrice = tempDisPrice * productQuantity;
  tempOriPrice = tempOriPrice * productQuantity;
  const newPrice = `<span class="price-original">ট${tempOriPrice}</span>
                    <span class="price-discount">ট${tempDisPrice}</span>
                    `;

  product.innerHTML = productQuantity;
  productPrice.innerHTML = newPrice;
  available.innerHTML = bookAvailabe;
  handleYourTotal();
  handleBookSlection();
}

// handle book selection chekbox
function handleBookSlection() {
  handleYourTotal();
  progressBarYourTotal();
}

// handle your total ammount
function handleYourTotal() {
  let totalOriginalPrice = 0;
  let totalDiscountPrice = 0;
  let flag = [];

  const productCheckboxDiv = document.querySelectorAll(".product-checkbox");
  const productQuantities = document.querySelectorAll(".order-quantity-number");

  productCheckboxDiv.forEach((checkbox, index) => {
    flag.push(checkbox.checked);
    if (checkbox.checked) {
      let productQuantity = parseInt(productQuantities[index].innerHTML, 10);

      const originalPrice =
        orderListData[index].original_price * productQuantity;
      const discountedPrice =
        orderListData[index].discounted_price * productQuantity;

      // Add to total
      totalOriginalPrice = totalOriginalPrice + originalPrice;
      totalDiscountPrice = totalDiscountPrice + discountedPrice;
    }
  });

  //handle select checked
  for (let i = 0; i < flag.length; i++) {
    console.log(flag[i]);
    if (flag[i]) {
      selectAllState = true;
      let checkedb = document.getElementById("select-all-input");
      checkedb.checked = selectAllState;
    } else {
      selectAllState = false;
      let checkedb = document.getElementById("select-all-input");
      checkedb.checked = selectAllState;
      break;
    }
  }

  totalParchaseAmount = totalDiscountPrice;

  document.querySelector(
    ".select-total-amount .select-discount-text"
  ).innerHTML = `
  <span class="discounted-price"> ট${totalOriginalPrice}</span>
  <span class="original-price">ট${totalDiscountPrice}</span>
  `;
  // call check sumury to update based on action
  checkSummary();
  handleProgressBar();
  handleProgressBar();
}

// function for updating progress bar total ammount
function progressBarYourTotal() {
  // update dom of prgress bar in total
  const totaldiv = document.getElementById("discount-on-order");
  totaldiv.innerHTML = `ট${totalParchaseAmount}`;
}

//check sumury handle function
function checkSummary() {
  const priceDiv = document.querySelectorAll(".original-price");
  let price = parseInt(priceDiv[0].innerHTML.replace(/[^0-9]/g, ""));

  price = price;
  let shipment = shippingCharge - discountOffer;

  let totalPrice = price + shipment;

  const subtotal = document.querySelectorAll(".checkout-details-container")[0];
  const shipping = document.querySelectorAll(".checkout-details-container")[1];
  const total = document.querySelectorAll(".checkout-details-container")[2];

  subtotal.innerHTML = `
   <span>Subtotal</span>
   <span>ট ${price}</span>
   `;

  if (shipment === 0) {
    shipping.innerHTML = `
   <span>Shipping</span>
   <span>Free</span>
   `;
  } else {
    shipping.innerHTML = `
   <span>Shipping</span>
   <span>ট ${shipment}</span>
   `;
  }

  total.innerHTML = `
   <span>Total</span>
   <span>ট ${totalPrice}</span>
   `;
}

//open modal
function handleOpenModal() {
  const modal = document.getElementById("modal-container");
  modal.style.display = "flex"; 
  setTimeout(() => {
    modal.classList.add("show-modal"); 
  }, 10); 

  // Set values to the input fields
  document.querySelector("input[name='name']").value = addressData.name;
  document.querySelector("input[name='phoneNumber']").value = addressData.phone;
  document.querySelector("input[name='area']").value = addressData.area;
  document.querySelector(
    "input[name='deliveryPlace'][value='" + addressData.place + "']"
  ).checked = true;
  document.querySelector("input[name='fullAddress']").value =
    addressData.fullAddress;
}

// Close modal with animation
function handleCloseModal() {
  const modal = document.getElementById("modal-container");
  modal.classList.remove("show-modal"); 
  setTimeout(() => {
    modal.style.display = "none"; 
  }, 300); 
}



document.addEventListener("DOMContentLoaded", () => {
  SelectAll();
  OrderList();
  CustomerAddress(addressData);
  handleYourTotal();
  DiscountAmount();
  checkSummary();
  handleProgressBar();

  // add event listener for closing the modal
  document
    .getElementById("modal-container")
    .addEventListener("click", function (event) {
      const modalContent = document.getElementById("modal");
      if (event.target === this) {
        handleCloseModal();
      }
    });

  // add event listener to the form
  document
    .querySelector("form")
    .addEventListener("submit", handleFormValidation);
});

// form field validation and submit data
function handleFormValidation(e) {
  e.preventDefault();
  let flag = false;
  let name = document.getElementById("name").value.trim();
  let phoneNumber = document.getElementById("phoneNumber").value.trim();
  let area = document.getElementById("area").value.trim();
  let deliveryPlace = document.querySelector(
    "input[name='deliveryPlace']:checked"
  )?.value;
  let fullAddress = document.getElementById("fullAddress").value.trim();

  console.log(name, phoneNumber, area, fullAddress, deliveryPlace);

  if (name == "") {
    document.getElementById("name-error").innerHTML = "Enter your name please!";
    flag = false;
    return;
  } else {
    document.getElementById("name-error").innerHTML = "";
    flag = true;
  }

  if (phoneNumber == "") {
    document.getElementById("phoneNumber-error").innerHTML =
      "Enter your phone number please!";
    flag = false;
    return;
  } else {
    document.getElementById("phoneNumber-error").innerHTML = "";
    flag = true;
  }

  if (area == "") {
    document.getElementById("area-error").innerHTML = "Enter your area please!";
    flag = false;
    return;
  } else {
    document.getElementById("area-error").innerHTML = "";
    flag = true;
  }

  if (deliveryPlace === undefined) {
    document.getElementById("deliveryPlace-error").innerHTML =
      "Enter your delivery Place please!";
    flag = false;
    return;
  } else {
    document.getElementById("deliveryPlace-error").innerHTML = "";
    flag = true;
  }

  if (fullAddress == "") {
    document.getElementById("fullAddress-error").innerHTML =
      "Enter your full address please!";
    flag = false;
    return;
  } else {
    document.getElementById("fullAddress-error").innerHTML = "";
    flag = true;
  }

  if (flag) {
    addressData.name = name;
    addressData.phone = phoneNumber;
    addressData.fullAddress = fullAddress;
    addressData.area = area;
    addressData.place = deliveryPlace;

    console.log(addressData);
    CustomerAddress(addressData);
    handleCloseModal();
  }
}

// function for handaling progressbar
function progressBardraw(value, progressWidth) {
  if (progressWidth >= 100) {
    progressWidth = 100;
  }

  const progress = document.getElementById(`${value}`);
  if (progress) {
    progress.style.width = `${progressWidth}%`;
    console.log(progressWidth);
  }

}

// handleProgressBar
function handleProgressBar() {
  const p = document.querySelectorAll(".progress-bar-front");
  const circleClr = document.querySelectorAll(".circle-border")
  p.forEach((data) => {
    data.style.width = "0%";
  });
  circleClr.forEach((data) => {
    data.style.borderColor = "rgb(151, 152, 152)";
  });
  if (totalParchaseAmount <= 800) {
    progressBardraw("progress1-front", totalParchaseAmount * (1 / 8));
  } else if (totalParchaseAmount > 800 && totalParchaseAmount <= 1200) {
    progressBardraw("progress1-front", 100);
    progressBardraw("progress2-front", (totalParchaseAmount - 800) * (1 / 4));
  } else if (totalParchaseAmount > 1200 && totalParchaseAmount <= 1600) {
    progressBardraw("progress1-front", 100);
    progressBardraw("progress2-front", 100);
    progressBardraw("progress3-front", (totalParchaseAmount - 1200) * (1 / 4));
  } else if (totalParchaseAmount > 1600) {
    progressBardraw("progress1-front", 100);
    progressBardraw("progress2-front", 100);
    progressBardraw("progress3-front", 100);
    progressBardraw("progress4-front", (totalParchaseAmount - 1600) * (1 / 4));
  }

  // set discount
  if (totalParchaseAmount >= 800 && totalParchaseAmount < 1200) {
    discountOffer = 10;
    handleCircleColor("circle2");
  } else if (totalParchaseAmount >= 1200 && totalParchaseAmount < 1600) {
    discountOffer = 20;
    handleCircleColor("circle2");
    handleCircleColor("circle3");
  } else if (totalParchaseAmount >= 1600 && totalParchaseAmount < 2000) {
    discountOffer = 30;
    handleCircleColor("circle2");
    handleCircleColor("circle3");
    handleCircleColor("circle4");
  } else if (totalParchaseAmount >= 2000) {
    discountOffer = 70;
    handleCircleColor("circle2");
    handleCircleColor("circle3");
    handleCircleColor("circle4");
    handleCircleColor("circle5");
  }

  // call checksumy for dom update
  checkSummary();
}

// circle color handle
function handleCircleColor(value){
  const progress = document.getElementById(`${value}`);
  if(progress){
    progress.style.borderColor = "rgb(49, 162, 162)";
  }
}
