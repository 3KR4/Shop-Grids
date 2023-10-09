let collapsBtn = document.querySelectorAll(".checkOut .collapssss")
let collapsIco = document.querySelectorAll(".checkOut .collapssss i")
let checkOut = document.querySelectorAll(".checkOut .form .contacts")

function collapsClick(checkOutview, iconRotate, collapsBtns) {
checkOut.forEach((contact) => {
  contact.classList.remove("active")
  checkOutview.classList.add("active")
})
collapsBtn.forEach((btn) => {
  btn.classList.remove("active")
  collapsBtns.classList.add("active")
})
collapsIco.forEach((ico) => {
  ico.classList.remove("active")
  iconRotate.classList.add("active")
})
}


basket = JSON.parse(localStorage.getItem("addItem")) || []                  // للأعلان الثانوي عن شنطة المنتجات المضافة من كل صفحة
quantityBasket = JSON.parse(localStorage.getItem("Quantity")) || []    // للأعلان الاساسي عن شنطة الكمية المضافة من كل منتج
productsNameHolder = document.querySelector(".productsNameHolder")
let generateCartNames = () => {
return (productsNameHolder.innerHTML = basket.map((x) => {
  let {id, item} = x
    let search = allProducts.find((y) => y.id === id) || []
    let searchQuantity = quantityBasket.find((x) => x.id === id)
    
    return `
    <div id=${id}>
      <span>${search.name} <h6>x${searchQuantity === undefined ? 1 : searchQuantity.item}</h6></span>
      <span>$ ${searchQuantity === undefined ? search.price * 1 : search.price * searchQuantity.item},00</span>
    </div>
    `
  }).join(""))}
generateCartNames()  // للتحديث التلقائي لخانة اسامي المنتجات في عربة المشتريات عند تحديث الصفحة

finalPrice = document.querySelector(".finalPrice")  
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