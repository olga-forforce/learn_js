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
    if (youLogin == 'Админ') {
        prompt ("Ваш пароль?");
        {
            if (escape) {
                alert("Вход отменен");
            } else if (youLogin == 'Черный властелин') {
                alert("Добро пожаловать!");
            } else {
                alert("Пароль не верный");
            }
        }
    }
    else if (escape) {
        alert("Вход отменен");
    }
    else {
        alert("Я вас не знаю");
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


