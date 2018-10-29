var Veiculo = /** @class */ (function () {
    function Veiculo(motor) {
        this.motor = motor;
    }
    Veiculo.prototype.entrandoNaPista = function () {
        console.log("Entrando na pista utilizando " + this.motor);
    };
    return Veiculo;
}());
var voltaRapida = new Veiculo('V8');
voltaRapida.entrandoNaPista();
