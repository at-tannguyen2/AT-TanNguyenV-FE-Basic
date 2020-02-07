var listNews;
//get News data from localStorage
function getLocalStorageNews() {
  listNews = localStorage.getItem('listNews');
  listNews = listNews ? JSON.parse(listNews) : [];
}

//save News data to localStorage
function setLocalStorageNews() {
  localStorage.setItem('listNews', JSON.stringify(listNews));
}

//News data
var listNews = [
  {
    id: '1',
    title: 'Bệnh nhân thứ 9 nhiễm virus corona tại Việt Nam',
    content: 'Bệnh nhân mới có kết quả dương tính với virus corona là ông T.C.P., 30 tuổi, địa chỉ xã Minh Quang, huyện Tam Đảo, tỉnh Vĩnh Phúc. Đây cũng là nhân viên Công ty TNHH Nihon Plast của Nhật Bản được cử sang Trung Quốc tập huấn tại Thành phố Vũ Hán, tỉnh Hồ Bắc, Trung Quốc.',
    isDelete: false
  }
];
setLocalStorageNews();

//render news data to HTML
function renderNews() {
  var resultNews = document.getElementsByClassName('js-result-news')[0];
  getLocalStorageNews();
  var content = listNews.map(function(item) {
    return '<div class="news-title"><h1 class="title text-primary text-upscase bold text-center">' + item.title + '</h1></div><div class="news-text"><p>' + item.content + '</p></div>';
  });
  resultNews.innerHTML = content.join('');
}

renderNews();
