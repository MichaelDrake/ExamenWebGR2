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
Object.defineProperty(exports, "__esModule", { value: true });
var _a;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const tienda_entity_1 = require("./tienda.entity");
let TiendaService = class TiendaService {
    constructor(_tiendaRepository) {
        this._tiendaRepository = _tiendaRepository;
        this.arreglo = [
            {
                id: 1,
                nombre: 'A',
                descripcion: 'Descripcion A',
            },
            {
                id: 2,
                nombre: 'B',
                descripcion: 'Descripcion B',
            },
            {
                id: 3,
                nombre: 'C',
                descripcion: 'Descripcion C',
            },
            {
                id: 4,
                nombre: 'D',
                descripcion: 'Descripcion D',
            },
        ];
        this.numeroRegistro = 5;
    }
    buscar(parametrosBusqueda) {
        return this._tiendaRepository.find(parametrosBusqueda);
    }
    crear(tienda) {
        const noticiaEntity = this._tiendaRepository.create(tienda);
        return this._tiendaRepository.save(noticiaEntity);
    }
    eliminar(idNoticia) {
        const noticiaEliminar = this._tiendaRepository.create({
            id: idNoticia,
        });
        return this._tiendaRepository.remove(noticiaEliminar);
    }
    actulizar(nuevaTienda) {
        const tiendaEntity = this._tiendaRepository.create(nuevaTienda);
        return this._tiendaRepository.save(tiendaEntity);
    }
    buscarPorId(idTienda) {
        return this._tiendaRepository.findOne(idTienda);
    }
};
TiendaService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_2.InjectRepository(tienda_entity_1.TiendaEntity)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_1.Repository !== "undefined" && typeorm_1.Repository) === "function" ? _a : Object])
], TiendaService);
exports.TiendaService = TiendaService;
//# sourceMappingURL=tienda.service.js.map