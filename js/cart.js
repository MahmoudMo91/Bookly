let openShopping = document.querySelector(".shopping");
let closeShopping = document.querySelector(".closeShopping");
let list = document.querySelector(".list");
let listCard = document.querySelector(".listCard");
let body = document.querySelector("body");
let total = document.querySelector(".total");
let quantity = document.querySelector(".quantity");

openShopping.addEventListener("click", () => {
  body.classList.add("active");
});
closeShopping.addEventListener("click", () => {
  body.classList.remove("active");
});

let products = [
  {
    id: 1,
    name: "SPIRIT RUN",
    image: "../images/book1.jpg",
    price: 15.99,
  },
  {
    id: 2,
    name: "Life Of Pi",
    image: "../images/book2.jpg",
    price: 12.99,
  },
  {
    id: 3,
    name: "HOLES",
    image: "../images/book3.jpg",
    price: 17.99,
  },
  {
    id: 4,
    name: "A Walk",
    image: "../images/book4.jpg",
    price: 9.5,
  },
  {
    id: 5,
    name: "Safari",
    image: "../images/book5.jpg",
    price: 13.7,
  },
  {
    id: 6,
    name: "TREASURRE",
    image: "../images/book6.jpg",
    price: 19.7,
  },
  {
    id: 7,
    name: "THE MIRROR",
    image: "../images/book7.jpg",
    price: 16.8,
  },
  {
    id: 8,
    name: "Into The Cold",
    image: "../images/book8.jpg",
    price: 15.2,
  },
  {
    id: 9,
    name: "Girl Of Dragons",
    image: "../images/book9.jpg",
    price: 18.6,
  },
  {
    id: 10,
    name: "Percy Jackson",
    image: "../images/book10.jpg",
    price: 24.5,
  },
];
let listCards = [];
function initApp() {
  products.forEach((value, key) => {
    let newDiv = document.createElement("div");
    newDiv.classList.add("item");
    newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
    list.appendChild(newDiv);
  });
}
initApp();
function addToCard(key) {
  if (listCards[key] == null) {
    // copy product form list to list card
    listCards[key] = JSON.parse(JSON.stringify(products[key]));
    listCards[key].quantity = 1;
  }
  reloadCard();
}
function reloadCard() {
  listCard.innerHTML = "";
  let count = 0;
  let totalPrice = 0;
  listCards.forEach((value, key) => {
    totalPrice = totalPrice + value.price;
    count = count + value.quantity;
    if (value != null) {
      let newDiv = document.createElement("li");
      newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${
        value.quantity - 1
      })">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${
        value.quantity + 1
      })">+</button>
                </div>`;
      listCard.appendChild(newDiv);
    }
  });
  total.innerText = totalPrice.toLocaleString();
  quantity.innerText = count;
}
function changeQuantity(key, quantity) {
  if (quantity == 0) {
    delete listCards[key];
  } else {
    listCards[key].quantity = quantity;
    listCards[key].price = quantity * products[key].price;
  }
  reloadCard();
}
