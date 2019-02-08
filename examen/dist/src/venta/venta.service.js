"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a;
const common_1 = require("@nestjs/common");
const venta_entity_1 = require("../venta/venta.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
let VentaService = class VentaService {
    constructor(_ventaRepository) {
        this._ventaRepository = _ventaRepository;
        this.ventas = [];
    }
    buscar(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._ventaRepository.find(parametros);
        });
    }
    crear(nuevaVenta) {
        return __awaiter(this, void 0, void 0, function* () {
            const ventaEntity = this._ventaRepository
                .create(nuevaVenta);
            console.log("va a guardar");
            const ventaCreado = yield this._ventaRepository
                .save(ventaEntity);
            return ventaCreado;
        });
    }
    actualizar(idVenta, nuevaVenta) {
        nuevaVenta.id = idVenta;
        const ventaEntity = this._ventaRepository.create(nuevaVenta);
        return this._ventaRepository.save(ventaEntity);
    }
    borrar(idVenta) {
        return __awaiter(this, void 0, void 0, function* () {
            const ventaEntityAEliminar = yield this._ventaRepository
                .create({
                id: idVenta
            });
            return this._ventaRepository.remove(ventaEntityAEliminar);
        });
    }
    buscarPorId(idVenta) {
        return this._ventaRepository.findOne(idVenta);
    }
};
VentaService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_2.InjectRepository(venta_entity_1.VentaEntity)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_1.Repository !== "undefined" && typeorm_1.Repository) === "function" ? _a : Object])
], VentaService);
exports.VentaService = VentaService;
//# sourceMappingURL=venta.service.js.map