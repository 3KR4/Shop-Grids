// //! sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss Header
let header = document.querySelector(".header");
mainHeader = () => {
  // let search = basket.find((x) => x.id === id) || []
  return (header.innerHTML = `
  <div class="preLoader">
  <div></div>
  <span>Loading...</span>
  </div>
  <button class="scrollBar"><i class="fa-solid fa-angles-up"></i></button>
  <div class="nav-1">
    <div class="container">
    <div class="region">
      <ul>
        <li class="currency">
          <select class="select-currency">
            <option value="0">$ USD</option>
            <option value="2">$ CAD</option>
            <option value="3">₹ INR</option>
            <option value="4">¥ CNY</option>
            <option value="5">৳ BDT</option>
          </select>
        </li>
        <li class="language">
          <select class="select-language">
            <option value="0">English</option>
            <option value="1">Español</option>
            <option value="2">Filipino</option>
            <option value="3">Français</option>
            <option value="4">العربية</option>
            <option value="5">हिन्दी</option>
            <option value="6">বাংলা</option>
          </select>
        </li>
      </ul>
    </div>
  <div class="login">
    <div class="hello">
      <i class="bi bi-person"></i>
      Hello
    </div>
    <div class="sign-in">
      <a href="login.html" class="login-border">Sign In</a>
      <a href="register.html">Register</a>
    </div>
  </div>
    </div>
  </div>
  <div class="container">
  <div class="nav-2">
    <a class="logo" href="index.html">
      <i class="bi bi-basket"></i>
      Shop
      <span>Grids</span> 
    </a>

    <div class="holder">
      <div class="searsh-content">
        <select class="select-currency">
          <option value="0">All</option>
          <option value="2">option 01</option>
          <option value="3">option 02</option>
          <option value="4">option 03</option>
          <option value="5">option 04</option>
          <option value="5">option 05</option>
        </select>
        <input class=" search1 " type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-primary search" type="submit">
        <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      <div class="hot-line">
        <i class="fa-solid fa-phone"></i>
        <div>
          Hotline:
          <p>(+100) 123 456 7890</p>
        </div>
      </div>
    </div>
    <div class="follow">
      <h3>Follow Us:</h3> 
      <a href=""><i class="bi bi-facebook"></i></a>
      <a href=""><i class="bi bi-twitter"></i></a>
      <a href=""><i class="bi bi-messenger"></i></a>
      <a href=""><i class="bi bi-discord discord"></i></a>
    </div>
  </div>
  <div class="nav-3">
  <div class= "navHolder"> 
  <div class="categories">
      <i class='bx bx-menu'></i>
    All Categories 
    <ul class="main-mega-menu">
      <li><a href="shop.html">Electronics <i class="fa-solid fa-angle-right"></i></a>
      <ul class="main-mega-menu-2">
        <li><a href="shop.html">Camcorders</a></li>
        <li><a href="shop.html">Camera Drones</a></li>
        <li><a href="shop.html">Smart Watches</a></li>
        <li><a href="shop.html">Headphones</a></li>
        <li><a href="shop.html">MP3 Players</a></li>
        <li><a href="shop.html">Microphones</a></li>
        <li><a href="shop.html">Chargers</a></li>
        <li><a href="shop.html">Batteries</a></li>
        <li><a href="shop.html">Cables & Adapters</a></li>
      </ul>
      </li>
      <li><a href="shop.html">Accessories</a></li>
      <li><a href="shop.html">Televisions</a></li>
      <li><a href="shop.html">best selling</a></li>
      <li><a href="shop.html">top 100 offer</a></li>
      <li><a href="shop.html">sunglass</a></li>
      <li><a href="shop.html">watch</a></li>
      <li><a href="shop.html">man’s product</a></li>
      <li><a href="shop.html">Audio & Theater</a></li>
      <li><a href="shop.html">Tablets</a></li>
      <li><a href="shop.html">Video Games</a></li>
      <li><a href="shop.html">Home Appliances</a></li>
    </ul>
  </div>
  <ul class="nav-link">
    <li><a href="index.html">Home</a></li>
    <li>
      <div class="dropdown">
        <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Pages
        </a>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="about.html">About Us</a></li>
          <li><a class="dropdown-item" href="faq.html">Faq</a></li>
          <li><a class="dropdown-item" href="login.html">Login</a></li>
          <li><a class="dropdown-item" href="register.html">Register</a></li>
          <li><a class="dropdown-item" href="success.html">Mail Success</a></li>
          <li><a class="dropdown-item" href="error.html">404 Error</a></li>
        </ul>
      </div>
    </li>
    <li>
      <div class="dropdown">
        <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Shop
        </a>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="shop.html">Shop Grid</a></li>
          <li><a class="dropdown-item" href="product.html">Product</a></li>
          <li><a class="dropdown-item" href="cart.html">Product Cart</a></li>
          <li><a class="dropdown-item" href="checkout.html">Checkout</a></li>
        </ul>
      </div>
    </li>
    <li>
      <div class="dropdown">
        <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Blog
        </a>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="blog-grid.html">Blog Grid Sidebar</a></li>
          <li><a class="dropdown-item" href="blog-single.html">Blog Single</a></li>
          <li><a class="dropdown-item" href="blog-sidebar.html">Blog Single Sidebar</a></li>
        </ul>
      </div>
    </li>
    <li><a href="contact.html">Contact Us</a></li>
  </ul>
  <span onclick="navLinkClick()" class="mainSpan">
    <span class="bar1"></span>
    <span class="bar2"></span>
    <span class="bar3"></span>
  </span>
  <div class="products-holder">
    <div class="darkLight darkLight1">
      <i class="bi bi-brightness-high-fill sun"></i>
      <i class="bi bi-moon-fill moon"></i>
    </div>
    
    <i class=" fa-solid fa-circle-half-stroke theme theme1"></i>

    <i class="fa-solid fa-heart love">
      <span>
        0
      </span>
    </i>
    <i class="fa-solid fa-cart-shopping cart">
      <span class="cartNumpers">
        0
      </span>
      <div class="main-cart">
      <div>
        <div class="item">
          <h6><span class="length">0</span> Items</h6>
          <a href="cart.html">View Cart</a>
        </div>
        <div class="cards">

        </div>
        <div class="total">
          <h6>Total Price</h6>
          <h6 class="cartProductTotal">0</h6>
        </div>
        <a class="Check main-buttom" href="checkout.html">Check Out</a>
      </div>
      </div>
    </i>
    
  </div>
  <div class="theme-holder">
    <div class="holder">
      <button class="theme3btn"><i class=" fa-solid fa-circle-half-stroke theme3"></i></button>
      <span class="theme-buttons" data-color="#fe5b3d"><i style="color: #fe5b3d;" class="fa-solid fa-layer-group"></i></span>
      <span class="theme-buttons" data-color="#2a84ff"><i style="color: #2a84ff;" class="fa-solid fa-layer-group"></i></span>
      <span class="theme-buttons" data-color="#8e44ad"><i style="color: #8e44ad;" class="fa-solid fa-layer-group"></i></span>
      <span class="theme-buttons" data-color="#f39c12"><i style="color: #f39c12;" class="fa-solid fa-layer-group"></i></span>
      <span class="theme-buttons" data-color="#27ae60"><i style="color: #27ae60;" class="fa-solid fa-layer-group"></i></span>
      <span class="theme-buttons" data-color="#e84393"><i style="color: #e84393;" class="fa-solid fa-layer-group"></i></span>
    </div>
  </div>

</div>
  </div>
  </div>
  <div class="nav-4">
  <div class="container">
  <h4 class="pageName1"></h4>
  <div class="pages">
    <div class="home">
      <i class="bi bi-house-door"></i>
      <a href="index.html">Home</a>
    </div>
    <i class="fa-solid fa-angle-right"></i>
    <h6 class="pageName2"></h6>
  </div>
  </div>

  </div>
  `);
};
mainHeader();

