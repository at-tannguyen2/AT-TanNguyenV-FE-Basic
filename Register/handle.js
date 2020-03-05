var bullets = document.getElementsByClassName("bullet");
var backBtn = document.querySelector(".btn-back");
var nextBtn = document.querySelector(".btn-next");
var errorMessenger = document.querySelector(".error-messenger");

var firstName = document.getElementById("js-first-name");
var lastName = document.getElementById("js-last-name");
var email = document.getElementById("js-email");
var pass = document.getElementById("js-password");
var rePass = document.getElementById("js-rePassword");
var phoneNumber = document.getElementsByClassName("input-phone");
var arrInfor = [];

var inputSmsCode = document.getElementsByClassName("input-code");

var currentStep = 0;
var smsCode;

//function for next button when click to change section
function addEventForNextBtn() {
  currentStep++;
  backBtn.disabled = false;
  switch (currentStep) {
    case 1:
      nextBtn.disabled = true;
      checkPhoneNumber();
      nextStep();
      break;
    case 2:
      if (nextBtn.disabled === false) {
        alert("Your code: " + alertRandomNumber(1000, 10000));
      }
      nextBtn.disabled = true;
      nextStep();
      break;
    case 3:
      nextStep();
      rendertoHtml(arrInfor);
      break;
    case 4:
      nextStep();
      nextBtn.disabled = true;
      break;
  }
}
function nextStep() {
  //select all element section (register, phone number, sms code, full information, final section)
  var section = document.getElementsByTagName("section");
  for (let i = 0; i < section.length; i++) {
    if (currentStep === i) {
      //remove display-none class for section if step = section and add display-none class for before this class
      section[i].classList.remove("display-none");
      section[i - 1].classList.add("display-none");
      //add class complete for before this bullets = section
      bullets[i - 1].classList.add("completed");
      break;
    }
  }
}

function alertRandomNumber(max, min) {
  //random sms code include 4 number character
  smsCode = Math.floor(Math.random() * (max - min)) + min;
  //save sms code in the local Storage
  localStorage.setItem("smsCode", smsCode);
  //return sms code to use alert
  return smsCode;
}

function addEventForBackBtn() {
  //select all element section (register, phone number, sms code, full information, final section)
  var section = document.getElementsByTagName("section");
  currentStep--;
  nextBtn.disabled = false;
  for (let i = 0; i < section.length; i++) {
    if (currentStep === i) {
      //remove display-none class for section if step = section and add display-none class for after this class
      section[i + 1].classList.add("display-none");
      section[i].classList.remove("display-none");
      //add class complete for this bullets = section
      bullets[i].classList.remove("completed");
      break;
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
  var inputPhone = document.getElementsByClassName("input-phone"); //select all elment input-code to use check sms code
  for (let i = 0; i < inputPhone.length; i++) {
    inputPhone[i].addEventListener("input", function() {
      //add input event for all element input-code
      var temp = 0;
      for (let i = 0; i < inputPhone.length; i++) {
        temp += inputPhone[i].value.length; //get length from all input-code
      }
      nextBtn.disabled = temp === 10 ? false : true;
    });
  }
}

//render data to information section (data is saved in array)
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

function addEventForCodeInput() {
  smsCode = localStorage.getItem("smsCode").toString();
  code = document.getElementsByClassName("input-code"); //select all elment input-code to use check sms code
  for (let i = 0; i < code.length; i++) {
    code[i].addEventListener("input", function() {
      //add input event for all element input-code
      var temp = "";
      for (let i = 0; i < code.length; i++) {
        temp += code[i].value; //get sum value from input-code
      }
      nextBtn.disabled = temp == smsCode ? false : true;
      code[i + 1].focus(); //add focus envent to next input
    });
  }
}

addEventForCodeInput();
