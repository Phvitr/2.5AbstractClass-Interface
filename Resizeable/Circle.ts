import {Shape} from "./Shape";
import {resizeable} from "./Interface";

export class Circle extends Shape implements resizeable {
    radius: number;

    constructor(name: string, radius: number) {
        super(name);
        this.radius = radius;
    }

    calculateArea(): number {
        return Math.PI * Math.pow(this.radius, 2);
    }

    calculatePerimeter(): number {
        return Math.PI * this.radius * 2;
    }
    resize(rate: number) {
         this.radius =  this.radius * (1 + rate/100);
    }

}