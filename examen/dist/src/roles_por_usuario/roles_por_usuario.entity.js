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
const roll_entity_1 = require("../rol/roll.entity");
let Roles_por_usuarioEntity = class Roles_por_usuarioEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Roles_por_usuarioEntity.prototype, "numeroProducto", void 0);
__decorate([
    typeorm_1.ManyToOne(type => usuario_entity_1.UsuarioEntity, usuario => usuario.roles_por_usuario),
    __metadata("design:type", usuario_entity_1.UsuarioEntity)
], Roles_por_usuarioEntity.prototype, "usuario", void 0);
__decorate([
    typeorm_1.ManyToOne(type => roll_entity_1.RollEntity, rol => rol.roles),
    __metadata("design:type", usuario_entity_1.UsuarioEntity)
], Roles_por_usuarioEntity.prototype, "rol", void 0);
Roles_por_usuarioEntity = __decorate([
    typeorm_1.Entity('db_roles_por_usuario')
], Roles_por_usuarioEntity);
exports.Roles_por_usuarioEntity = Roles_por_usuarioEntity;
//# sourceMappingURL=roles_por_usuario.entity.js.map