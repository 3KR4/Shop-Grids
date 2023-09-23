// //! sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss Header
let header = document.querySelector(".header");
// mainHeader = () => {
//   return (header.innerHTML = `
//   <div class="nav-1">
//   <div class="container">
//     <div class="region">
//       <ul>
//         <li class="currency">
//           <select class="select-currency">
//             <option value="0">$ USD</option>
//             <option value="2">$ CAD</option>
//             <option value="3">₹ INR</option>
//             <option value="4">¥ CNY</option>
//             <option value="5">৳ BDT</option>
//           </select>
//         </li>
//         <li class="language">
//           <select class="select-language">
//             <option value="0">English</option>
//             <option value="1">Español</option>
//             <option value="2">Filipino</option>
//             <option value="3">Français</option>
//             <option value="4">العربية</option>
//             <option value="5">हिन्दी</option>
//             <option value="6">বাংলা</option>
//           </select>
//         </li>
//       </ul>
//     </div>
//   <div class="login">
//     <div class="hello">
//       <i class="bi bi-person"></i>
//       Hello
//     </div>
//     <div class="sign-in">
//       <a href="" class="login-border">Sign In</a>
//       <a href="">Register</a>
//     </div>
//   </div>
// </div>
// </div>
// <div class="container">
// <div class="nav-2">
//     <a class="logo" href="index.html">
//       <i class="bi bi-basket"></i>
//       Shop
//       <span>Grids</span> 
//     </a>

//     <div class="holder">
//       <div class="searsh-content">
//         <select class="select-currency">
//           <option value="0">All</option>
//           <option value="2">option 01</option>
//           <option value="3">option 02</option>
//           <option value="4">option 03</option>
//           <option value="5">option 04</option>
//           <option value="5">option 05</option>
//         </select>
//         <input class=" search1 " type="search" placeholder="Search" aria-label="Search">
//         <button class="btn btn-primary search" type="submit">
//         <i class="fa-solid fa-magnifying-glass"></i>
//         </button>
//       </div>
//       <div class="hot-line">
//         <i class="fa-solid fa-phone"></i>
//         <div>
//           Hotline:
//           <p>(+100) 123 456 7890</p>
//         </div>
//       </div>
//     </div>

//     <div class="products-holder">
//         <div class="darkLight darkLight1">
//           <i class="bi bi-brightness-high-fill sun"></i>
//           <i class="bi bi-moon-fill moon"></i>
//         </div>

//       <i class="fa-solid fa-heart love">
//         <span>
//           0
//         </span>
//       </i>
//       <i class="fa-solid fa-cart-shopping cart">
//         <span>
//           2
//         </span>
//         <div class="main-cart">
//           <div class="item">
//             <h6>2 Items</h6>
//             <a href="">View Cart</a>
//           </div>
//           <div class="cards">
//             <div class="card">
//               <img src="img/item1.png" alt="">
//               <div class="info">
//                 <h6>Apple Watch</h6>
//                 <h6>Series 6</h6>
//                 <p>1x - $35.00</p>
//               </div>
//               <i class="bi bi-x-lg"></i>
//             </div>
//             <div class="card">
//               <img src="img/item2.png" alt="">
//               <div class="info">
//                 <h6>Wi-Fi Smart</h6>
//                 <h6>Camera</h6>
//                 <p>1x - $35.00</p>
//               </div>
//               <i class="bi bi-x-lg"></i>
//             </div>
//           </div>
//           <div class="total">
//             <h6>Total</h6>
//             <h6>$134.00</h6>
//           </div>
//           <a class="Check main-buttom" href="">Check Out</a>
//         </div>
//       </i>
//     </div>

