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
    const trackOfferDiv = document.getElementById("track-offer");
    trackOfferDiv.innerHTML=''

    if(discountData){
        discountData.forEach((data)=>{
            let value 
            if(data.discount === "free"){
              value = "FREE SHIPPING";
            }else{
              value = `t${data.discount} OFF`;
            }
            const childDiv = document.createElement('div');
            childDiv.classList.add('discount-container')
            
            childDiv.innerHTML=`
              <span class="discount-text">${value}</span>
              <span class="discount-on-order">Order t${data.order} OFF</span>
            `;

            trackOfferDiv.appendChild(childDiv);
        })
    }


}

document.addEventListener('DOMContentLoaded',()=>{
    DiscountAmount();
})
