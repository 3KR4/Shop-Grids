const images = [
  {
    id: "114", 
    value: "Other",
    type: "Drone",
    name: "GoPro Karma Crone",
    review: "08",
    price: "$850.00",
    price2: "$1000.00",
    star1: "fa-solid fa-star",
    star2: "fa-solid fa-star",
    star3: "fa-solid fa-star",
    img: "img/single shop/drone-0.png",
    img1:"img/single shop/drone-1.png",
    img2:"img/single shop/drone-2.png",
    img3:"img/single shop/drone-3.png",
    img4:"img/single shop/drone-4.png",
    img5:"img/single shop/drone-5.png",
  },
]

let productImages = document.querySelector(".single-product .top-area");
function renderImages() {
  let shopItems = images
    .map((x) => {
      let {id, value, type, name, review, price, price2, star1, star2, star3, img, img1, img2, img3, img4, img5} = x;
      return `
      <div class="product-images">
      <div class="holder">
        <div class="big-img"><img class="main-image" src="${img1}" alt=""></div>
        <div class="small-img">
          <img onclick="chnageToimg1()" src="${img1}" alt="">
          <img onclick="chnageToimg2()" src="${img2}" alt="">
          <img onclick="chnageToimg3()" src="${img3}" alt="">
          <img onclick="chnageToimg4()" src="${img4}" alt="">
          <img onclick="chnageToimg5()" src="${img5}" alt="">
        </div>
        </div>
    </div>
    <div class="produt-info">
      <h2 class="title">${name}</h2>
      <p><span><i class="fa-solid fa-tag"></i> ${type} </span></p>
      <h3 class="price"> <span>${price}</span> <del>${price2}</del></h3>
      <p class="info">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

      <div class="quantity">
        <h6>Quantity</h6>
          <div class="icons">
            <i class="fa-solid fa-minus decrement"></i>
            <span class="quantityNum">0</span>
            <i class="fa-solid fa-plus increment"></i>
          </div>
      </div>

      <div class="buttons">
          <button class="main-buttom add">Add To Cart</button>
          <button class="main-buttom"> <i class="fa-solid fa-rotate"></i> <span> Compare</span></button>
          <button class="main-buttom"><i class="fa-regular fa-heart"></i> <span> To Wishlist</span></button>
      </div>

    </div>
    `;
    })
    .join("");
  productImages.innerHTML = shopItems;
}
renderImages();


//! ssssssssssssssssssssssssssssssssssssssssssssssssssss Change Product Images

function chnageToimg1() {
  document.querySelector(".main-image").src="img/single shop/drone-1.png";
}
function chnageToimg2() {
  document.querySelector(".main-image").src="img/single shop/drone-2.png";
}
function chnageToimg3() {
  document.querySelector(".main-image").src="img/single shop/drone-3.png";
}
function chnageToimg4() {
  document.querySelector(".main-image").src="img/single shop/drone-4.png";
}
function chnageToimg5() {
  document.querySelector(".main-image").src="img/single shop/drone-5.png";
}

//! ssssssssssssssssssssssssssssssssssssssssssssssssssss increment-decrement















