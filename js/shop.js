const shop = [
  {
    img:"img/offer/offer_1.png",
    type: "Mouse",
    name:"XPG INFAREX M10",
    review:"68",
    price:"$18.00",
    price2:"",
    info:"",
    infoClass:"",
    star1:"fa-solid fa-star",
    star2:"fa-solid fa-star",
    star3:"fa-solid fa-star",
  },
  {
    img:"img/offer/offer_2.png",
    type: "Headphones",
    name:"Logitech G PRO X",
    review:"50",
    price:"$180.00 ",
    price2:"%200.00",
    info:"-20%",
    infoClass:"red",
    star1:"fa-solid fa-star",
    star2:"fa-solid fa-star",
    star3:"fa-regular fa-star",
  },
  {
    img:"img/offer/offer_3.png",
    type: "Memory",
    name:"XPG D60G RGB 16GB",
    review:"36",
    price:"$60.00",
    price2:"",
    info:"",
    infoClass:"",
    star1:"fa-solid fa-star",
    star2:"fa-solid fa-star",
    star3:"fa-solid fa-star",
  },
  {
    img:"img/offer/offer_4.png",
    type: "Mother Board",
    name:"Asus Rog Strix Z790",
    review:"12",
    price:"$350.00",
    price2:"",
    info:"",
    infoClass:"",
    star1:"fa-solid fa-star",
    star2:"fa-regular fa-star",
    star3:"fa-regular fa-star",
  },
  {
    img:"img/offer/offer_5.png",
    type: "Procesor",
    name:"Intel i9-12900KS",
    review:"3",
    price:"$799.00",
    price2:"",
    info:"",
    infoClass:"",
    star1:"fa-solid fa-star",
    star2:"fa-regular fa-star",
    star3:"fa-regular fa-star",
  },
  {
    img:"img/offer/offer_6.png",
    type: "Monitor",
    name:"Msi G244F24 170HZ",
    review:"23",
    price:"$205.00",
    price2:"",
    info:"",
    infoClass:"",
    star1:"fa-solid fa-star",
    star2:"fa-solid fa-star",
    star3:"fa-regular fa-star",
  },
  {
    img:"img/Products/product-1.png",
    type: "Watches",
    name:"Xiaomi Mi Band 5",
    review:"40",
    price:"$199.00",
    price2:"",
    info:"",
    infoClass:"",
    star1:"fa-solid fa-star",
    star2:"fa-regular fa-star",
    star3:"fa-regular fa-star",
  },
  {
    img:"img/Products/product-2.png",
    type: "Speaker",
    name:"Big Power Sound Speaker",
    review:"50",
    price:"$275.00 ",
    price2:"$300.00",
    info:"-25%",
    infoClass:"red",
    star1:"fa-solid fa-star",
    star2:"fa-solid fa-star-half-stroke",
    star3:"fa-regular fa-star",
  },
  {
    img:"img/Products/product-3.png",
    type: "Camera",
    name:"WiFi Security Camera",
    review:"36",
    price:"$399.00",
    price2:"",
    info:"",
    infoClass:"",
    star1:"fa-solid fa-star",
    star2:"fa-regular fa-star",
    star3:"fa-regular fa-star",
  },
  {
    img:"img/Products/product-4.png",
    type: "Phones",
    name:"iphone 6x plus",
    review:"67",
    price:"$400.00",
    price2:"",
    info:"new",
    infoClass:"blue",
    star1:"fa-solid fa-star",
    star2:"fa-solid fa-star",
    star3:"fa-regular fa-star",
  },
  {
    img:"img/Products/product-6.png",
    type: "Speaker",
    name:"Mini Bluetooth Speaker",
    review:"22",
    price:"$70.00",
    price2:"",
    info:"",
    infoClass:"",
    star1:"fa-solid fa-star",
    star2:"fa-solid fa-star-half-stroke",
    star3:"fa-regular fa-star",
  },
  {
    img:"img/Products/product-5.png",
    type: "Headphones",
    name:"Wireless Headphones",
    review:"27",
    price:"$350.00",
    price2:"",
    info:"",
    infoClass:"",
    star1:"fa-solid fa-star",
    star2:"fa-regular fa-star",
    star3:"fa-regular fa-star",
  },
  {
    img:"img/Products/product-7.png",
    type: "Headphones",
    name:"PX7 Wireless Headphones",
    review:"86",
    price:"$100.00 ",
    price2:"$300.00",
    info:"-50%",
    infoClass:"red",
    star1:"fa-solid fa-star",
    star2:"fa-regular fa-star",
    star3:"fa-regular fa-star",
  },
  {
    img:"img/Products/product-8.png",
    type: "Laptop",
    name:"Apple MacBook Air",
    review:"14",
    price:"$899.00",
    price2:"",
    info:"",
    infoClass:"",
    star1:"fa-solid fa-star",
    star2:"fa-solid fa-star",
    star3:" fa-regular fa-star",
  }
  ];
  
  let shopCards = document.querySelector(".shop .shop-all .cards")
  function rednderShop() {
  let shopItems = shop.map((item) => {
    
    return`
      <div class="main-card">
        <div class="image">
          <img src="${item.img}" alt="">
          <a class="main-buttom" href="">
            <i class="bi bi-cart2"></i>
            Add To Cart
          </a>
          <span class="${item.infoClass}">${item.info}</span>
        </div>
        <div class="holder">
          <p>${item.type}</p>
          <h3>${item.name}</h3>
          <div class="review">
            <div class="stars">
              <i class="${item.star1}"></i>
              <i class="${item.star1}"></i>
              <i class="${item.star1}"></i>
              <i class="${item.star2}"></i>
              <i class="${item.star3}"></i>
            </div>
            <p>${item.review} Review</p>
          </div>
          <p class="ptext">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus nesciunt illo temporibus dolor. Labore ducimus, quia modi, impedit dolore voluptatem ad ipsum hic eos in officiis natus et enim. Distinctio?</p>
          <h4>${item.price} <p>${item.price2}</p></h4>
        </div>
      </div>
    `
    }).join("") 
    shopCards.innerHTML = shopItems
    };
  rednderShop();



let ptnUl = document.querySelector(".ptn-ul")
function ulActive () {
  ptnUl.classList.toggle("active")
}

let gridContainer = document.querySelector(".shop .shop-all .cards")
let gridCard = document.querySelectorAll(".shop .shop-all .main-card")
let gridImage = document.querySelectorAll(".shop .main-card .image")
let gridIcons = document.querySelectorAll(".shop-all .grids i")

gridIcons[0].classList.add("active")

gridIcons[0].addEventListener("click", () => {
  gridIcons[0].classList.add("active")
  gridIcons[1].classList.remove("active")
  gridContainer.classList.remove("list-system")
  gridCard.forEach((card) => {
    card.classList.remove("list-system")
  })
  gridImage.forEach((img) => {
    img.classList.remove("list-system")
  })
})
gridIcons[1].addEventListener("click", () => {
  gridIcons[1].classList.add("active")
  gridIcons[0].classList.remove("active")
  gridContainer.classList.add("list-system")
  gridCard.forEach((card) => {
    card.classList.add("list-system")
  })
  gridImage.forEach((img) => {
    img.classList.add("list-system")
  })
})







