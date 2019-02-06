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
const evento_por_producto_entity_1 = require("../evento_por_producto/evento_por_producto.entity");
let VentaEntity = class VentaEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], VentaEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        nullable: false
    }),
    __metadata("design:type", String)
], VentaEntity.prototype, "nombre", void 0);
__decorate([
    typeorm_1.Column({
        type: 'date'
    }),
    __metadata("design:type", String)
], VentaEntity.prototype, "fecha", void 0);
__decorate([
    typeorm_1.Column({
        type: 'float'
    }),
    __metadata("design:type", Number)
], VentaEntity.prototype, "latitud", void 0);
__decorate([
    typeorm_1.Column({
        type: 'float'
    }),
    __metadata("design:type", Number)
], VentaEntity.prototype, "longitud", void 0);
__decorate([
    typeorm_1.OneToMany(type => evento_por_producto_entity_1.Evento_por_productoEntity, evento_por_producto => evento_por_producto.tabla_evento),
    __metadata("design:type", Array)
], VentaEntity.prototype, "eventosPorProducto", void 0);
VentaEntity = __decorate([
    typeorm_1.Entity('db_evento')
], VentaEntity);
exports.VentaEntity = VentaEntity;
//# sourceMappingURL=venta.entity.js.map