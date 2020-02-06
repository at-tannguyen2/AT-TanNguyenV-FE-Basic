//push comment to array
function pushToArr() {
  var btnAdd = document.getElementsByClassName('btn-add')[0];
  btnAdd.addEventListener('click', function () {
    var listComment = localStorage.getItem('listComment');
    listComment = listComment ? JSON.parse(listComment) : [];
    var commentValue = document.getElementById('js-value').value;
    var id = 0;
    var objCmt = {
      content: commentValue,
      id: id,
      idArtical: 1,
      isDelete: false,
      user: {
        avatar: "https://cmkt-image-prd.freetls.fastly.net/0.1.0/ps/1412243/910/607/m1/fpnw/wm0/lawyer-avatar-flat-icon-01-.jpg?1467280299&s=7f76fc556d9c3ce29567ee4f325dd1f3",
        id: 1,
        name: "Tan Nguyen V."
      }
    }
    if (listComment) {
      if (listComment.length >= 1) {
        for (var i = 0; i < listComment.length; i++) {
          var objCmt = {
            content: commentValue,
            id: listComment.length,
            idArtical: 1,
            isDelete: false,
            user: {
              avatar: "https://cmkt-image-prd.freetls.fastly.net/0.1.0/ps/1412243/910/607/m1/fpnw/wm0/lawyer-avatar-flat-icon-01-.jpg?1467280299&s=7f76fc556d9c3ce29567ee4f325dd1f3",
              id: 1,
              name: "Tan Nguyen V."
            }
          }
        }
        listComment.push(objCmt);
      } else {
        listComment.push(objCmt);
      }
    } else {
      listComment.push(objCmt);
    }
    localStorage.setItem('listComment', JSON.stringify(listComment));
    renderComment();
    document.getElementById('js-value').value = '';
  });
}

//render comment to HTML
function renderComment() {
  var resultComment = document.getElementById('js-comment');
  var listComment = JSON.parse(localStorage.getItem('listComment'));
  var content = listComment.map(function (item, index) {
    if (item.isDelete === false) {
      return '<div class="comment-result"><div class="comment-result-title"><img class="img-comment" src="' + item.user.avatar + '"><p class="bold">' + item.user.name + '</p></div><div class="comment-result-content"><p class="comment-text">' + item.content + '</p><button class="btn-delete bold" data-id="' + item.id + '"><i class="far fa-trash-alt"></i></button></div></div>';
    }
  });
  resultComment.innerHTML = content.join('');
  deleteComment();
}

//delete comment
function deleteComment() {
  var btnDelete = document.getElementsByClassName('btn-delete');
  for (var i = 0; i < btnDelete.length; i++) {
    btnDelete[i].addEventListener('click', function (event) {
      var id = +event.target.dataset.id;
      var listComment = localStorage.getItem('listComment');
      listComment = listComment ? JSON.parse(listComment) : [];
      for (var i = 0; i < listComment.length; i++) {
        if (listComment[i].id === id) {
          listComment[i].isDelete = true;
        }
      }
      alert('Comment delete successfully!!!');
      localStorage.setItem('listComment', JSON.stringify(listComment));
      renderComment();
    })
  }
}

pushToArr();
renderComment();
