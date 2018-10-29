class Veiculo{

    constructor(public motor: string){

    }

    entrandoNaPista(){
        console.log(`Entrando na pista utilizando ${this.motor}`)
    }
}

let voltaRapida = new Veiculo('V8')
voltaRapida.entrandoNaPista()