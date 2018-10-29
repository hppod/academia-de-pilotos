let message: string = "Hello World"
console.log(message)

let meuCarroFavorito
meuCarroFavorito = 'Porsche'
console.log("Meu carro favorito é um " + meuCarroFavorito)

let carroRapido = function (velocidade: number): boolean {
    return velocidade > 200
}

let velocidadeFinal = 250
console.log(`A velocidade final ${velocidadeFinal} é suficiente para ele ser considerado um carro rápido? ${carroRapido(velocidadeFinal) ? 'SIM' : 'NÃO'}`)

let carro = (modelo: string) => console.log(`O carro é um ${modelo}`)
carro('Ferrari')