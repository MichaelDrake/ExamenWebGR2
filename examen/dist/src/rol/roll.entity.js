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
const roles_por_usuario_entity_1 = require("../roles_por_usuario/roles_por_usuario.entity");
let RollEntity = class RollEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], RollEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        nullable: false,
        type: 'varchar',
        length: 15,
    }),
    __metadata("design:type", String)
], RollEntity.prototype, "nombre", void 0);
__decorate([
    typeorm_1.OneToMany(type => roles_por_usuario_entity_1.Roles_por_usuarioEntity, roles => roles.rol),
    __metadata("design:type", Array)
], RollEntity.prototype, "roles", void 0);
RollEntity = __decorate([
    typeorm_1.Entity('db_rol')
], RollEntity);
exports.RollEntity = RollEntity;
//# sourceMappingURL=roll.entity.js.map