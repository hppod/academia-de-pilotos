class Veiculo {

    constructor(public motor: string) {

    }

    entrandoNaPista() {
        console.log(`Entrando na pista utilizando ${this.motor}`)
    }
}

interface CavalosMotor {
    numeroCavalos: number
}

export { Veiculo, CavalosMotor }