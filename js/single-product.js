let produvctId = localStorage.getItem("Product")
let search = allProducts.find((y) => y.id == produvctId)

let productImages = document.querySelector(".single-product .top-area");
let renderImages = () => {

  productImages.innerHTML = `
      <div class="product-images">
      <div class="holder">
        <div class="big-img"><img class="main-image" src="${search.imgSingle}" alt=""></div>
        <div class="small-img">
          <img onclick="chnageToimg1()" src="${search.img1}" alt="">
          <img onclick="chnageToimg2()" src="${search.img2}" alt="">
          <img onclick="chnageToimg3()" src="${search.img3}" alt="">
          <img onclick="chnageToimg4()" src="${search.img4}" alt="">
          <img onclick="chnageToimg5()" src="${search.img5}" alt="">
        </div>
        </div>
      </div>
      <div class="produt-info">
      <h2 class="title">${search.name}</h2>
      <p><span><i class="fa-solid fa-tag"></i> Type: ${search.type} </span></p>
      <h3 class="price"> <span>$${search.price}</span> <del>$${search.price2}</del></h3>
      <p class="info">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <div class="buttons">
          <button onclick="increment(${search.id})" class="main-buttom add">Add To Cart</button>
          <button class="main-buttom"> <i class="fa-solid fa-rotate"></i> <span> Compare</span></button>
          <button class="main-buttom"><i class="fa-regular fa-heart"></i> <span> To Wishlist</span></button>
      </div>
      </div>
    `
}
renderImages();


//! ssssssssssssssssssssssssssssssssssssssssssssssssssss Change Product Images

let mainImage = document.querySelector(".main-image")
function chnageToimg1() {
  mainImage.src= search.img1;
}
function chnageToimg2() {
  mainImage.src= search.img2;
}
function chnageToimg3() {
  mainImage.src= search.img3;
}
function chnageToimg4() {
  mainImage.src= search.img4;
}
function chnageToimg5() {
  mainImage.src= search.img5;
}