pizzaJson.map((item, index) => {
  let pizzaItem = document.querySelector(".models .pizza-item").cloneNode(true);
  let modalQt = 1;
  // preencher as informações em pizzaItem
  pizzaItem.setAttribute("data-key", index);
  pizzaItem.querySelector(".pizza-item--name").innerHTML = item.name;
  pizzaItem.querySelector(
    ".pizza-item--price"
  ).innerHTML = `R$ ${item.price.toFixed(2)}`;
  pizzaItem.querySelector(".pizza-item--desc").innerHTML = item.description;
  pizzaItem.querySelector(".pizza-item--img img").src = item.img;

  // Quando clicar no modal para adicionar pizza ao carrinho

  pizzaItem.querySelector("a").addEventListener("click", (e) => {
    e.preventDefault();
    let key = e.target.closest(".pizza-item").getAttribute("data-key");
    modalQt = 1;

    document.querySelector(".pizzaInfo h1").innerHTML = pizzaJson[key].name;
    document.querySelector(".pizzaBig img").src = pizzaJson[key].img;
    document.querySelector(".pizzaInfo .pizzaInfo--desc").innerHTML =
      pizzaJson[key].description;
    document.querySelector(".pizzaInfo .pizzaInfo--actualPrice").innerHTML =
      pizzaJson[key].price;
    document
      .querySelector(".pizzaInfo--size.selected")
      .classList.remove("selected");

    // ForEach para pegar o tamanho das pizzas

    document.querySelectorAll(".pizzaInfo--size").forEach((size, sizeIndex) => {
      if (sizeIndex == 2) {
        size.classList.add("selected");
      }
      size.querySelector("span").innerHTML = pizzaJson[key].sizes[sizeIndex];
    });
    document.querySelector(".pizzaInfo--qt").innerHTML = modalQt;

    document.querySelector(".pizzaWindowArea").style.opacity = 0;
    document.querySelector(".pizzaWindowArea").style.display = "flex";
    setTimeout(() => {
      document.querySelector(".pizzaWindowArea").style.opacity = 1;
    }, 200);
  });

  document.querySelector(".pizza-area").append(pizzaItem);
});

// Eventos do MODAL

function closeModal() {
  document.querySelector(".pizzaWindowArea").style.opacity = 0;
  setTimeout(() => {
    document.querySelector(".pizzaWindowArea").style.display = "none";
  }, 500);
}
document
  .querySelectorAll(
    ".pizzaInfo--cancelButton, .pizza--Info--cancelMobileButton"
  )
  .forEach((item) => {
    item.addEventListener("click", closeModal);
  });
