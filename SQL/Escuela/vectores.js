​ //reto 10 matriz
import { Vector } from "./vector";
export class Matrix {
    private elements: Vector[];
    constructor(n: number, m: number, k: number) {
        this.elements = new Array(n);
        for (let i = 0; i < this.elements.length; i++) {
            this.elements[i] = new Vector(m, k);
        }
    }
    print() {
        console.log(this.elements);
    }

    add(m1: Matrix) {
        let result = new Matrix(
            this.elements.length,
            this.elements[0].getElements().length,
            2
        );
        if (this.elements.length == m1.elements.length) {
            for (let i = 0; i < this.elements.length; i++) {
                for (let j = 0; j < this.elements[0].getElements().length; j++) {
                    result.elements[i].getElements()[j] =
                        this.elements[i].getElements()[j] + m1.elements[i].getElements()[j];
                }
            }
        }
        return result;
    }
    multNumber(n: number) {
        let result = new Matrix(
            this.elements.length,
            this.elements[0].getElements().length,
            2
        );
        for (let i = 0; i < this.elements.length; i++) {
            for (let j = 0; j < this.elements[0].getElements().length; j++) {
                result.elements[i].getElements()[j] =
                    this.elements[i].getElements()[j] * n;
            }
        }
        return result;
    }
    mutSpecial(n: number) {
        let result = new Matrix(
            this.elements.length,
            this.elements[0].getElements().length,
            2
        );
        for (let i = 0; i < this.elements.length; i++) {
            for (let j = 0; j < this.elements[0].getElements().length; j++) {
                if (this.elements[0].getElements()[j] % 2 == 0) {
                    result.elements[i].getElements()[j] =
                        this.elements[i].getElements()[j] * n;
                } else if (this.elements[0].getElements()[j] % 2 != 0) {
                    result.elements[i].getElements()[j] =
                        this.elements[i].getElements()[j] * (n - 1);
                }
            }
        }
        return result;
    }
}