let body = document.querySelector("body");
let stiky = document.querySelector(".nav-3") 
console.log(stiky);
const loadIcon = document.querySelector(".preLoader")
window.addEventListener("load", function() {
  loadIcon.style.display = "none"
  body.style.overflow = "auto"
  stiky.style.zIndex = "1000"
})





let darkLight = document.querySelector(".darkLight");

function darkMode () {
  if (localStorage.getItem("mode") === "dark-mode") {
    body.classList.add("dark");
    darkLight.classList.add("active")
  }

  darkLight.addEventListener("click", () => {
    darkLight.classList.toggle("active");
    body.classList.toggle("dark");
    if (!body.classList.contains("dark")) {
      localStorage.setItem("mode", "light-mode");
    } else {
      localStorage.setItem("mode", "dark-mode");
    }
  });
}

darkMode()



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

let themeBtn1 = document.querySelector(".theme1")
let themeBtn3 = document.querySelector(".theme3btn")
let themeico3 = document.querySelector(".theme3")
let themeHolder = document.querySelector(".theme-holder")

function nagi2 (themesBtn) {
  themesBtn.addEventListener("click", () => {
    themeHolder.classList.toggle("active")
    if (themeHolder.classList.contains("active")) {
      themeico3.classList.replace("fa-circle-half-stroke","fa-x")
    } else {
      themeico3.classList.replace("fa-x","fa-circle-half-stroke")
    }
  })
}
nagi2(themeBtn1)
nagi2(themeBtn3)



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

//! sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss theme

  let themeButtons = document.querySelectorAll(".theme-buttons")

  if (window.localStorage.getItem("theme")) {
    document.querySelector(':root').style.setProperty('--main-color', window.localStorage.getItem("theme"));

    if (window.localStorage.getItem("theme") === "#2a84ff") {
      document.querySelector(':root').style.setProperty('--hover-color',  window.localStorage.getItem("hover")); 
    } else if (window.localStorage.getItem("theme") !== "#2a84ff") {
      document.querySelector(':root').style.setProperty('--hover-color', "#0167f3");
    }
  }
  themeButtons.forEach((btn) =>{
    btn.addEventListener('click', (e) => {
    
    themeButtons.forEach((li) => {
      li.classList.remove("active")
    })
    e.currentTarget.classList.add("active")
  
    window.localStorage.setItem("theme", e.currentTarget.dataset.color)
    window.localStorage.setItem("hover", "#0e3f81")
  
    document.querySelector(':root').style.setProperty('--main-color', e.currentTarget.dataset.color);

        if (window.localStorage.getItem("theme") === "#2a84ff") {
          document.querySelector(':root').style.setProperty('--hover-color',  window.localStorage.getItem("hover")); 
        } else if (window.localStorage.getItem("theme") !== "#2a84ff") {
          document.querySelector(':root').style.setProperty('--hover-color', "#0167f3");
        }
    });
  });

  //! ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss cart

let basket = JSON.parse(localStorage.getItem("addItem")) || []               // للأعلان الاساسي عن شنطة المنتجات المضافة من كل صفحة
quantityBasket = JSON.parse(localStorage.getItem("Quantity")) || []         // للأعلان الثانوي عن شنطة الكمية المضافة من كل منتج
let mainCart = document.querySelector(".cart .main-cart")                  // الهيكل المتحرك للسلة في الهيدر
let carticon = document.querySelector(".cartNumpers")                     // رقم المنتجات المضافة للسلة المتحركة
let cartProductLength = document.querySelector(".main-cart .length")     // الرقم الكلي لعدد المنتجات المضافة للسلة المتحركة
let cartProductTotal = document.querySelector(".cartProductTotal")      // السعر الكلي للمنتجات المضافة للسلة المتحركة
let mainCartCards = document.querySelector(".cart .main-cart .cards")  // قائمة المنتجات التي سيوضع بها المنتجات في الجسم المتحرك للسلة
let mainCartDiv = document.querySelector(".cart .main-cart > div")    // اول شنطة في الهيكل المتحرك التي سيوضع فيها اما المنتجات المضافة او رسالة السلة فارغة
const audioAdd = new Audio();
audioAdd.src = "../img/click.mp3";

