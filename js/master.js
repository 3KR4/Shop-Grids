//! sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss Landing
const landSwiper = [
  { 
    id: 1034, 
    value: "Accessories",
    type: "Watch",
    name: "M75 Sport Watch",
    review: "33",
    price: "320.00",
    price2: "380.00",
    star1: "fa-solid fa-star",
    star2: "fa-solid fa-star",
    star3: "fa-solid fa-star",
    img: "img/All Products/watsh.png",
    imgSingle: "img/All Products/Single/watsh.png",
    img1: "",
    img2: "",
    img3: "",
    img4: "",
    img5: "",
  },
  { 
    id: 1035, 
    value: "Other",
    type: "Camera",
    name: "Cctv Camera",
    review: "604",
    price: "590.00",
    price2: "650.00",
    star1: "fa-solid fa-star",
    star2: "fa-solid fa-star",
    star3: "fa-solid fa-star",
    img: "img/All Products/camera.png",
    imgSingle: "img/All Products/Single/camera.png",
    img1: "",
    img2: "",
    img3: "",
    img4: "",
    img5: "",
  },
  { 
    id: 1032, 
    value: "Hardware",
    type: "Memory",
    name: "XPG Caster RGB 32GB",
    review: "26",
    price: "89.00",
    price2: "105.00",
    star1: "fa-solid fa-star",
    star2: "fa-solid fa-star",
    star3: "fa-solid fa-star-half-stroke",
    img: "img/All Products/XPG Caster RGB 32GB  (0).png",
    imgSingle: "img/All Products/Single/XPG Caster RGB 32GB  (1).png",
    img1: "img/All Products/Single/XPG Caster RGB 32GB  (1).png",
    img2: "img/All Products/Single/XPG Caster RGB 32GB  (2).png",
    img3: "img/All Products/Single/XPG Caster RGB 32GB  (3).png",
    img4: "img/All Products/Single/XPG Caster RGB 32GB  (4).png",
    img5: "img/All Products/Single/XPG Caster RGB 32GB  (5).png",
  },
];
let landingSwiper = document.querySelector(".landing .left swiper-container")

