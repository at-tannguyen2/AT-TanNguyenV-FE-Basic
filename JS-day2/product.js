
render(products);
clickCart();

function clickCart() {
  var btnClick = document.getElementsByClassName('btn-primary');
  var count = 1;
  var cart = JSON.parse(localStorage.getItem('cart'));
  for (var i = 0; i < btnClick.length; i++) {
    var indexBtn = btnClick[i];
    indexBtn.addEventListener('click', function (event) {
      var row = event.target.dataset.id;
      if (cart) {
        for (var i = 0; i < cart.length; i++) {
          if (row === cart[i]['id']) {
            cart[i]['count']++;
            break;
          }
          else if (i === (cart.length - 1)) {
            cart.push({ id: row, count: count });
            break;
          }
        }
      } else {
        cart = [];
        cart.push({ id: row, count: count });
      }
      localStorage.setItem('cart', JSON.stringify(cart));
      countCart();
    });
  }

}

function render(products) {
  var result = document.getElementsByClassName('js-result')[0];
  for (var i = 0; i < products.length; i++) {
    item = document.createElement('div');
    item.classList.add('content-item');

    border_content = document.createElement('div');
    border_content.classList.add('border-content');
    item.appendChild(border_content);

    content_img_top = document.createElement('div');
    content_img_top.classList.add('content-img-top');
    border_content.appendChild(content_img_top);

    // Product Image
    part = document.createElement('img');
    part.src = products[i].src;
    content_img_top.appendChild(part);

    content_item_body = document.createElement('div');
    content_item_body.classList.add('content-item-body');
    border_content.appendChild(content_item_body);

    // Product Name
    part = document.createElement('p');
    part.innerHTML = products[i].name;
    part.classList.add('content-item-title');
    content_item_body.appendChild(part);

    // Product Description
    part = document.createElement('p');
    part.innerHTML = products[i].des;
    part.classList.add('content-item-des');
    content_item_body.appendChild(part);

    // Product Price
    part = document.createElement("p");
    part.innerHTML = 'Giá: ' + products[i].price + ' VND';
    part.classList.add("content-item-price");
    content_item_body.appendChild(part);

    // Add to cart
    part = document.createElement('input');
    part.type = 'button';
    part.value = 'Add to Cart';
    part.classList.add('btn-primary');
    part.dataset.id = products[i].id;
    content_item_body.appendChild(part);

    result.appendChild(item);
  }
}
