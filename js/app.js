let products = [
  {
    id: 1,
    title: "Shoes 1",
    subtitle: "Lorem ipsum, or lipsum as it is sometimes known",
    img: "./images/1.png",
    price: "90$",
  },
  {
    id: 2,
    title: "Shoes 2",
    subtitle: "Lorem ipsum, or lipsum as it is sometimes known",
    img: "./images/2.png",
    price: "10$",
  },
  {
    id: 3,
    title: "Shoes 3",
    subtitle: "Lorem ipsum, or lipsum as it is sometimes known",
    img: "./images/3.png",
    price: "20$",
  },
  {
    id: 4,
    title: "Shoes 4",
    subtitle: "Lorem ipsum, or lipsum as it is sometimes known",
    img: "./images/4.png",
    price: "30$",
  },
];
let $ = document;
let productContainer = $.querySelector(".container");
products.forEach((product) => {
  productContainer.insertAdjacentHTML(
    "beforeend",
    `
    <div class="product-card">
    <h1>${product.title}</h1>
    <p>${product.subtitle}</p>
    <div class="product-pic" style="background-image: url(${product.img});"></div>
    <div class="product-info">
      <div class="product-price">${product.price}</div>
      <a href="product.html?id=${product.id}" + product.id + " class="product-button">See More</a>
    </div>
  </div>
    `
  );
});

