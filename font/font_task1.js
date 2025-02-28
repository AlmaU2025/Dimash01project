function example1() {
    let output = "";
    for (let i = 0; i < 5; i++) {
        output += "Итерация " + i + "<br>";
    }
    document.getElementById("output").innerHTML = output;
}

function example2() {
    let output = "";
    for (let i = 10; i > 0; i--) {
        output += "Обратный отсчет: " + i + "<br>";
    }
    document.getElementById("output").innerHTML = output;
}

function example3() {
    let output = "";
    for (let i = 0; i <= 20; i += 2) {
        output += "Четное число: " + i + "<br>";
    }
    document.getElementById("output").innerHTML = output;
}

function example4() {
    let output = "";
    for (let i = 1; i <= 10; i++) {
        output += "5 * " + i + " = " + (5 * i) + "<br>";
    }
    document.getElementById("output").innerHTML = output;
}

function example5() {
    let output = "";
    for (let i = 0; i < 10; i++) {
        if (i % 2 === 0) {
            output += i + " - четное число<br>";
        } else {
            output += i + " - нечетное число<br>";
        }
    }
    document.getElementById("output").innerHTML = output;
}

function example6() {
    let output = "";
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 3; j++) {
            output += "i = " + i + ", j = " + j + "<br>";
        }
    }
    document.getElementById("output").innerHTML = output;
}

function example7() {
    let output = "";
    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        sum += i;
        output += "Сумма на итерации " + i + ": " + sum + "<br>";
    }
    document.getElementById("output").innerHTML = output;
}

function example8() {
    let output = "";
    let arr = ["Яблоко", "Банан", "Вишня", "Дыня"];
    for (let i = 0; i < arr.length; i++) {
        output += "Фрукт: " + arr[i] + "<br>";
    }
    document.getElementById("output").innerHTML = output;
}

function example9() {
    let output = "";
    for (let i = 0; i < 10; i++) {
        if (i === 5) {
            break;
        }
        output += "Итерация " + i + "<br>";
    }
    document.getElementById("output").innerHTML = output;
}

function example10() {
    let output = "";
    for (let i = 0; i < 10; i++) {
        if (i === 5) {
            continue;
        }
        output += "Итерация " + i + "<br>";
    }
    document.getElementById("output").innerHTML = output;
}