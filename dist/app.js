var message = "Hello World";
console.log(message);
var meuCarroFavorito;
meuCarroFavorito = 'Porsche';
console.log("Meu carro favorito é um " + meuCarroFavorito);
var carroRapido = function (velocidade) {
    return velocidade > 200;
};
var velocidadeFinal = 250;
console.log("A velocidade final " + velocidadeFinal + " \u00E9 suficiente para ele ser considerado um carro r\u00E1pido? " + (carroRapido(velocidadeFinal) ? 'SIM' : 'NÃO'));
