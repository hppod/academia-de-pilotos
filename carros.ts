import { Veiculo, CavalosMotor } from "./carros-base";

export class Porsche extends Veiculo implements CavalosMotor {

    numeroCavalos: number

    constructor() {
        super('3.0 V6')
        this.numeroCavalos = 250
    }

    entrandoNaPista() {
        if (Math.random() >= 0.5) {
            super.entrandoNaPista()
        } else {
            console.log('A pista está lotada" Volte mais tarde!')
        }
    }
}