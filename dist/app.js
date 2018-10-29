var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Porsche = /** @class */ (function (_super) {
    __extends(Porsche, _super);
    function Porsche() {
        return _super.call(this, '3.0 V6') || this;
    }
    Porsche.prototype.entrandoNaPista = function () {
        if (Math.random() >= 0.5) {
            _super.prototype.entrandoNaPista.call(this);
        }
        else {
            console.log('A pista está lotada" Volte mais tarde!');
        }
    };
    return Porsche;
}(Veiculo));
var voltaPorsche = new Porsche();
voltaPorsche.entrandoNaPista();
