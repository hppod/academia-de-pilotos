

let voltaRapida = new Veiculo('V8')
voltaRapida.entrandoNaPista()



let voltaPorsche = new Porsche()
voltaPorsche.entrandoNaPista()



let bomParaPista = (voltaRapida: CavalosMotor) => voltaRapida.numeroCavalos > 300

console.log(`O carro tem boa cavalaria para a pista? ${bomParaPista(voltaPorsche) ? 'SIM' : 'NÃO'}`)