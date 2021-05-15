var products = [
  {
    name: "키보드",
    price: 50000,
    seller: "진우",
    imageUrl: "images/products/keyboard1.jpg",
  },
  {
    name: "키보드2",
    price: 100000,
    seller: "철수",
    imageUrl: "images/products/keyboard2.jpg",
  },
  {
    name: "마우스",
    price: 80000,
    seller: "민수",
    imageUrl: "images/products/mouse.jpg",
  },
];
let productsHtml = "";
for (var i = 0; i < products.length; i++) {
  let product = products[i];
  productsHtml =
    productsHtml +
    '<div class="product-card">' +
    " <div>" +
    '  <img class="product_img" src="' +
    product.imageUrl +
    '" />' +
    " </div>" +
    ' <div class="product-contents">' +
    ' <span class="product-name">' +
    product.name +
    "</span>" +
    '<span class="product-price">' +
    product.price +
    "</span>" +
    ' <div class="product-seller">' +
    '   <img class="product-avatar" src="images/icons/avatar.png" />' +
    "   <span>" +
    product.seller +
    "</span>" +
    " </div>" +
    " </div>" +
    "  </div>";
}

document.querySelector("#product-list").innerHTML = productsHtml;
