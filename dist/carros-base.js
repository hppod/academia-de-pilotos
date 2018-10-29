"use strict";
exports.__esModule = true;
var Veiculo = /** @class */ (function () {
    function Veiculo(motor) {
        this.motor = motor;
    }
    Veiculo.prototype.entrandoNaPista = function () {
        console.log("Entrando na pista utilizando " + this.motor);
    };
    return Veiculo;
}());
exports.Veiculo = Veiculo;
