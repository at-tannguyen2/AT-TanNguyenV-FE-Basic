//list products
var products = [
  {
    id: '1',
    src: 'https://cdn.24h.com.vn/upload/4-2019/images/2019-12-26/1577328430-708-1-1577321686-width660height480.jpg',
    name: 'Honda Air Blade 2019', des: 'Xe Máy Honda Air Blade 125cc 2019 (Phiên Bản Cao Cấp)',
    price: '40000000'
  },
  {
    id: '2',
    src: 'https://muaxecu.vn/wp-content/uploads/2017/11/Honda-SH-mode-2018.jpg',
    name: 'Honda SH Mode 2019',
    des: 'Xe Máy Honda SH Mode 2019 (Phiên Bản Thời Trang)',
    price: '60000000'
  },
  {
    id: '3',
    src: 'https://gonhub.com/wp-content/uploads/2018/10/20180805-08-2018-092905-4.jpg',
    name: 'Honda Future Fi',
    des: 'Xe Máy Honda Future Fi Vành Nan Hoa - Đèn LED 2019',
    price: '30000000'
  },
  {
    id: '4',
    src: 'https://blog.vred.vn/wp-content/uploads/2018/12/pasted-image-0-24.png',
    name: 'Honda Vision 2019',
    des: 'Xe Máy Honda Vision 2019 Bản Cao Cấp Smartkey',
    price: '32000000'
  },
  {
    id: '5',
    src: 'https://salt.tikicdn.com/cache/550x550/ts/product/30/1e/cb/308b992505061becd40473e7803d9646.jpg',
    name: 'Yamaha Exciter 150 GP',
    des: 'Xe Máy Yamaha Exciter 150 GP 2019',
    price: '47000000'
  },
  {
    id: '6',
    src: 'https://imgd.aeplcdn.com/476x268/bw/models/yamaha-yzf-r15-v3-dual-channel-abs--bs-vi20191209114603.jpg',
    name: 'Yamaha R15 v3',
    des: 'Xe Máy Yamaha R15 v3 GP 2019 Xanh',
    price: '75000000'
  },
  {
    id: '7',
    src: 'https://media.static-adayroi.com/sys_master/h7f/hfd/16374966779934.jpg',
    name: 'Yamaha Jupiter RC',
    des: 'Xe Máy Yamaha Jupiter RC 2019 Đỏ',
    price: '30000000'
  },
  {
    id: '8',
    src: 'https://yamaha-motor.com.vn/wp/wp-content/uploads/2018/06/Sirius-Fi-Anni-004.png',
    name: 'Yamaha Sirius Fi',
    des: 'Xe Máy Yamaha Sirius Fi Vành Đúc',
    price: '23000000'
  }
];
localStorage.setItem('products', JSON.stringify(products));
