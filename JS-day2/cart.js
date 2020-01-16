var product = JSON.parse(localStorage.getItem('products'));
var totalCart = [];

//push data to totalCart
function pushDatatoArray() {
  var arrCart = JSON.parse(localStorage.getItem('cart'));
  for (var i = 0; i < arrCart.length; i++) {
    totalCart.push(findById(arrCart[i].id));
  }
}

// find id from id button
function findById(id) {
  for (var i = 0; i < product.length; i++) {
    if (product[i].id === id) {
      return product[i];
    }
  }
}

//render data to HTML
function render(totalCart) {
  var result = document.getElementById('js-cart');
  var arrCart = JSON.parse(localStorage.getItem('cart'));
  var content = totalCart.map(function (item, index) {
    return '<tr><th>' + parseInt(index + 1) + '</th><td><img class="cart-img"  src = ' + item.src + '></td><td>' + arrCart[index].count + '</td><td>' + item.price + '</td><td>' + arrCart[index].count * item.price + '</td><td><button type="button" class="btn btn-danger" data-id =' + item.id + '>X</button>';
  });
  result.innerHTML = content.join('');
}

//delete data 
function deleteCart() {
  var deleteBtn = document.getElementsByClassName('btn-danger');
  for (var i = 0; i < deleteBtn.length; i++) {
    deleteBtn[i].addEventListener('click', function (event) {
      var btnValue = event.target.dataset.id;

      var cart = localStorage.getItem('cart');
      cart = cart ? JSON.parse(cart) : [];
      for (var i = 0; i < cart.length; i++) {
        if (btnValue === cart[i]['id']) {
          cart.splice(i, 1);
        }
      }
      localStorage.setItem('cart', JSON.stringify(cart));
      location.reload();
      render(JSON.parse(cart));
    })
  }
}

//sum subtotal
function sumPrice() {
  var sumTotal = document.getElementById('js-sum');
  var cart = JSON.parse(localStorage.getItem('cart'));
  var sum = 0;
  for (var i = 0; i < cart.length; i++) {
    for (var j = 0; j < totalCart.length; j++) {
      if (i === j) {
        sum += cart[i].count * parseInt(totalCart[j].price);
      }
    }
  }
  sumTotal.innerText = sum;
}

pushDatatoArray();
render(totalCart);
deleteCart();
sumPrice();
