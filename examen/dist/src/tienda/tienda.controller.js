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
const common_1 = require("@nestjs/common");
const tienda_service_1 = require("./tienda.service");
let TiendaController = class TiendaController {
    constructor(_tiendaService) {
        this._tiendaService = _tiendaService;
    }
    inicio(response, busqueda, accion, titulo, text) {
        return __awaiter(this, void 0, void 0, function* () {
            let mensaje;
            let clase;
            if (accion && titulo) {
                switch (accion) {
                    case 'borrar':
                        mensaje = `Registro ${titulo} eliminado`;
                        clase = 'alert alert-danger';
                        break;
                    case 'actualizar':
                        mensaje = `Registro ${titulo} actualizado`;
                        clase = 'alert alert-info';
                        break;
                    case 'crear':
                        mensaje = `Registro ${titulo} creado`;
                        clase = 'alert alert-success';
                        break;
                }
            }
            console.log(text);
            let tienda;
            response.render('tienda', {
                usuario: 'Jonathan',
                arreglo: tienda,
                booleano: false,
                mensaje,
                clase,
            });
        });
    }
    inicioPOST(response, text) {
        console.log(text);
    }
    eliminar(response, idTienda) {
        return __awaiter(this, void 0, void 0, function* () {
            const tienda = yield this._tiendaService.buscarPorId(+idTienda);
            yield this._tiendaService.eliminar(Number(idTienda));
            const parametroConsulta = `?accion=borrar&titulo=${tienda.nombre}`;
            response.redirect('/tienda/inicio' + parametroConsulta);
        });
    }
    crearNoticia(response) {
        response.render('crear-noticia', {
            titulo: 'Crear Noticia',
        });
    }
    crearNoticiaFuncion(response, tienda) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this._tiendaService.crear(tienda);
            const parametroConsulta = `?accion=crear&titulo=${tienda.nombre}`;
            response.redirect('/tienda/inicio' + parametroConsulta);
        });
    }
    actualizarNoticiaVista(response, idTienda) {
        return __awaiter(this, void 0, void 0, function* () {
            const noticiaEncontrada = yield this._tiendaService
                .buscarPorId(+idTienda);
            response.render('crear-noticia', {
                noticia: noticiaEncontrada,
            });
        });
    }
    actualizarNoticiaMetodo(response, idTienda, tienda) {
        return __awaiter(this, void 0, void 0, function* () {
            tienda.id = +idTienda;
            yield this._tiendaService.actulizar(tienda);
            const parametrosConsulta = `?accion=actualizar&titulo=${tienda.nombre}`;
            response.redirect('/noticia/inicio' + parametrosConsulta);
        });
    }
};
__decorate([
    common_1.Get('tienda'),
    __param(0, common_1.Res()),
    __param(1, common_1.Query('busqueda')),
    __param(2, common_1.Query('accion')),
    __param(3, common_1.Query('titulo')),
    __param(4, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String, String, Object]),
    __metadata("design:returntype", Promise)
], TiendaController.prototype, "inicio", null);
__decorate([
    common_1.Get('tienda'),
    __param(0, common_1.Res()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], TiendaController.prototype, "inicioPOST", null);
__decorate([
    common_1.Post('eliminar/:idTienda'),
    __param(0, common_1.Res()),
    __param(1, common_1.Param('idTienda')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], TiendaController.prototype, "eliminar", null);
__decorate([
    common_1.Get('crear-tienda'),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TiendaController.prototype, "crearNoticia", null);
__decorate([
    common_1.Post('crear-tienda'),
    __param(0, common_1.Res()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], TiendaController.prototype, "crearNoticiaFuncion", null);
__decorate([
    common_1.Get('actualizar-noticia/:idTienda'),
    __param(0, common_1.Res()),
    __param(1, common_1.Param('idTienda')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], TiendaController.prototype, "actualizarNoticiaVista", null);
__decorate([
    common_1.Post('actualizar-noticia/:idTienda'),
    __param(0, common_1.Res()),
    __param(1, common_1.Param('idTienda')),
    __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, Object]),
    __metadata("design:returntype", Promise)
], TiendaController.prototype, "actualizarNoticiaMetodo", null);
TiendaController = __decorate([
    common_1.Controller('tienda'),
    __metadata("design:paramtypes", [tienda_service_1.TiendaService])
], TiendaController);
exports.TiendaController = TiendaController;
//# sourceMappingURL=tienda.controller.js.map