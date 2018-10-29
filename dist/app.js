var voltaRapida = new Veiculo('V8');
voltaRapida.entrandoNaPista();
var voltaPorsche = new Porsche();
voltaPorsche.entrandoNaPista();
var bomParaPista = function (voltaRapida) { return voltaRapida.numeroCavalos > 300; };
console.log("O carro tem boa cavalaria para a pista? " + (bomParaPista(voltaPorsche) ? 'SIM' : 'NÃO'));
