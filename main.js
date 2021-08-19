function buttonAboutJS() {
    const year = prompt("Каково официальное название JavaScript?");

    if (year == "ECMAScript") {
        alert("Верно!");
    } else {
        alert("Не знаете, что такое ECMAScript!?");
    }
}
function buttonClick() {
    const num = prompt('Ввод значения');
    if (num > 0) {
        alert('1');
    }
    else if (num < 0) {
        alert('-1');
    }
    else {
        alert('0');
    }
}
function login() {
    let youLogin = prompt('Введите ваш логин');
    if (youLogin == 'Admin') {
        const youPassword = prompt ("Ваш пароль?");
            if (youPassword == 'Qweqwe') {
                alert("Добро пожаловать!");
            } else if (youPassword == null) {
                alert("Вход отменен");
            } else {
                alert("Пароль не верный");
            }
    }
    else if (youLogin == null) {
        alert("Вход отменен");
    }
    else {
        alert("Я вас не знаю");
    }
}
function cycle1(){
    for (var i = 0; i < 3; i++){
        alert("номер" + i + "!");
    }
}
function cycle2(){
    let i = 0;
    while (i < 3){
        i = i + 1;
        alert("номер" + i + "!");
    }
}
function Num() {
    while (true) {
        const value = prompt('Введите число <100');
        console.log(value)
        if (+value > 100 || value == null) {
            break
        }

    }
}

