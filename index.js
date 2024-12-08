// Task 1
const page1 = prompt("Введіть щось");
const page2 = prompt("Введіть щось");

if (page1 && page2) {
  alert("Обидва поля заповнені");
} else {
  alert("Не всі поля заповнені");
}

// Task 2
const page3 = Number(prompt("Введыть якесь число")) + Number(prompt("Введыть число"))

if (page3 > 10) {
  alert("Сума чисел більша за 10");
} else {
  alert("Сума чисел не більша за 10 або дорівнює 10");
}

// Task 3
const page4 = prompt("Введіть якесь слово")
if(page4.includes("JavaScript")) {
  alert("Тут є слово JavaScript")
} else {
  alert("Тут немає слова JavaScript")
}

// Task 4
const page5 = Number(prompt("Введіть будь яке число"));
if(page5 > 10 && page5 < 20) {
  alert("Число входить в діапазон від 10 до 20")
} else {
  alert("Число не входить в діапазон від 10 до 20")
}

// Task 5

const username = prompt("Введіть своє ім'я");
console.log(username);
const userEmail = prompt("Введіть свою електронну пошту");
console.log(userEmail);
const userPassword = prompt("Введіть свій пароль");
console.log(userPassword);

if(username >= 3) {
  alert("Ви перенаправлені на іншу сторінку!");
} else if (
  userEmail.includes("@gmail.com") || 
  userEmail.includes("@yahoo.com") || 
  userEmail.includes("@ukr.net")
) {
  alert("Ви перенаправлені на іншу сторінку!");
} else if (userPassword.length >= 6) {
  alert("Ви перенаправлені на іншу сторінку!");
} else {
  alert("Ви не перненаправлені на іншу сторінку")
}