axios
  .get("https://1eade6b4-4f0d-421e-99fd-8bbafa1b8a48.mock.pstmn.io/products")
  .then(function (result) {
    console.log("통신결과 : ", result);
    const products = result.data.products;
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
  })
  .catch(function (error) {
    console.error("error 발생 : ", error);
  });
