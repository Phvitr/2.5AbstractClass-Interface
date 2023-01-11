"use strict";
exports.__esModule = true;
var Circle_1 = require("./Circle");
var circle = new Circle_1.Circle('circle1', 5);
console.log(circle.calculateArea());
circle.resize(Math.floor(Math.random() * 100));
console.log(circle.radius);
console.log(circle.calculateArea());
// console.log(Math.pow(r,2)) ;
