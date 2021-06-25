/*
    Function buttons of calculator
*/
let output = document.querySelector('.output-field');
let history = document.querySelector('.history');
let last_number = 0;
let num_points = 0;

function clearButton() {
    history.innerHTML = "<---- history is empty ---->";
    output.innerHTML = 0;
    num_points = 0;
}

function input(n) {
    if (n === "-" ||
        n === "+" ||
        n === "*" ||
        n === "/") {
    clearResult(1);
    let lastSymbol = output.innerHTML.slice(-1);
    num_points = 0;
    if (lastSymbol === "-" ||
        lastSymbol === "+" ||
        lastSymbol === "*" ||
        lastSymbol === "/") {
        output.innerHTML = output.innerHTML;
    } else {
        output.innerHTML = `${output.innerHTML}` + `${n}`;
    }
    } else if (n === ".") {
        clearResult(0);
      if (num_points >= 1) {
          output.innerHTML = output.innerHTML;
      } else {
            num_points++;
            output.innerHTML =`${output.innerHTML}` + `${n}`;
      }
    } else {
        clearResult(0);
      if (output.innerHTML !== "0") {
          output.innerHTML = `${output.innerHTML}` + `${n}`;
      } else {
            output.innerHTML = `${n}`;
      }
    }
}

function clearResult(i) {
    if ( i === 0 && output.classList.contains("result") ) {
        output.innerHTML = "0";
        num_points = 0;
        output.classList.remove("result");
    } else {
        output.classList.remove("result");
    }

}

function percent() {
    if (!isNaN(Number(output.innerHTML)) ) {
        let res = Number(output.innerHTML) / 100;
        output.innerHTML = res;
    }
}

function result() {
    let res = eval(output.innerHTML);
    history.innerHTML = output.innerHTML + ' = ' + res;
    output.classList.add("result");
    output.innerHTML = res;
}

function change(){
    if ( !isNaN(output.innerHTML) ) {
        output.innerHTML = -output.innerHTML;
    } else {
        last_number = output.innerHTML.match(/[0-9]+(?!.*[0-9])/);
        console.log(last_number);
    }
}

function type_zero() {
    output.innerHTML = "0";
}

let delayHead = document.getElementById('header');
delayHead.style.maxHeight = "0px";

function delayHeader() {
    let delay = document.getElementById('header');
    setTimeout(function () {
        delay.style.maxHeight = "60px";
    }, 2000);
}

delayHeader();