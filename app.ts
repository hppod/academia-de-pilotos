class Veiculo{

    constructor(public motor: string){

    }

    entrandoNaPista(){
        console.log(`Entrando na pista utilizando ${this.motor}`)
    }
}

let voltaRapida = new Veiculo('V8')
voltaRapida.entrandoNaPista()

class Porsche extends Veiculo implements CavalosMotor{

    numeroCavalos: number

    constructor(){
        super('3.0 V6')
        this.numeroCavalos = 250
    }

    entrandoNaPista(){
        if(Math.random() >= 0.5){
            super.entrandoNaPista()
        }else{
            console.log('A pista está lotada" Volte mais tarde!')
        }
    }
}

let voltaPorsche = new Porsche()
voltaPorsche.entrandoNaPista()

interface CavalosMotor{
    numeroCavalos: number
}