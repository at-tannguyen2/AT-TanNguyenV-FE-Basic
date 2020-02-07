var listComment;
//get comment data from Local Storage
function getLocalStorageComments() {
  listComment = localStorage.getItem('listComment');
  listComment = listComment ? JSON.parse(listComment) : [];
}

//save comment data to Local Storage
function setLocalStorageComment() {
  localStorage.setItem('listComment', JSON.stringify(listComment));
}

//push comment to array
function pushCommentToArr() {
  var btnAdd = document.getElementsByClassName('btn-add')[0];
  btnAdd.addEventListener('click', function() {
    getLocalStorageComments();
    var commentValue = document.getElementById('js-comment-value').value;
    if (commentValue === '') {
      alert('Please add a comment...!!!')
    } else {
      var objCmt = {
        content: commentValue,
        id: listComment.length && listComment ? listComment.length : 0,
        idArticle: 1,
        isDelete: false,
        user: {
          avatar: "https://cmkt-image-prd.freetls.fastly.net/0.1.0/ps/1412243/910/607/m1/fpnw/wm0/lawyer-avatar-flat-icon-01-.jpg?1467280299&s=7f76fc556d9c3ce29567ee4f325dd1f3",
          id: 1,
          name: "Tan Nguyen V."
        }
      }
      listComment.push(objCmt);
      setLocalStorageComment();
      renderComment();
      document.getElementById('js-comment-value').value = '';
    }
  });
}

//render comment to HTML
function renderComment() {
  var resultComment = document.getElementById('js-result-comment');
  getLocalStorageComments();
  var content = listComment.map(function(item) {
    if (!item.isDelete) {
      return '<div class="comment-result"><div class="comment-result-article"><img class="img-comment" src="' + item.user.avatar + '"><p class="bold">' + item.user.name + '</p></div><div class="comment-result-content d-flex align-item-center"><p class="comment-text">' + item.content + '</p><button class="btn-delete bold" data-id="' + item.id + '"><i class="far fa-trash-alt"></i></button></div></div>';
    }
  });
  resultComment.innerHTML = content.join('');
  deleteComment();
}

//delete comment
function deleteComment() {
  var btnDelete = document.getElementsByClassName('btn-delete');
  for (var i = 0; i < btnDelete.length; i++) {
    btnDelete[i].addEventListener('click', function(event) {
      var id = +event.target.dataset.id;
      getLocalStorageComments();
      for (var i = 0; i < listComment.length; i++) {
        if (listComment[i].id === id) {
          listComment[i].isDelete = true;
        }
      }
      alert('Comment delete successfully!!!');
      setLocalStorageComment();
      renderComment();
    })
  }
}

pushCommentToArr();
renderComment();
