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
const usuario_entity_1 = require("../usuario/usuario-entity");
const producto_entity_1 = require("../producto/producto.entity");
let TiendaEntity = class TiendaEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], TiendaEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Index(),
    typeorm_1.Column({
        name: 'nombre',
        type: 'varchar',
        length: 50,
    }),
    __metadata("design:type", String)
], TiendaEntity.prototype, "nombre", void 0);
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 50,
    }),
    __metadata("design:type", String)
], TiendaEntity.prototype, "direccion", void 0);
__decorate([
    typeorm_1.Column({
        type: 'date',
    }),
    __metadata("design:type", String)
], TiendaEntity.prototype, "fechaApertura", void 0);
__decorate([
    typeorm_1.Column({
        type: 'int',
    }),
    __metadata("design:type", Number)
], TiendaEntity.prototype, "RUC", void 0);
__decorate([
    typeorm_1.Column({
        type: 'boolean',
    }),
    __metadata("design:type", Boolean)
], TiendaEntity.prototype, "matriz", void 0);
__decorate([
    typeorm_1.ManyToOne(type => usuario_entity_1.UsuarioEntity, usuario => usuario.tiendas),
    __metadata("design:type", usuario_entity_1.UsuarioEntity)
], TiendaEntity.prototype, "usuario", void 0);
__decorate([
    typeorm_1.OneToMany(type => producto_entity_1.ProductoEntity, producto => producto.tiendaId),
    __metadata("design:type", Array)
], TiendaEntity.prototype, "productos", void 0);
TiendaEntity = __decorate([
    typeorm_1.Entity('db_tienda')
], TiendaEntity);
exports.TiendaEntity = TiendaEntity;
//# sourceMappingURL=tienda.entity.js.map