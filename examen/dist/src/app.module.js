"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_1 = require("@nestjs/typeorm");
const usuario_entity_1 = require("./usuario/usuario-entity");
const tienda_entity_1 = require("./tienda/tienda.entity");
const producto_entity_1 = require("./producto/producto.entity");
const usuario_module_1 = require("./usuario/usuario.module");
const evento_por_producto_entity_1 = require("./evento_por_producto/evento_por_producto.entity");
const venta_entity_1 = require("./venta/venta.entity");
const roles_por_usuario_entity_1 = require("./roles_por_usuario/roles_por_usuario.entity");
const roll_entity_1 = require("./rol/roll.entity");
const venta_module_1 = require("./venta/venta.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule
                .forRoot({
                type: 'mysql',
                host: '192.168.99.100',
                port: 32769,
                username: 'root',
                password: 'root',
                database: 'web-examen',
                synchronize: true,
                dropSchema: false,
                entities: [
                    usuario_entity_1.UsuarioEntity,
                    tienda_entity_1.TiendaEntity,
                    producto_entity_1.ProductoEntity,
                    evento_por_producto_entity_1.Evento_por_productoEntity,
                    venta_entity_1.VentaEntity,
                    roles_por_usuario_entity_1.Roles_por_usuarioEntity,
                    roll_entity_1.RollEntity
                ]
            }),
            usuario_module_1.UsuarioModule,
            venta_module_1.VentaModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map