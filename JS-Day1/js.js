function bai1(a, b) {
  if (a === b) {
    return 3 * (a + b);
  }
  return a + b;
}

function bai2(a) {
  if (a <= 19) {
    return 19 - a;
  }
  return (a - 19) * 3;
}

function bai3(str) {
  var temp = 0;
  var arr1 = ['0', '3', '6', '9'];
  var arr2 = ['2', '5', '8'];
  var arr3 = ['1', '4', '7'];
  var result = [];

  for (var i = 0; i < str.length; i++) {
    console.log(str.charAt(i));
    if (str.charAt(i) !== '*') {
      temp += parseInt(str.charAt(i));
    }
  }

  if (temp % 3 === 0) {
    result = arr1.map(function(i) {
      return str.replace('*', i)
    });
  } else if (temp % 3 === 1) {
    result = arr2.map(function(i) {
      return str.replace('*', i)
    });
  } else {
    result = arr3.map(function(i) {
      return str.replace('*', i)
    });
  }
  return result;
}

function bai4(str) {
  var temp = bai3(str);
  var result = [];

  result = temp.filter(function(item) {
    return parseInt(item.charAt(item.length - 1)) % 2 === 0;
  });

  return result;
}
