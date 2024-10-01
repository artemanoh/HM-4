let input1 = document.getElementById("input1");
let input2 = document.getElementById("input1");
let button1 = document.getElementById("submitButton1");
let text1 = document.getElementById("text1");

let inputValue1;
let inputValue2;
button1.addEventListener("click", function () {
  inputValue1 = input1.value;
  inputValue2 = input1.value;
  if (inputValue1_1 && inputValue1_2) {
    text1.textContent = "Обидва поля заповнені";
  } else {
    text1.textContent = "Не всі поля заповнені";
  }
});





let input3 = document.getElementById("input3");
let input4 = document.getElementById("input4");
let button2 = document.getElementById("submitButton2");
let text2 = document.getElementById("text2");

let inputValue3;
let inputValue4;
let sum;

button2.addEventListener("click", function () {
  inputValue3 = Number(input3.value);
  inputValue4 = Number(input4.value);
  sum = inputValue3 + inputValue4;
  if (inputValue3 && inputValue4) {
    if (sum > 10) {
      text2.textContent = "Сума більша за 10";
    } else {
      text2.textContent = "Сума менша або дорівнює 10";
    }
  } else {
    text2.textContent = "Не всі поля заповнені";
  }
});






let input5 = document.getElementById("input5");
let button3 = document.getElementById("submitButton3");
let text3 = document.getElementById("text3");

let inputValue5;

button3.addEventListener("click", function () {
  inputValue5 = input5.value;
  if (inputValue5) {
    if (inputValue5.includes("JavaScript")) {
      text3.textContent = "Текст містить слово JavaScript";
    } else {
      text3.textContent = "Текст не містить слово JavaScript";
    }
  } else {
    text3.textContent = "Поле незаповнене";
  }
});






let input6 = document.getElementById("input6");
let button4 = document.getElementById("submitButton4");
let text4 = document.getElementById("text4");

let inputValue6;

button4.addEventListener("click", function () {
  inputValue6 = input6.value;
  if (inputValue6) {
    if (10 < inputValue6 && inputValue6 < 20) {
      text4.textContent = "Число входить в діапазон від 10 до 20";
    } else {
      text4.textContent = "Число не входить в діапазон від 10 до 20";
    }
  } else {
    text4.textContent = "Поле незаповнене";
  }
});






let input7 = document.getElementById("input7");
let input8 = document.getElementById("input8");
let input9 = document.getElementById("input9");
let button5 = document.getElementById("submitButton5");
let text5 = document.getElementById("text5");
let text6 = document.getElementById("text6");
let text7 = document.getElementById("text7");

let inputValue7;
let inputValue8;
let inputValue9;

button5.addEventListener("click", function () {
  inputValue7 = input7.value;
  inputValue8 = input8.value;
  inputValue9 = input9.value;

  if (inputValue7.length < 3) {
    text5.textContent = "Ім'я містить менше 3 символів";
  } else {
    text5.textContent = "";
  }
  if (!inputValue8.includes("@") && !inputValue8.includes(".")) {
    text6.textContent = "Email не містить символ @ та крапку";
  } else {
    text6.textContent = "";
  }
  if (inputValue9.length < 6) {
    text7.textContent = "Пароль має менше 6 символів";
  } else {
    text7.textContent = "";
  }
  if (
    inputValue7.length > 2 &&
    inputValue8.includes("@") &&
    inputValue8.includes(".") &&
    inputValue9.length > 5
  ) {
    window.location.href = `${window.location.href}hero.html`;
  }
});