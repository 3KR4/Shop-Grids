//! sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss categories
const categories = [
  {
    mainName: "Mother Board",
    info1:"Micro Atx",
    info2:"Full Atx",
    info3:"Extended Atx",
    info4:"",
    img:"img/categories/mother.png"
  },
  {
    mainName: "Graphic Cards",
    info1:"Nvidia",
    info2:"Amd",
    info3:"Intel",
    info4:"",
    img:"img/categories/gpu.png"
  },
  {
    mainName: "Memory",
    info1:"2800 MHz",
    info2:"3200 MHz",
    info3:"3600 MHz",
    info4:"5000 MHz",
    img:"img/categories/ram.png"
  },
  {
    mainName: "Storage",
    info1:"Internal",
    info2:"External",
    info3:"Ssd",
    info4:"m.2",
    img:"img/categories/hdd.png"
  },
  {
    mainName: "Procesor",
    info1:"Intel",
    info2:"Ryzen",
    info3:"Apu",
    info4:"",
    img:"img/categories/cpu.png"
  },
  {
    mainName: "Power Suplay",
    info1:"Whiht",
    info2:"Bronze",
    info3:"Gold",
    info4:"platinom",
    img:"img/categories/power.png"
  },
  {
    mainName: "Computer Case",
    info1:"Mini Atx",
    info2:"Atx",
    info3:"Tower",
    info4:"Full Tower",
    img:"img/categories/case1.png"
  },
  {
    mainName: "Accesories",
    info1:"Mouse",
    info2:"Keyboard",
    info3:"Headphone",
    info4:"Mouse Pad",
    img:"img/categories/ps controlar.png"
  },
  {
    mainName: "Smart Phone",
    info1:"Apple",
    info2:"Samsung",
    info3:"hawawi",
    info4:"oppo",
    img:"img/categories/phone.png"
  }
  ];
  let categoriesCards = document.querySelector(".categories .container")
  
  function rednderCategories() {
  let categoriesItems = categories.map((item) => {
  
    return`
      <div class="card">
        <div>
          <h4>${item.mainName}</h4>
          <ul>
            <li><a href="#">${item.info1}</a></li>
            <li><a href="">${item.info2}</a></li>
            <li><a href="">${item.info3}</li>
            <li><a href="">${item.info4}</li>
            <li><a href="">See All</a></li>
          </ul>
        </div>
        <img src="${item.img}" alt="">
      </div>
    `
  }).join("") 
  categoriesCards.innerHTML = categoriesItems
  };
rednderCategories();

//! sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss Product

const Product = [
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

let productCards = document.querySelector(".Product .container")

function rednderProduct() {
let productItems = Product.map((item) => {

  return`
    <div class="main-card">
      <div class="image">
        <img src="${item.img}" alt="">
        <button onclick="calculation()" class="main-buttom">
          <i class="bi bi-cart2"></i>
          Add To Cart
        </button>
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
        <h4>${item.price} <p>${item.price2}</p></h4>
      </div>
    </div>
  `
  }).join("") 
  productCards.innerHTML = productItems
  };
rednderProduct();
//! sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss offer

const offer = [
{
  img:"img/offer/offer_1.png",
  type: "Mouse",
  name:"XPG INFAREX M10",
  review:"68",
  price:"$18.00",
  price2:"$20.00",
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
  price2:"$200.00",
  info:"",
  infoClass:"",
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
  price2:"$85.00",
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
  price2:"$500.00",
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
  price2:"$840.00",
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
  price2:"$220.00",
  info:"",
  infoClass:"",
  star1:"fa-solid fa-star",
  star2:"fa-solid fa-star",
  star3:"fa-regular fa-star",
},
];

let offerCards = document.querySelector(".offer .bigHolder .products")

function rednderoffer() {
let offerItems = offer.map((item) => {
  
  return`
    <div class="main-card">
      <div class="image">
        <img src="${item.img}" alt="">
        <button onclick="calculation()" class="main-buttom">
          <i class="bi bi-cart2"></i>
          Add To Cart
        </button>
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
        <h4>${item.price} <p>${item.price2}</p></h4>
      </div>
    </div>
  `
  }).join("") 
  offerCards.innerHTML = offerItems
  };
rednderoffer();

//! sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss counter

let countDownDate = new Date("Sep 31, 2023 23:59:59").getTime();
let counter = setInterval(() => {
  let dateNow = new Date().getTime();
  let dateDiff = countDownDate - dateNow;

  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  document.querySelector(".days span").innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector(".hours span").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector(".minutes span").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".seconds span").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

    if (dateDiff < 0) {
      clearInterval(counter);
    }
  }, 1000);