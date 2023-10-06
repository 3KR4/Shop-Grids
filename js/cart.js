basket = JSON.parse(localStorage.getItem("addItem")) || []                  // للأعلان الثانوي عن شنطة المنتجات المضافة من كل صفحة
let quantityBasket = JSON.parse(localStorage.getItem("Quantity")) || []    // للأعلان الاساسي عن شنطة الكمية المضافة من كل منتج
let cartProducts = document.querySelector(".cart-products")               // قائمة المشتريات التي سيوضع بها المنتجات
let mainCartHolder = document.querySelector(".main-cart-holder")         // صفحة العربة بالكامل عندما يكون هناك مشتريات
let productsNameHolder = document.querySelector(".productsNameHolder")  // قائمة الاسامي التي سيوضع بها الاسامي والسعر في عربة المشتريات 
let finalPrice = document.querySelector(".finalPrice")                 // خانة السعر النهائي
let EmpetyDiv = document.querySelector(".error-page")                 // صفحة العربة بالكامل عندما لا يكون هناك مشتريات

let generateCartItems = () => {  //! لعرض المنتجات المضافة في العربة في قائمة المنتجات  
  if (basket.length !== 0) {    // لعرض جميع المنتجات الذي تم اضافتها للعربة في الصفحة
    EmpetyDiv.style.cssText = "display: none;"
    return (cartProducts.innerHTML = basket.map((x) => {
      let {id, item} = x
        let search = allProducts.find((y) => y.id === id) || []
        let searchQuantity = quantityBasket.find((x) => x.id === id)
        
        return `
        <div id=product-id-${id} class="card">
        <div class="info col-lg-4">
          <img src="${search.img}" alt="">
          <div class="text">
            <h5>${search.name}</h5>
            <h6>Type: ${search.type}</h6>
          </div>
        </div>
          <div class="icons col-lg-2">
            <i onclick="decrementQuantity(${id})" class="fa-solid fa-minus decrement"></i>
            <span id=${id} class="quantityNum">
              ${searchQuantity === undefined ? 1 : searchQuantity.item}
            </span>
            <i onclick="incrementQuantity(${id})" class="fa-solid fa-plus increment"></i>
          </div>
          <h3 class="price col-lg-2">
            $ ${search.price},00
          </h3>
          <h3 class="discount col-lg-2">
            $ ${searchQuantity === undefined? search.price : search.price * searchQuantity.item},00
          </h3>
          <i onclick="removeItem(${id})" class="bi bi-trash trash col-lg-1"></i>
      </div>
        `
      }).join("")
    )
  } else {   // لأظهار رسالة ان العربة فارغة عندما لا يكون هناك منتجات مضافة الي العربة
    mainCartHolder.style.cssText = "display: none;"
    EmpetyDiv.style.cssText = "display: block;"
    EmpetyDiv.innerHTML = `
    <div class="container">
    <h1><i class="bi bi-basket"></i></h1>
    <h3>Your Cart is Empty</h3>
    <p>The purchases you add to the cart will occur in this list</p>
    <a href="shop.html">Back to Shop</a>
  </div>
  `
  }
}
generateCartItems()  // للتحديث التلقائي للمنتجات المعروضة في صفحة العربة

let incrementQuantity = (id) => {       //! cart   لزيادة الكمية عند الضغط علي العداد
  let search = quantityBasket.find((x) => x.id === id)
  if (search === undefined) {
    quantityBasket.push({
      id: id,
      item: 2,
    })
  } else {
    search.item += 1;
  }
  generateCartItems()        //  للتحديث التلقائي للبيانات و السعر في منتجات العربة    
  localStorage.setItem("Quantity", JSON.stringify(quantityBasket))
  totalAmount()            //  للتحديث التلقائي لخانة السعر النهائي في عربة المشتريات   
  generateCartNames()     //  للتحديث التلقائي لخانة الاسامي في الشراء 
}
let decrementQuantity = (id) => {     //! cart   لتقليل الكمية عند الضغط علي العداد
  let search = quantityBasket.find((x) => x.id === id)
  if (search === undefined) return
  else if (search.item === 1) return 
  else {
    search.item -= 1;
  }
  generateCartItems()     //  للتحديث التلقائي للبيانات و السعر في منتجات العربة    
  localStorage.setItem("Quantity", JSON.stringify(quantityBasket))
  totalAmount()         //  للتحديث التلقائي لخانة السعر النهائي في عربة المشتريات           
  generateCartNames()  //  للتحديث التلقائي لخانة الاسامي في الشراء
}
update = (id) => {  //! لاضافة منتج جديد في السلة عند الضغط عليه 
  generateCartItems()
}
let removeItem = (id) => {          //! cart   لحذف العنصر عند الضغط علي سلة المهملات
  quantityBasket = quantityBasket.filter((x) => x.id !== id)
  basket = basket.filter((x) => x.id !== id)
  localStorage.setItem("Quantity", JSON.stringify(quantityBasket))
  localStorage.setItem("addItem", JSON.stringify(basket))
  totalAmount()          //  للتحديث التلقائي لخانة السعر النهائي في عربة المشتريات
  generateCartNames()   //  للتحديث التلقائي لخانة الاسامي في الشراء
  update(id)           // للتحديث التلقائي لعدد المنتجات في العربة عند حذف اي منتنج     
  generateCartItems()  // للتحديث التلقائي للمنتجات المعروضة في صفحة العربة
  removeHoverItem(id)
}

let generateCartNames = () => {
  return (productsNameHolder.innerHTML = basket.map((x) => {
    let {id, item} = x
      let search = allProducts.find((y) => y.id === id) || []
      let searchQuantity = quantityBasket.find((x) => x.id === id)
      
      return `
      <div id=${id}>
        <span>${search.name}</span>
        <span>$ ${searchQuantity === undefined ? search.price * 1 : search.price * searchQuantity.item},00</span>
      </div>
      `
    }).join(""))}
generateCartNames()  // للتحديث التلقائي لخانة اسامي المنتجات في عربة المشتريات عند تحديث الصفحة
let totalAmount = () => {         //! cart   لتحديث خانة السعر النهائي 
  let amout = basket.map((x) => {
    let {id, item} = x
    let search = allProducts.find((y) => y.id === id)
    let searchQuantity = quantityBasket.find((x) => x.id === id)

    return searchQuantity === undefined ? search.price * 1 : search.price * searchQuantity.item
  }).reduce((x, y) => x + y,0)
  finalPrice.innerHTML = `$ ${amout},00`
}
totalAmount()     // للتحديث التلقائي لخانة السعر النهائي في عربة المشتريات عند تحديث الصفحة  