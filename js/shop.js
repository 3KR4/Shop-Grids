let shopCards = document.querySelector(".shop .shop-all .cards");
function rednderShop() {
  let shopItems = allProducts
    .map((x) => {
      let {id, value, type, name, review, price, price2, star1, star2, star3, img, img1, img2, img3, img4, img5} = x;
      return `
      <div id="product-id-${id}" data-category=""  data-price="" class="main-card">
        <div class="image">
          <img src="${img}" alt="">
          <button onclick="increment(${id})" class="main-buttom">
            <i class="bi bi-cart2"></i>
            Add To Cart
          </button>
        </div>
        <div class="holder">
          <strong>${value}</strong>
          <p>${type}</p>
          <a href="product.html"><h3>${name}</h3></a>
          <div class="review">
            <div class="stars">
              <i class="${star1}"></i>
              <i class="${star1}"></i>
              <i class="${star1}"></i>
              <i class="${star2}"></i>
              <i class="${star3}"></i>
            </div>
            <p>${review} Review</p>
          </div>
          <p class="ptext">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus nesciunt illo temporibus dolor. Labore ducimus, quia modi, impedit dolore voluptatem ad ipsum hic eos in officiis natus et enim. Distinctio?</p>
        </div>
        <h4>${price},00</h4>
      </div>
    `;
    })
    .join("");
  shopCards.innerHTML = shopItems;
}
rednderShop();



















let gridImage = document.querySelectorAll(".shop .main-card .image");
let gridcards = document.querySelectorAll(".shop .main-card")
let select = document.querySelectorAll(".shop .shop-all select")
let gridIcons = document.querySelectorAll(".shop-all .grids i");
let ptnUl = document.querySelector(".ptn-ul");
let ar = [];

function ulActive() {
  ptnUl.classList.toggle("active");
}

gridIcons[0].classList.add("active");

gridIcons[0].addEventListener("click", () => {
  gridIcons[0].classList.add("active");
  gridIcons[1].classList.remove("active");
  shopCards.classList.remove("list-system");
  gridcards.forEach((card) => {
    card.classList.remove("list-system");
  });
  gridImage.forEach((img) => {
    img.classList.remove("list-system");
  });
});
gridIcons[1].addEventListener("click", () => {
  gridIcons[1].classList.add("active");
  gridIcons[0].classList.remove("active");
  shopCards.classList.add("list-system");
  gridcards.forEach((card) => {
    card.classList.add("list-system");
  });
  gridImage.forEach((img) => {
    img.classList.add("list-system");
  });
})





let indicator = document.querySelectorAll(".indicator li")
let indicatorIco = document.querySelectorAll(".indicator i")

for (i of gridcards) {
  const value = i.querySelector("strong")
  const x = value.textContent
  i.setAttribute("data-category", x)
}

for (let i = 0; i< indicator.length; i++) {
  indicator[i].onclick = function() {
    for(let x = 0; x < indicator.length; x++) {
      indicator[x].classList.remove("active")
      
    }
    this.classList.add("active")

    const displayItems = this.getAttribute('data-filter');

    for (let z = 0; z < gridcards.length; z++) {

        gridcards[z].style.display = "none";

      if (gridcards[z].getAttribute("data-category") == displayItems || displayItems == "All") {
          gridcards[z].style.cssText = "display: flex; flex-direction: column";
      }
    }
  };
}












  const rangeInput = document.querySelectorAll(".range-input input"),
  priceInput = document.querySelectorAll(".price-input input"),
  range = document.querySelector(".slider .progress");
  let priceGap = 1000;
  
  priceInput.forEach(input =>{
      input.addEventListener("input", e =>{
          let minPrice = parseInt(priceInput[0].value),
          maxPrice = parseInt(priceInput[1].value);
          
          if((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max){
              if(e.target.className === "input-min"){
                  rangeInput[0].value = minPrice;
                  range.style.left = ((minPrice / rangeInput[0].max) * 100) + "%";
              }else{
                  rangeInput[1].value = maxPrice;
                  range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
              }
          }
      });
  });
  
  rangeInput.forEach(input =>{
      input.addEventListener("input", e =>{
          let minVal = parseInt(rangeInput[0].value),
          maxVal = parseInt(rangeInput[1].value);
  
          if((maxVal - minVal) < priceGap){
              if(e.target.className === "range-min"){
                  rangeInput[0].value = maxVal - priceGap
              }else{
                  rangeInput[1].value = minVal + priceGap;
              }
          }else{
              priceInput[0].value = minVal;
              priceInput[1].value = maxVal;
              range.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
              range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
          }
      });
  });



  