//push comment to array
function pushCommentToArr() {
  var btn = document.getElementsByClassName('btn-add')[0];
  btn.addEventListener('click', function () {
    var comment = localStorage.getItem('comment');
    comment = comment ? JSON.parse(comment) : [];
    if (document.getElementById('js-value').value === '') {
      alert('Please write a comment!!!!')
    } else {
      comment.push(document.getElementById('js-value').value);
      localStorage.setItem('comment', JSON.stringify(comment));
      render();
      document.getElementById('js-value').value = '';
    }
  });
}

//render comment array to HTML
function render() {
  var resultComment = document.getElementById('js-comment');
  var comment = JSON.parse(localStorage.getItem('comment'));
  var content = comment.map(function (item, index) {
    return '<div class="comment-result"><div class="comment-result-title"><img class="img-comment" src="https://image.flaticon.com/icons/png/512/805/805401.png"><p class="bold">Ronaldo</p></div><div class="comment-result-content"><p class="comment-text">' + item + '</p><button class="btn-delete bold" data-id = ' + index + '>Remove</button></div></div>';
  });
  resultComment.innerHTML = content.join('');
  removeComment();
}

//delete comment
function removeComment() {
  var btnDelete = document.getElementsByClassName('btn-delete');
  var comment = localStorage.getItem('comment');
  comment = comment ? JSON.parse(comment) : [];
  for (var i = 0; i < btnDelete.length; i++) {
    btnDelete[i].addEventListener('click', function (event) {
      var idBtn = event.target.dataset.id;
      comment.splice(idBtn, 1);
      localStorage.setItem('comment', JSON.stringify(comment));
      render();
    })
  }
}

pushCommentToArr();
render();
