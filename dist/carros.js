"use strict";
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
exports.__esModule = true;
var carros_base_1 = require("./carros-base");
var Porsche = /** @class */ (function (_super) {
    __extends(Porsche, _super);
    function Porsche() {
        var _this = _super.call(this, '3.0 V6') || this;
        _this.numeroCavalos = 250;
        return _this;
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
}(carros_base_1.Veiculo));
exports.Porsche = Porsche;
