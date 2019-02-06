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
const rxjs_1 = require("rxjs");
const usuario_service_1 = require("./usuario/usuario.service");
let AppController = class AppController {
    constructor(_usuarioService) {
        this._usuarioService = _usuarioService;
    }
    saludar(queryParams, nombre, seguridad, sesion) {
        console.log('Sesion:', sesion);
        return nombre;
    }
    ruta(todosParametrosRuta, idUsuario) {
        return idUsuario;
    }
    despedirse() {
        return new Promise((resolve, reject) => {
            throw new common_1.HttpException({
                mensaje: 'Error en despedirse',
            }, 400);
        });
    }
    tomar() {
        return 'Estoy borracho';
    }
    saludarObservable() {
        return rxjs_1.of('Hola mundo');
    }
    loginMetodo(username, password, response, sesion) {
        return __awaiter(this, void 0, void 0, function* () {
            const identificado = yield this._usuarioService
                .login(username, password);
            if (identificado) {
                sesion.usuario = username;
                response.redirect('/saludar');
            }
            else {
                throw new common_1.BadRequestException({ mensaje: 'Error login' });
            }
        });
    }
    loginVista(response) {
        response.render('login');
    }
    tiendaVista(response) {
        response.render('tienda');
    }
    logout(response, sesion) {
        sesion.usuario = undefined;
        sesion.destroy();
        response.redirect('/login');
    }
};
__decorate([
    common_1.Get('saludar'),
    __param(0, common_1.Query()),
    __param(1, common_1.Query('nombre')),
    __param(2, common_1.Headers('seguridad')),
    __param(3, common_1.Session()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object, Object]),
    __metadata("design:returntype", String)
], AppController.prototype, "saludar", null);
__decorate([
    common_1.Get('segmentoUno/:idUsuario/segmentoDos'),
    __param(0, common_1.Param()),
    __param(1, common_1.Param('idUsuario')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", String)
], AppController.prototype, "ruta", null);
__decorate([
    common_1.Get('despedirse'),
    common_1.HttpCode(201),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "despedirse", null);
__decorate([
    common_1.Get('tomar'),
    common_1.HttpCode(201),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "tomar", null);
__decorate([
    common_1.Get('saludarObservable'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", rxjs_1.Observable)
], AppController.prototype, "saludarObservable", null);
__decorate([
    common_1.Post('login'),
    common_1.HttpCode(200),
    __param(0, common_1.Body('username')),
    __param(1, common_1.Body('password')),
    __param(2, common_1.Res()),
    __param(3, common_1.Session()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "loginMetodo", null);
__decorate([
    common_1.Get('login'),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "loginVista", null);
__decorate([
    common_1.Get('tienda'),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "tiendaVista", null);
__decorate([
    common_1.Get('logout'),
    __param(0, common_1.Res()),
    __param(1, common_1.Session()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "logout", null);
AppController = __decorate([
    common_1.Controller(),
    __metadata("design:paramtypes", [usuario_service_1.UsuarioService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map