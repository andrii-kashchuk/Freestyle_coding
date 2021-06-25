import {sum, multiply, devide, minus} from "./formula.js";

let x = prompt("Enter the number X:");
let y = prompt("Enter the number Y:");

console.log(`The sum of ${x} and ${y} is: ${sum(x, y).toFixed(2)}`);
console.log(`The result of multiplying of ${x} and ${y} is: ${multiply(x, y).toFixed(2)}`);
console.log(`The result of deviding of ${x} and ${y} is equal to: ${devide(x, y).toFixed(2)}`);
console.log(`The result of subtracting of ${x} and ${y} is equal to: ${minus(x, y).toFixed(2)}`);

let addF = document.getElementById("addFunc").innerHTML =
    `The sum of ${x} and ${y} is equal to: ${sum(x, y).toFixed(2)}`;
let mulF = document.getElementById("multiplyFunc").innerHTML =
    `The result of multiplying of ${x} and ${y} is equal to: ${multiply(x, y).toFixed(2)}`;
let devF = document.getElementById("devideFunc").innerHTML =
    `The result of deviding of ${x} and ${y} is equal to: ${devide(x, y).toFixed(2)}`;
let minF = document.getElementById("minusFunc").innerHTML =
    `The result of subtracting of ${x} and ${y} is equal to: ${minus(x, y).toFixed(2)}`;

