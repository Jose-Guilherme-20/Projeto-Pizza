pizzaJson.map((item) => {
  let pizzaItem = document.querySelector(".models .pizza-item").cloneNode(true);

  // preencher as informações em pizzaItem

  pizzaItem.querySelector(".pizza-item--name").innerHTML = item.name;
  pizzaItem.querySelector(
    ".pizza-item--price"
  ).innerHTML = `R$ ${item.price.toFixed(2)}`;
  pizzaItem.querySelector(".pizza-item--desc").innerHTML = item.description;
  pizzaItem.querySelector(".pizza-item--img img").src = item.img;

  document.querySelector(".pizza-area").append(pizzaItem);
});
