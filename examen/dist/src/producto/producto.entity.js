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
const tienda_entity_1 = require("../tienda/tienda.entity");
const evento_por_producto_entity_1 = require("../evento_por_producto/evento_por_producto.entity");
let ProductoEntity = class ProductoEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], ProductoEntity.prototype, "numeroProducto", void 0);
__decorate([
    typeorm_1.Column({
        type: 'varchar',
    }),
    __metadata("design:type", String)
], ProductoEntity.prototype, "nombre", void 0);
__decorate([
    typeorm_1.Column({
        type: 'varchar',
    }),
    __metadata("design:type", String)
], ProductoEntity.prototype, "descripcion", void 0);
__decorate([
    typeorm_1.Column({
        type: 'decimal',
    }),
    __metadata("design:type", Number)
], ProductoEntity.prototype, "precio", void 0);
__decorate([
    typeorm_1.Column({
        type: 'date',
    }),
    __metadata("design:type", String)
], ProductoEntity.prototype, "fechaLanzamientoProducto", void 0);
__decorate([
    typeorm_1.Column({
        type: 'int',
    }),
    __metadata("design:type", Number)
], ProductoEntity.prototype, "aniosGarantia", void 0);
__decorate([
    typeorm_1.ManyToOne(type => tienda_entity_1.TiendaEntity, tienda => tienda.productos),
    __metadata("design:type", tienda_entity_1.TiendaEntity)
], ProductoEntity.prototype, "tiendaId", void 0);
__decorate([
    typeorm_1.OneToMany(type => evento_por_producto_entity_1.Evento_por_productoEntity, evento_por_producto => evento_por_producto.tabla_producto),
    __metadata("design:type", Array)
], ProductoEntity.prototype, "eventosPorProducto", void 0);
ProductoEntity = __decorate([
    typeorm_1.Entity('db_producto')
], ProductoEntity);
exports.ProductoEntity = ProductoEntity;
//# sourceMappingURL=producto.entity.js.map