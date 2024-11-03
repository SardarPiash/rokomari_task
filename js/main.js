// global variable 
let totalParchaseAmount = 700
let trackOfferDiv
let selectAllDiv


// discount on offer track
// data
const discountData = [
    {"discount":10,"order":800},
    {"discount":20,"order":1200},
    {"discount":30,"order":1600},
    {"discount":"free","order":2000}
]

// function to print discount data
function DiscountAmount(){
    trackOfferDiv = document.getElementById("track-offer");
    trackOfferDiv.innerHTML=`<div class="discount-container">
    <span class="discount-text">Your total</span>
    <span class="discount-on-order">ট${totalParchaseAmount}</span>
    </div>`;

    if(discountData){
        
        discountData.forEach((data)=>{
            let value 
            if(data.discount === "free"){
              value = "FREE SHIPPING";
            }else{
              value = `ট${data.discount} OFF`;
            }
            const childDiv = document.createElement('div');
            childDiv.classList.add('discount-container')
            
            childDiv.innerHTML=`
              <span class="discount-text">${value}</span>
              <span class="discount-on-order">Order ট${data.order}</span>
            `;

            trackOfferDiv.appendChild(childDiv);
        })
    }


}


// Select all container
// function to handle select all container
function SelectAll(){
    selectAllDiv = document.getElementById("select-all-container");
    selectAllDiv.innerHTML='';
    const selectDivElements = document.createElement('div');
    selectDivElements.classList.add('select-elements');
    
    selectDivElements.innerHTML=`
    <div class="select-checkbox">
    <span><input type="checkbox" name="checkbox" value="" /></span>
    <span>SelectAll(2 items)</span>
    </div>
    <div class="select-total-amount"> 
    <span>Your Total:<span class="select-discount-text">tk600</span>tk700</span>
    </div>
    `;
    selectAllDiv.appendChild(selectDivElements);
}













document.addEventListener('DOMContentLoaded',()=>{
    DiscountAmount();
    SelectAll();
})
