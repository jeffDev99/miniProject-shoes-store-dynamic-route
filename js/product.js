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
let locationSearch = location.search;
let idParam = new URLSearchParams(locationSearch);
let valueIdParam = idParam.get("id");
let $ = document;
let detailContainer = $.querySelector(".details");

let findedProduct = products.find((product)=>{
    return Number(valueIdParam) === product.id
})
console.log(findedProduct);

detailContainer.insertAdjacentHTML(
  "beforeend",
  `
<div class="desc">
        <h1>${findedProduct.title}</h1>
        <p>
        ${findedProduct.subtitle}
        </p>
      </div>
      <div class="image">
        <img src="${findedProduct.img}" />
      </div>
`
);