// </div>
// <div class="nav-3">
//   <div class="categories">
//       <i class='bx bx-menu'></i>
//     All Categories 
//     <ul class="main-mega-menu">
//       <li><a href="">Electronics <i class="fa-solid fa-angle-right"></i></a>
//       <ul class="main-mega-menu-2">
//         <li><a href="">Camcorders</a></li>
//         <li><a href="">Camera Drones</a></li>
//         <li><a href="">Smart Watches</a></li>
//         <li><a href="">Headphones</a></li>
//         <li><a href="">MP3 Players</a></li>
//         <li><a href="">Microphones</a></li>
//         <li><a href="">Chargers</a></li>
//         <li><a href="">Batteries</a></li>
//         <li><a href="">Cables & Adapters</a></li>
//       </ul>
//       </li>
//       <li><a href="">Accessories</a></li>
//       <li><a href="">Televisions</a></li>
//       <li><a href="">best selling</a></li>
//       <li><a href="">top 100 offer</a></li>
//       <li><a href="">sunglass</a></li>
//       <li><a href="">watch</a></li>
//       <li><a href="">man’s product</a></li>
//       <li><a href="">Audio & Theater</a></li>
//       <li><a href="">Tablets</a></li>
//       <li><a href="">Video Games</a></li>
//       <li><a href="">Home Appliances</a></li>
//     </ul>
//   </div>
//   <ul class="nav-link">
//     <li><a href="index.html">Home</a></li>
//     <li onclick="megaClick1()"> <div class="title title-1">Pages <i class="fa-solid fa-angle-down angle-down1"></i></div> 
//     <ul class="mega mega-menu-1">
//       <li><a href="">About Us</a></li>
//       <li><a href="">Faq</a></li>
//       <li><a href="">Login</a></li>
//       <li><a href="">Register</a></li>
//       <li><a href="">Mail Success</a></li>
//       <li><a href="">404 Error</a></li>
//     </ul>
//     </li>
//     <li onclick="megaClick2()"><div class="title title-2"> Shop <i class="fa-solid fa-angle-down angle-down2"></i> </div>
//       <ul class="mega mega-menu-2">
//         <li><a href="">Shop Grid</a></li>
//         <li><a href="">Shop List</a></li>
//         <li><a href="">Shop Single</a></li>
//         <li><a href="">Cart</a></li>
//         <li><a href="">Checkout</a></li>
//       </ul>
//     </li>
//     <li onclick="megaClick3()"><div class="title title-3">Blog <i class="fa-solid fa-angle-down angle-down3"></i> </div>
//       <ul class="mega mega-menu-3">
//         <li> <a href="">Blog Grid Sidebar</a></li>
//         <li> <a href="">Blog Single</a></li>
//         <li><a href="">Blog Single Sibebar</a></li>
//       </ul>
//     </li>
//     <li><a href="">Contact Us</a></li>
//   </ul>
//   <span onclick="navLinkClick()" class="mainSpan">
//     <span class="bar1"></span>
//     <span class="bar2"></span>
//     <span class="bar3"></span>
//   </span>
//   <div class="follow">
//     <h3>Follow Us:</h3> 
//     <a href=""><i class="bi bi-facebook"></i></a>
//     <a href=""><i class="bi bi-twitter"></i></a>
//     <a href=""><i class="bi bi-messenger"></i></a>
//     <a href=""><i class="bi bi-discord discord"></i></a>
//   </div>
//   <div class="products-holder">
//   <div class="darkLight darkLight2">
//     <i class="bi bi-brightness-high-fill sun"></i>
//     <i class="bi bi-moon-fill moon"></i>
//   </div>

// <i class="fa-solid fa-heart love">
//   <span>
//     0
//   </span>
// </i>
// <i class="fa-solid fa-cart-shopping cart">
//   <span>
//     2
//   </span>
//   <div class="main-cart">
//     <div class="item">
//       <h6>2 Items</h6>
//       <a href="">View Cart</a>
//     </div>
//     <div class="cards">
//       <div class="card">
//         <img src="img/item1.png" alt="">
//         <div class="info">
//           <h6>Apple Watch</h6>
//           <h6>Series 6</h6>
//           <p>1x - $35.00</p>
//         </div>
//         <i class="bi bi-x-lg"></i>
//       </div>
//       <div class="card">
//         <img src="img/item2.png" alt="">
//         <div class="info">
//           <h6>Wi-Fi Smart</h6>
//           <h6>Camera</h6>
//           <p>1x - $35.00</p>
//         </div>
//         <i class="bi bi-x-lg"></i>
//       </div>
//     </div>
//     <div class="total">
//       <h6>Total</h6>
//       <h6>$134.00</h6>
//     </div>
//     <a class="Check main-buttom" href="">Check Out</a>
//   </div>
// </i>
// </div>
// </div>
// <div class="nav-4">
//   <h4 class="pageName1"></h4>
//   <div class="pages">
//     <div class="home">
//       <i class="bi bi-house-door"></i>
//       <a href="index.html">Home</a>
//     </div>
//     <i class="fa-solid fa-angle-right"></i>
//     <h6 class="pageName2"></h6>
//   </div>
// </div>
// </div>
//   `);
// };
// mainHeader();

