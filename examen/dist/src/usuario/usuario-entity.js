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
const roles_por_usuario_entity_1 = require("../roles_por_usuario/roles_por_usuario.entity");
let UsuarioEntity = class UsuarioEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], UsuarioEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        nullable: false,
        name: 'nombre',
        type: 'varchar',
        length: 50,
        default: 'nombre'
    }),
    __metadata("design:type", String)
], UsuarioEntity.prototype, "nombre", void 0);
__decorate([
    typeorm_1.Column({
        nullable: false,
        name: 'correo',
        type: 'varchar',
        length: 50,
    }),
    __metadata("design:type", String)
], UsuarioEntity.prototype, "correo", void 0);
__decorate([
    typeorm_1.Column({
        nullable: false,
        type: 'varchar',
    }),
    __metadata("design:type", String)
], UsuarioEntity.prototype, "fechaNacimiento", void 0);
__decorate([
    typeorm_1.Column({
        nullable: false,
        type: 'varchar',
        length: 16
    }),
    __metadata("design:type", String)
], UsuarioEntity.prototype, "password", void 0);
__decorate([
    typeorm_1.OneToMany(type => tienda_entity_1.TiendaEntity, tienda => tienda.usuario),
    __metadata("design:type", Array)
], UsuarioEntity.prototype, "tiendas", void 0);
__decorate([
    typeorm_1.OneToMany(type => roles_por_usuario_entity_1.Roles_por_usuarioEntity, roles_por_usuario => roles_por_usuario.usuario),
    __metadata("design:type", Array)
], UsuarioEntity.prototype, "roles_por_usuario", void 0);
UsuarioEntity = __decorate([
    typeorm_1.Entity('db_usuario')
], UsuarioEntity);
exports.UsuarioEntity = UsuarioEntity;
//# sourceMappingURL=usuario-entity.js.map