function rednderLandSwiper() {
  let landingItemSwiper = landSwiper.map((x) => {
    let {id, type, name, review, price, price2, img} = x;
    return`
    <swiper-slide>
    <div class="card">
      <div>
        <h5>Big Sale Offer (25%)</h5>
        <h3>${name}</h3>
        <p>Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
        <h5>Now Only <span>$${price}</span> <span class="price2">$${price2}</span></h5>
        <a  onclick="pushProduct(${id})" class="main-buttom" href="product.html">Shop Now</a>
      </div>
      <img src="${img}" alt="">
      <img class="wave3" src="img/wave3.png" alt="">
    </div>
  </swiper-slide>
    `
  }).join("") 
  landingSwiper.innerHTML = landingItemSwiper
  };
  rednderLandSwiper();

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
            <li><a href="shop.html">${item.info1}</a></li>
            <li><a href="shop.html">${item.info2}</a></li>
            <li><a href="shop.html">${item.info3}</li>
            <li><a href="shop.html">${item.info4}</li>
            <li><a href="shop.html">See All</a></li>
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
    id: 1014, 
    value: "Other",
    type: "Drone",
    name: "GoPro Karma Crone",
    review: "08",
    price: "850.00",
    price2: "1000.00",
    star1: "fa-solid fa-star",
    star2: "fa-solid fa-star",
    star3: "fa-solid fa-star-half-stroke",
    img: "img/All Products/GoPro Karma Crone (0).png",
    imgSingle: "img/All Products/Single/GoPro Karma Crone (1).png",
    img1: "img/All Products/Single/GoPro Karma Crone (1).png",
    img2: "img/All Products/Single/GoPro Karma Crone (2).png",
    img3: "img/All Products/Single/GoPro Karma Crone (3).png",
    img4: "img/All Products/Single/GoPro Karma Crone (4).png",
    img5: "img/All Products/Single/GoPro Karma Crone (5).png",
  },
  { 
    id: 1015, 
    value: "Hardware",
    type: "Mother Board",
    name: "AMD X570S GAMING",
    review: "07",
    price: "160.00",
    price2: "185.00",
    star1: "fa-solid fa-star",
    star2: "fa-solid fa-star",
    star3: "fa-solid fa-star",
    img: "img/All Products/AMD X570S GAMING (0).png",
    imgSingle: "img/All Products/Single/AMD X570S GAMING (1).png",
    img1: "img/All Products/Single/AMD X570S GAMING (1).png",
    img2: "img/All Products/Single/AMD X570S GAMING (2).png",
    img3: "img/All Products/Single/AMD X570S GAMING (3).png",
    img4: "img/All Products/Single/AMD X570S GAMING (4).png",
    img5: "",
  },
  { 
    id: 1017, 
    value: "Other",
    type: "Laptop",
    name: "Acer Nitro 144Hz",
    review: "33",
    price: "500.00",
    price2: "580.00",
    star1: "fa-solid fa-star",
    star2: "fa-solid fa-star-half-stroke",
    star3: "fa-regular fa-star",
    img: "img/All Products/Acer Nitro 144Hz.png",
    imgSingle: "img/All Products/Single/Acer Nitro 144Hz.png",
    img1: "",
    img2: "",
    img3: "",
    img4: "",
    img5: "",
  },
  { 
    id: 1018, 
    value: "Consoles",
    type: "Console",
    name: "Ps4 Pro",
    review: "153",
    price: "250.00",
    price2: "290.00",
    star1: "fa-solid fa-star",
    star2: "fa-solid fa-star",
    star3: "fa-solid fa-star",
    img: "img/All Products/Ps4 (0).png",
    imgSingle: "img/All Products/Single/Ps4 (1).png",
    img1: "img/All Products/Single/Ps4 (1).png",
    img2: "img/All Products/Single/Ps4 (2).png",
    img3: "img/All Products/Single/Ps4 (3).png",
    img4: "img/All Products/Single/Ps4 (4).png",
    img5: "",
  },
  { 
    id: 1031, 
    value: "Hardware",
    type: "Storage",
    name: "AORUS Gen4 2TB",
    review: "22",
    price: "105.00",
    price2: "119.00",
    star1: "fa-solid fa-star",
    star2: "fa-regular fa-star",
    star3: "fa-regular fa-star",
    img: "img/All Products/HyperX QuadCast S (0).png",
    imgSingle: "img/All Products/Single/HyperX QuadCast S (1).png",
    img1: "img/All Products/Single/HyperX QuadCast S (1).png",
    img2: "img/All Products/Single/HyperX QuadCast S (2).png",
    img3: "img/All Products/Single/HyperX QuadCast S (3).png",
    img4: "img/All Products/Single/HyperX QuadCast S (4).png",
    img5: "img/All Products/Single/HyperX QuadCast S (5).png",
  },
  { 
    id: 1027, 
    value: "Consoles",
    type: "Joysticks",
    name: "ps4 controlar",
    review: "96",
    price: "25.00",
    price2: "32.00",
    star1: "fa-solid fa-star",
    star2: "fa-solid fa-star",
    star3: "fa-solid fa-star",
    img: "img/All Products/ps4 controlar (0).png",
    imgSingle: "img/All Products/Single/ps4 controlar (1).png",
    img1: "img/All Products/Single/ps4 controlar (1).png",
    img2: "img/All Products/Single/ps4 controlar (2).png",
    img3: "img/All Products/Single/ps4 controlar (3).png",
    img4: "img/All Products/Single/ps4 controlar (4).png",
    img5: "",
  },
  { 
    id: 1022, 
    value: "Hardware",
    type: "Graphic Card",
    name: "Aorus 4060ti",
    review: "15",
    price: "330.00",
    price2: "350.00",
    star1: "fa-solid fa-star",
    star2: "fa-solid fa-star",
    star3: "fa-regular fa-star",
    img: "img/All Products/Aorus 4060ti.png",
    imgSingle: "img/All Products/Single/Aorus 4060ti.png",
    img1: "",
    img2: "",
    img3: "",
    img4: "",
    img5: "",
  },
  { 
    id: 1032, 
    value: "Hardware",
    type: "Memory",
    name: "XPG Caster RGB 32GB",
    review: "26",
    price: "89.00",
    price2: "105.00",
    star1: "fa-solid fa-star",
    star2: "fa-solid fa-star",
    star3: "fa-solid fa-star-half-stroke",
    img: "img/All Products/XPG Caster RGB 32GB  (0).png",
    imgSingle: "img/All Products/Single/XPG Caster RGB 32GB  (1).png",
    img1: "img/All Products/Single/XPG Caster RGB 32GB  (1).png",
    img2: "img/All Products/Single/XPG Caster RGB 32GB  (2).png",
    img3: "img/All Products/Single/XPG Caster RGB 32GB  (3).png",
    img4: "img/All Products/Single/XPG Caster RGB 32GB  (4).png",
    img5: "img/All Products/Single/XPG Caster RGB 32GB  (5).png",
  },
];

