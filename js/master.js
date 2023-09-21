const categories = [
  {
    mainName: "Mother Board",
    info1:"Micro Atx",
    info2:"Full Atx",
    info3:"Extended Atx",
    info4:"",
    img:"img/mother.png"
  },
  {
    mainName: "Graphic Cards",
    info1:"Nvidia",
    info2:"Amd",
    info3:"Intel",
    info4:"",
    img:"img/gpu.png"
  },
  {
    mainName: "Memory",
    info1:"2800 MHz",
    info2:"3200 MHz",
    info3:"3600 MHz",
    info4:"5000 MHz",
    img:"img/ram.png"
  },
  {
    mainName: "Storage",
    info1:"Internal",
    info2:"External",
    info3:"Ssd",
    info4:"m.2",
    img:"img/hdd.png"
  },
  {
    mainName: "Procesor",
    info1:"Intel",
    info2:"Ryzen",
    info3:"Apu",
    info4:"",
    img:"img/cpu.png"
  },
  {
    mainName: "Power Suplay",
    info1:"Whiht",
    info2:"Bronze",
    info3:"Gold",
    info4:"platinom",
    img:"img/power.png"
  },
  {
    mainName: "Computer Case",
    info1:"Mini Atx",
    info2:"Atx",
    info3:"Tower",
    info4:"Full Tower",
    img:"img/case1.png"
  },
  {
    mainName: "Accesories",
    info1:"Mouse",
    info2:"Keyboard",
    info3:"Headphone",
    info4:"Mouse Pad",
    img:"img/ps controlar.png"
  },
  {
    mainName: "Smart Phone",
    info1:"Apple",
    info2:"Samsung",
    info3:"hawawi",
    info4:"oppo",
    img:"img/phone.png"
  }
  ];
  let testCards = document.querySelector(".categories .container")
  
  function rednderCategories() {
  let testItems = categories.map((item) => {
  
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
  testCards.innerHTML = testItems
  };
  rednderCategories();