import {Circle} from './Circle';
import {Rectangle} from './Rectangle';
import {Cylinder} from "./Cylinder";

let circle = new Circle('circle1', 5);
console.log(circle.calculateArea());

circle.resize(Math.floor(Math.random() * 100 ));
console.log(circle.calculateArea());