let productCards = document.querySelector(".Product .container")
function rednderProduct() {
let productItems = Product.map((x) => {
  let {id, type, name, review, price, price2, star1, star2, star3, img, } = x;
  return`
    <div class="main-card">
      <div class="image">
        <img src="${img}" alt="">
        <button onclick="increment(${id})" class="main-buttom">
          <i class="bi bi-cart2"></i>
          Add To Cart
        </button>
      </div>
      <div class="holder">
        <p>${type}</p>
        <a onclick="pushProduct(${id})" href="product.html"><h3>${name}</h3></a>
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
        <h4>$${price} <p>$${price2}</p></h4>
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
    id: 1001, 
    value: "Accessories",
    type: "Mouse",
    name: "XPG INFAREX M10",
    review: "68",
    price: "18.00",
    price2: "20.00",
    star1: "fa-solid fa-star",
    star2: "fa-solid fa-star",
    star3: "fa-solid fa-star",
    img: "img/All Products/XPG INFAREX M10 (0).png",
    imgSingle: "img/All Products/Single/XPG INFAREX M10 (1).png",
    img1: "img/All Products/Single/XPG INFAREX M10 (1).png",
    img2: "img/All Products/Single/XPG INFAREX M10 (2).png",
    img3: "img/All Products/Single/XPG INFAREX M10 (3).png",
    img4: "img/All Products/Single/XPG INFAREX M10 (4).png",
    img5: "img/All Products/Single/XPG INFAREX M10 (5).png",
  },
  { 
    id: 1002,
    value: "Accessories",
    type: "Headphones",
    name: "Logitech G PRO X",
    review: "50",
    price: "180.00",
    price2: "200.00",
    star1: "fa-solid fa-star",
    star2: "fa-solid fa-star",
    star3: "fa-regular fa-star",
    img: "img/All Products/Logitech G PRO X (0).png",
    imgSingle: "img/All Products/Single/Logitech G PRO X (1).png",
    img1: "img/All Products/Single/Logitech G PRO X (1).png",
    img2: "img/All Products/Single/Logitech G PRO X (2).png",
    img3: "img/All Products/Single/Logitech G PRO X (3).png",
    img4: "img/All Products/Single/Logitech G PRO X (4).png",
    img5: "",
  },
  {
    id: 1003,
    value: "Hardware",
    type: "Memory",
    name: "XPG D60G RGB 16GB",
    review: "36",
    price: "60.00",
    price2: "75.00",
    star1: "fa-solid fa-star",
    star2: "fa-solid fa-star",
    star3: "fa-solid fa-star",
    img: "img/All Products/XPG D60G RGB 16GB (0).png",
    imgSingle: "img/All Products/Single/XPG D60G RGB 16GB (1).png",
    img1: "img/All Products/Single/XPG D60G RGB 16GB (1).png",
    img2: "img/All Products/Single/XPG D60G RGB 16GB (2).png",
    img3: "img/All Products/Single/XPG D60G RGB 16GB (3).png",
    img4: "img/All Products/Single/XPG D60G RGB 16GB (4).png",
    img5: "img/All Products/Single/XPG D60G RGB 16GB (5).png",
  },
  { 
    id: 1004,
    value: "Hardware",
    type: "Mother Board",
    name: "Asus Rog Strix Z790",
    review: "12",
    price: "350.00",
    price2: "390.00",
    star1: "fa-solid fa-star",
    star2: "fa-regular fa-star",
    star3: "fa-regular fa-star",
    img: "img/All Products/Asus Rog Strix Z790 (0).png",
    imgSingle: "img/All Products/Single/Asus Rog Strix Z790 (1).png",
    img1: "img/All Products/Single/Asus Rog Strix Z790 (1).png",
    img2: "img/All Products/Single/Asus Rog Strix Z790 (2).png",
    img3: "img/All Products/Single/Asus Rog Strix Z790 (3).png",
    img4: "img/All Products/Single/Asus Rog Strix Z790 (4).png",
    img5: "img/All Products/Single/Asus Rog Strix Z790 (5).png",
  },
  { 
    id: 1005,
    value: "Hardware",
    type: "Procesor",
    name: "Intel i9-12900KS",
    review: "3",
    price: "799.00",
    price2: "930.00",
    star1: "fa-solid fa-star",
    star2: "fa-regular fa-star",
    star3: "fa-regular fa-star",
    img: "img/All Products/Intel i9-12900KS (0).png",
    imgSingle: "img/All Products/Single/Intel i9-12900KS (1).png",
    img1: "img/All Products/Single/Intel i9-12900KS (1).png",
    img2: "img/All Products/Single/Intel i9-12900KS (2).png",
    img3: "img/All Products/Single/Intel i9-12900KS (3).png",
    img4: "",
    img5: "",
  },
  { 
    id: 1006,
    value: "Other",
    type: "Monitor",
    name: "Msi G244F24 170HZ",
    review: "23",
    price: "205.00",
    price2: "240.00",
    star1: "fa-solid fa-star",
    star2: "fa-solid fa-star",
    star3: "fa-regular fa-star",
    img: "img/All Products/Msi G244F24 170HZ (0).png",
    imgSingle: "img/All Products/Single/Msi G244F24 170HZ (1).png",
    img1: "img/All Products/Single/Msi G244F24 170HZ (1).png",
    img2: "img/All Products/Single/Msi G244F24 170HZ (2).png",
    img3: "img/All Products/Single/Msi G244F24 170HZ (3).png",
    img4: "img/All Products/Single/Msi G244F24 170HZ (4).png",
    img5: "img/All Products/Single/Msi G244F24 170HZ (5).png",
  },
];

let offerCards = document.querySelector(".offer .bigHolder .products")
function rednderoffer() {
let offerItems = offer.map((x) => {
  let {id, type, name, review, price, price2, star1, star2, star3, img} = x;
  return`
    <div class="main-card">
      <div class="image">
        <img src="${img}" alt="">
        <button onclick="increment(${id})" class="main-buttom">
          <i class="bi bi-cart2"></i>
          Add To Cart
        </button>
      </div>
      <div class="holder">
        <p>${type}</p>
        <a onclick="pushProduct(${id})" href="product.html"><h3>${name}</h3></a>
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
        <h4>$${price} <p>$${price2}</p></h4>
      </div>
    </div>
  `
  }).join("") 
  offerCards.innerHTML = offerItems
  };
rednderoffer();

let newOffer = 1022
let search = allProducts.find((y) => y.id == newOffer)
let newSection = document.querySelector(".offer .bigHolder .new");

let renderNewProduct = () => {
  newSection.innerHTML = `
  <img src="${search.imgSingle}" alt="">
  <div class="text">
    <h3>${search.name}</h3>
    <p>Find out the latest news about the upcoming Nvidia GeForce RTX 4000 series.</p>
    <span>$${search.price}</span>
    <a class="main-buttom" onclick="pushProduct(${newOffer})" href="product.html">But It Now</a>
  </div>
  <img class="nvidia" src="img/nvidia logo.png" alt="">
    `
  }
  renderNewProduct();

//! sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss counter

let countDownDate = new Date("Oct 30, 2023 23:59:59").getTime();
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