let body = document.querySelector("body");
modeToggle1 = document.querySelector(".darkLight1");
modeToggle2 = document.querySelector(".darkLight2");
let getMode = localStorage.getItem("mode");

function nagi (modeToggle) {
  if (getMode && getMode === "dark-mode") {
    body.classList.add("dark");
  }
  modeToggle.addEventListener("click", () => {
    modeToggle.classList.toggle("active");
    body.classList.toggle("dark");
    if (!body.classList.contains("dark")) {
      localStorage.setItem("mode", "light-mode");
    } else {
      localStorage.setItem("mode", "dark-mode");
    }
  });
}
nagi(modeToggle1)
nagi(modeToggle2)

let megaMenu1 = document.querySelector(".mega-menu-1") 
let megaMenu2 = document.querySelector(".mega-menu-2") 
let megaMenu3 = document.querySelector(".mega-menu-3") 

function megaClick1 () {
  megaMenu1.classList.toggle("active")
  megaMenu2.classList.remove("active")
  megaMenu3.classList.remove("active")
}
function megaClick2 () {
  megaMenu2.classList.toggle("active")
  megaMenu1.classList.remove("active")
  megaMenu3.classList.remove("active")
}
function megaClick3 () {
  megaMenu3.classList.toggle("active")
  megaMenu1.classList.remove("active")
  megaMenu2.classList.remove("active")
}

let navLink = document.querySelector(".nav-3 .nav-link") 
let bar1 = document.querySelector(".bar1") 
let bar2 = document.querySelector(".bar2") 
let bar3 = document.querySelector(".bar3") 

function navLinkClick () {
  navLink.classList.toggle("active")
  bar1.classList.toggle("active")
  bar2.classList.toggle("active")
  bar3.classList.toggle("active")
}

let themBtn1 = document.querySelector(".them1")
let themBtn2 = document.querySelector(".them2")
let themBtn3 = document.querySelector(".them3btn")
let themico3 = document.querySelector(".them3")
let themHolder = document.querySelector(".them-holder")

function nagi2 (themsBtn) {
  themsBtn.addEventListener("click", () => {
    themHolder.classList.toggle("active")
    if (themHolder.classList.contains("active")) {
      themico3.classList.replace("fa-circle-half-stroke","fa-x")
    } else {
      themico3.classList.replace("fa-x","fa-circle-half-stroke")
    }
  })
}
nagi2(themBtn1)
nagi2(themBtn2)
nagi2(themBtn3)

let themeButtons = document.querySelectorAll(".theme-buttons")
let themBlue = document.querySelectorAll(".themBlue")

themeButtons.forEach(color =>{
  color.addEventListener('click', () => {
  let dataColor = color.getAttribute('data-color');
  document.querySelector(':root').style.setProperty('--main-color', dataColor);
  });
});

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 225);
});

function pageNameChanger1 () {
  let pageName = document.querySelector(".pageName1")
  pageName.innerHTML = document.title
}
pageNameChanger1()

function pageNameChanger2 () {
  let pageName2 = document.querySelector(".pageName2")
  pageName2.innerHTML = document.title
}
pageNameChanger2()

//! ScrollBar / States
const scrollBar = document.querySelector(".scrollBar");

window.onscroll = function () {
  if(this.scrollY >= 400){
    scrollBar.classList.add('show')
  }else{
    scrollBar.classList.remove('show')
  }
};
scrollBar.onclick = function () {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};

