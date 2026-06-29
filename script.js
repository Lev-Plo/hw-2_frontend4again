// Завдання 1
const fruits = [
  "Apple",
  "Banana",
  "Cherry",
  "Date",
  "Fig",
  "Grape",
  "Mango",
  "Orange",
  "Peach",
  "Pear",
];

const input = document.querySelector(".search__input");
const list = document.querySelector(".search__results");

function search(value) {
  console.log("kjhkhhjhk");
  const result = [];

  fruits.forEach((item) => {
    if (item.toLowerCase().includes(value.toLowerCase())) {
      result.push(item);
    }
  });

  return result;
}

function debounce(fn, delay) {
  console.log('3333')
  let timeout;

  return function (...args) {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

function render(items) {
  list.innerHTML = "";

  if (items.length === 0) {
    list.innerHTML = "<li>Нічого не знайдено</li>";
    return;
  }

  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });
}

const handleInput = debounce((event) => {
  const value = event.target.value;
  const result = search(value);
  render(result);
}, 400);

input.addEventListener("input", handleInput);

// Завдання 2

const cards = [
  "CARD#1",
  "CARD#2",
  "CARD#3",
  "CARD#4",
  "CARD#5",
  "CARD#6",
  "CARD#7",
  "CARD#8",
  "CARD#9",
];
console.log(cards);

const cardDiv = document.querySelector(".card-list");
const card = document.querySelector(".card-li");
const loader = document.querySelector(".loader");

const throttledScroll = _.throttle(handleScroll, 1000);
window.addEventListener("scroll", throttledScroll);

const renderNewCards = () => {
  console.log('1111')
  loader.classList.toggle("hidden");

  const newCards = [];
    for (let i = 10; i < 19; i++) {
      newCards.push("CARD#" + i);
    }
    newCards.forEach((card) => {
      const li = document.createElement("li");
      li.textContent = card;
      cardDiv.appendChild(li);
    }); 
} 
const debounceRender = _.debounce(renderNewCards, 2000) 

function handleScroll() {
  const pageHeight = window.scrollY;
  if (pageHeight > 550) {
    window.removeEventListener("scroll", throttledScroll);
    loader.classList.toggle("visible")
    debounceRender()
    // debounce(renderNewCards(), 2000)
  }
  console.log("Scrolling...", pageHeight);
}

function render2(cards) {
  list.innerHTML = "";

  cards.forEach((card) => {
    const li = document.createElement("li");
    li.textContent = card;
    cardDiv.appendChild(li);
  });
}
render2(cards);
