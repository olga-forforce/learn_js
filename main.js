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

    // let isAdmin = confirm('Вы администратор?');
    // console.log(isAdmin);
    //
    // let current = prompt('Какой сейчас год?', 2021);
    // let age = prompt('Год рождения?');
    // const res = current - age;
    // alert('Ваш возраст '+res);

    // let test1 = 123;
    // let test2 = "string";
    // console.log(String(test1), typeof String(test2));
    // console.log(Number(test1), typeof Number(test2));

    //

    // const year = 2021;
    // switch (year){
    //     case 2021:
    //         alert('2021');
    //         break;
    //     case 2022:
    //         alert('2021');
    //         break;
    //     case 2023:
    //         alert('2021');
    //         break;
    //     default://else
    //         alert('oi');
    // }

    // const year = prompt("god");
    // const test = year === "2021" ? "Yes" : "No";
    // alert(test);


