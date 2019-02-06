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
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const venta_entity_1 = require("../venta/venta.entity");
const producto_entity_1 = require("../producto/producto.entity");
let Evento_por_productoEntity = class Evento_por_productoEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Evento_por_productoEntity.prototype, "numeroProducto", void 0);
__decorate([
    typeorm_1.ManyToOne(type => venta_entity_1.VentaEntity, evento => evento.eventosPorProducto),
    __metadata("design:type", venta_entity_1.VentaEntity)
], Evento_por_productoEntity.prototype, "tabla_evento", void 0);
__decorate([
    typeorm_1.ManyToOne(type => producto_entity_1.ProductoEntity, producto => producto.eventosPorProducto),
    __metadata("design:type", producto_entity_1.ProductoEntity)
], Evento_por_productoEntity.prototype, "tabla_producto", void 0);
Evento_por_productoEntity = __decorate([
    typeorm_1.Entity('db_evento_por_producto')
], Evento_por_productoEntity);
exports.Evento_por_productoEntity = Evento_por_productoEntity;
//# sourceMappingURL=evento_por_producto.entity.js.map