const audioDelete = new Audio();
audioDelete.src = "../img/delete-1.mp3";


  let generateCartHover = () => {   //! لعرض المنتجات المضافة في السلة المتحركة     
    if (basket.length !== 0) {     // لعرض جميع المنتجات الذي تم اضافتها للعربة المتحركة  
      mainCartDiv.style.cssText = "display: block;"
      return (mainCartCards.innerHTML = basket.map((x) => {
        let {id, item} = x
          let search = allProducts.find((y) => y.id === id) || []
          return `
          <div class="card">
          <img src="${search.img}" alt="">
          <div class="info">
          <a onclick="pushProduct(${id})" href="product.html"><h3>${search.name}</h3></a>
            <h5 class="type">${search.type}</h5>
            <p>$${search.price}</p>
          </div>
          <i onclick="removeHoverItem(${id})" class="bi bi-x-lg"></i>
        </div>
          `
        }).join("")
      )
    } else {   // لأظهار رسالة ان العربة المتحركة فارغة عندما لا يكون هناك منتجات مضافة  
      mainCartDiv.style.cssText = "display: none;"
      mainCart.innerHTML = `
        <h1 style="  font-size: 15px;
        text-align: center;
        color: var(--text-color);"
        class="cartIsEmpety">Your shopping cart is empty!</h1>
    `
    }
  }
  generateCartHover()  // لعرض المنتجات المضافة في السلة المتحركة في الصفحة تلقائي

  let cartLength = () => {   //! لتحديث عدد العناصر الموجودة في السلة المتحركى 
    cartProductLength.textContent = basket.length
  }
  cartLength()  // لتحديث عدد العناصر الموجودة في السلة المتحركى فقط عند عمل تحديث للصفحة

  let totalPriceHover = () => {         //!  لتحديث خانة السعر النهائي في السلة المتحركة
    let amout = basket.map((x) => {
      let {id, item} = x
      let search = allProducts.find((y) => y.id === id)
      let searchQuantity = quantityBasket.find((x) => x.id === id)

      return searchQuantity === undefined ? search.price * 1 : search.price * searchQuantity.item
    }).reduce((x, y) => x + y,0)
    cartProductTotal.textContent = `$${amout},00`
  }
  totalPriceHover()     // للتحديث التلقائي لخانة السعر النهائي في عربة المشتريات عند تحديث الصفحة  

  let increment = (id) => {  //! لاضافة منتج جديد في السلة عند الضغط عليه 
  let search = basket.find((x) => x.id === id) 
  if (search === undefined) {
    basket.push({
      id: id,
      item: 1,
      quantity: 1,
    }) 
    audioAdd.play()
  } else {
    search.quantity += 1;
  }
  localStorage.setItem("addItem", JSON.stringify(basket))
  update(id)            // لزيادة رقم العربة عند اضافة منتج تلقائيا
  generateCartHover()  // لعرض المنتجات المضافة في العربة المتحركة في الصفحة تلقائي
  calculation()
  }

  let update = (id) => {  //! لاضافة منتج جديد في السلة عند الضغط عليه 
    let search = basket.find((x) => x.id === id) 
    calculation()
    cartLength()        // لتحديث عدد العناصر الموجودة في العربة المتحركى تلقأئيا
    totalPriceHover()  // للتحديث التلقائي لخانة السعر النهائي في عربة المشتريات عند تحديث الصفحة  
  }

  let calculation = () => { //! لزيادة رقم السلة عند اضافة منتج جديد
    carticon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0)
  }
  calculation()

  let removeHoverItem = (id) => {  //! لحذف العنصر عند الضغط علي سلة المهملات في السلة المتحركة
    basket = basket.filter((x) => x.id !== id)
    localStorage.setItem("addItem", JSON.stringify(basket))
    update(id)            // لزيادة رقم العربة عند اضافة منتج تلقائيا
    generateCartHover()  // لحذف المنتجات المحذوفة من العربة المتحركة تلقائي
    audioDelete.play()

  }

  let productBasket = JSON.parse(localStorage.getItem("Product")) || []   
  let pushProduct = (id) => {  //! لحفظ بيانات المنتج بالضغط عليه للدخول علي صفحة المنتج  
    localStorage.setItem("Product", id)
  }

  
//! sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss footer

let footer = document.querySelector(".footer");
mainFooter = () => {
  return (footer.innerHTML = `
  <div class="container">
  <div class="top-footer">
      <a class="logo" href="index.html">
        <i class="bi bi-basket"></i>
        Shop
        <span>Grids</span> 
      </a>
      <div class="holder">
        <div class="Subscribe ">
          <h4>Subscribe to our Newsletter</h4>
          <p>Get all the latest information, Sales and Offers.</p>
      </div>
      <div class="input">
          <input name="EMAIL" placeholder="Email address here..." type="email">
          <button class="main-buttom">Subscribe<span class="dir-part"></span></button>
      </div>
      </div>

  </div>
  <div class="middle-footer">
    <div class="with-us">
      <h1>Get In Touch With Us</h1>
      <h3>Phone: +1 (900) 33 169 7720</h3>
      <h3>Monday-Friday: <br>
        9.00 am - 8.00 pm</h3>
      <h3>Saturday: <br>
        10.00 am - 6.00 pm</h3>
        <a href=""><h3>support@shopgrids.com</h3></a>
    </div>
    <div class="app">
      <h1>Our Mobile App</h1>
      <div>
        <a href="">
          <i class="fa-brands fa-apple"></i>
          <h3>Download on the <br>
          App Store</h3>
        </a>
        <a href="">
          <img src="img/Google_play_store.png" alt="">
          <h3>Download on the <br>
          Google Play</h3>
        </a>
      </div>
    </div>
    <div class="another">
      <h1>Information</h1>
      <ul>
        <a href=""><li>About Us</li></a>
        <a href=""><li>Contact Us</li></a>
        <a href=""><li>Downloads</li></a>
        <a href=""><li>Sitemap</li></a>
        <a href=""><li>FAQs Page</li></a>
      </ul>
    </div>
    <div class="another">
      <h1>Shop Departments</h1>
      <ul>
        <a href=""><li>Computers & Accessories</li></a>
        <a href=""><li>Smartphones & Tablets</li></a>
        <a href=""><li>TV, Video & Audio</li></a>
        <a href=""><li>Cameras, Photo & Video</li></a>
        <a href=""><li>Headphones</li></a>
      </ul>
    </div>
  </div>
  <div class="bottom-footer">
    <div class="visa">
      <h3>We Accept:</h3>
      <img src="img/credit-cards-footer.png" alt="">
    </div>
    <h3>Designed and Developed byGrayGrids</h3>
    <div class="follow">
      <h3>Follow Us:</h3> 
      <a href=""><i class="bi bi-facebook"></i></a>
      <a href=""><i class="bi bi-twitter"></i></a>
      <a href=""><i class="bi bi-messenger"></i></a>
      <a href=""><i class="bi bi-discord discord"></i></a>
    </div>
  </div>
</div>
  `);
};
mainFooter();

//! sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss about video

const video = document.querySelector(".video")
function openVideo() {
  video.classList.add("videoClicked")
  document.body.style.setProperty("overflow", "hidden")
}
function closeVideo() {
  video.classList.remove("videoClicked")
  document.body.style.removeProperty("overflow")
}
