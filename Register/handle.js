var bullets = document.getElementsByClassName("bullet");
var backBtn = document.querySelector(".btn-back");
var nextBtn = document.querySelector(".btn-next");

var firstName = document.getElementById("js-first-name");
var lastName = document.getElementById("js-last-name");
var email = document.getElementById("js-email");
var pass = document.getElementById("js-password");
var rePass = document.getElementById("js-rePassword");
var phoneNumber = document.getElementsByClassName("input-phone");
var errorMessenger = document.querySelector(".error-messenger");
var arrInfor = [];

var inputSmsCode = document.querySelectorAll(".input-code");

const MAX_STEPS = 4;
var currentStep = 0;

function addEventForNextBtn() {
  var section = document.getElementsByTagName("section");
  currentStep++;
  backBtn.disabled = false;
  for (let i = 0; i < section.length; i++) {
    if (currentStep === i) {
      section[i].classList.remove("display-none");
      section[i - 1].classList.add("display-none");
      bullets[i - 1].classList.add("completed");
    }
    nextBtn.disabled = currentStep === MAX_STEPS ? true : false;
  }
  switch (currentStep) {
    case 1:
      nextBtn.disabled = true;
      checkPhoneNumber();
      break;
    case 2:
      if (nextBtn.disabled == false) {
        alert("Your code: " + alertRandomNumber(1000, 10000));
      }
      break;
    case 3:
      if (!checkCode()) {
        alert("Please enter code number again!!!");
        return false;
      } else {
        rendertoHtml(arrInfor);
      }
      break;
    case 4:
      break;
  }
}

function addEventForBackBtn() {
  var section = document.getElementsByTagName("section");
  currentStep--;
  nextBtn.disabled = false;
  for (let i = 0; i < section.length; i++) {
    if (currentStep === i) {
      section[i + 1].classList.add("display-none");
      section[i].classList.remove("display-none");
      bullets[i].classList.remove("completed");
    }
    backBtn.disabled = currentStep === 0 ? true : false;
  }
}

backBtn.addEventListener("click", addEventForBackBtn);

nextBtn.addEventListener("click", function() {
  var valueValidate = true;

  if (!firstName.value) {
    errorMessenger.innerText = "Please enter first name!!!";
    return !valueValidate;
  }

  if (!lastName.value) {
    errorMessenger.innerText = "Please enter last name!!!";
    return !valueValidate;
  }

  if (!email.value) {
    errorMessenger.innerText = "Please enter email!!!";
    return !valueValidate;
  }

  if (email.value.indexOf("@") === -1 || email.value.length <= 6) {
    errorMessenger.innerText = "Please Enter valid Email";
    return !valueValidate;
  }

  if (!pass.value) {
    errorMessenger.innerText = "Please enter password!!!";
    return !valueValidate;
  }

  if (!rePass.value) {
    errorMessenger.innerText = "Please confirm password!!!";
    return !valueValidate;
  }

  if (rePass.value !== pass.value) {
    errorMessenger.innerText = "Please Enter Correct Password Agian";
    return !valueValidate;
  }

  var phone = getPhoneNumber();
  arrInfor.unshift({
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    phone: phone
  });
  addEventForNextBtn();
});

function getPhoneNumber() {
  var temp = "";
  for (let i = 0; i < phoneNumber.length; i++) {
    temp += phoneNumber[i].value;
  }
  return temp;
}

function checkPhoneNumber() {
  var inputPhone = document.querySelectorAll(".input-phone");
  for (let i = 0; i < inputPhone.length; i++) {
    inputPhone[i].addEventListener("input", function() {
      var temp = 0;
      for (let i = 0; i < inputPhone.length; i++) {
        temp += inputPhone[i].value.length;
      }
      nextBtn.disabled = temp === 10 ? false : true;
    });
  }
}

function alertRandomNumber(max, min) {
  var smsCode;
  smsCode = Math.floor(Math.random() * (max - min)) + min;
  localStorage.setItem("smsCode", smsCode);
  return smsCode;
}

function checkCode() {
  var valid = true;
  var temp = "";
  var smsCode;
  smsCode = localStorage.getItem("smsCode").toString();
  var sectionCode = document.querySelector(".section-code");
  var inputCode = sectionCode.getElementsByTagName("input");
  for (var i = 0; i < inputCode.length; i++) {
    temp += inputCode[i].value;
  }
  if (temp !== smsCode) {
    return !valid;
  } else {
    return valid;
  }
}

function rendertoHtml(arrInfor) {
  var fullInfor = document.querySelector(".section-information");
  for (let i = 0; i < arrInfor.length; i++) {
    var content =
      '<h3 class="form-title">Your Information:</h3><div class="full-infor"><p class="infor-item"> First name: ' +
      arrInfor[0].firstName +
      '</p><p class="infor-item"> Last name: ' +
      arrInfor[0].lastName +
      '</p><p class="infor-item">Email: ' +
      arrInfor[0].email +
      '</p><p class="infor-item">Phone number: ' +
      arrInfor[1].phone +
      "</p></div>";
  }
  fullInfor.innerHTML = content;
}
