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
const venta_service_1 = require("./venta.service");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
let VentaController = class VentaController {
    constructor(_ventaService) {
        this._ventaService = _ventaService;
    }
    ventas(response, accion, nombre, busqueda) {
        return __awaiter(this, void 0, void 0, function* () {
            let mensaje;
            let clase;
            if (accion && nombre) {
                switch (accion) {
                    case 'actualizar':
                        clase = 'info';
                        mensaje = `Registro ${nombre} actualizado`;
                        break;
                    case 'borrar':
                        clase = 'danger';
                        mensaje = `Registro ${nombre} eliminado`;
                        break;
                    case 'crear':
                        clase = 'success';
                        mensaje = `Registro ${nombre} creado`;
                        break;
                }
            }
            let ventas;
            if (busqueda) {
                const consulta = {
                    where: [
                        {
                            nombre: typeorm_1.Like(`%${busqueda}%`)
                        },
                    ]
                };
                ventas = yield this._ventaService.buscar(consulta);
            }
            else {
                ventas = yield this._ventaService.buscar();
            }
            response.render('ventas', {
                nombre: '',
                arreglo: ventas,
                mensaje: mensaje,
                accion: clase,
                titulo: 'Gestion de ventas',
            });
        });
    }
    ventasPublico(response, busqueda) {
        return __awaiter(this, void 0, void 0, function* () {
            let ventas;
            if (busqueda) {
                const consulta = {
                    where: [
                        {
                            nombre: typeorm_1.Like(`%${busqueda}%`)
                        },
                    ]
                };
                ventas = yield this._ventaService.buscar(consulta);
            }
            else {
                ventas = yield this._ventaService.buscar();
            }
            response.render('ventas-publico', {
                arreglo: ventas,
                titulo: 'Ventas al Público',
            });
        });
    }
    borrar(idVenta, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const ventaEncontrado = yield this._ventaService
                .buscarPorId(+idVenta);
            yield this._ventaService.borrar(Number(idVenta));
            const parametrosConsulta = `?accion=borrar&nombre=${ventaEncontrado.nombre}`;
            response.redirect('/Venta/ventas' + parametrosConsulta);
        });
    }
    crearUsuario(response) {
        response.render('crear-venta');
    }
    actualizarVenta(idVenta, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const ventaAActualizar = yield this
                ._ventaService
                .buscarPorId(Number(idVenta));
            response.render('crear-venta', {
                venta: ventaAActualizar
            });
        });
    }
    actualizarVentaFormulario(idVenta, response, venta) {
        return __awaiter(this, void 0, void 0, function* () {
            venta.id = +idVenta;
            yield this._ventaService.actualizar(+idVenta, venta);
            const parametrosConsulta = `?accion=actualizar&nombre=${venta.nombre}`;
            response.redirect('/Venta/ventas' + parametrosConsulta);
        });
    }
    crearVentaFormulario(venta, response) {
        this._ventaService.crear(venta);
        const parametrosConsulta = `?accion=crear&nombre=${venta.nombre}`;
        response.redirect('/Venta/ventas' + parametrosConsulta);
    }
    obtenerPorId(idVenta) {
        console.log(idVenta);
        return this._ventaService.buscarPorId(+idVenta);
    }
};
__decorate([
    common_1.Get('ventas'),
    __param(0, common_1.Res()),
    __param(1, common_1.Query('accion')),
    __param(2, common_1.Query('nombre')),
    __param(3, common_1.Query('busqueda')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String, String]),
    __metadata("design:returntype", Promise)
], VentaController.prototype, "ventas", null);
__decorate([
    common_1.Get('ventas-publico'),
    __param(0, common_1.Res()),
    __param(1, common_1.Query('busqueda')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], VentaController.prototype, "ventasPublico", null);
__decorate([
    common_1.Post('borrar/:idVenta'),
    __param(0, common_1.Param('idVenta')),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], VentaController.prototype, "borrar", null);
__decorate([
    common_1.Get('crear-venta'),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], VentaController.prototype, "crearUsuario", null);
__decorate([
    common_1.Get('actualizar-venta/:idVenta'),
    __param(0, common_1.Param('idVenta')),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], VentaController.prototype, "actualizarVenta", null);
__decorate([
    common_1.Post('actualizar-venta/:idVenta'),
    __param(0, common_1.Param('idVenta')),
    __param(1, common_1.Res()),
    __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], VentaController.prototype, "actualizarVentaFormulario", null);
__decorate([
    common_1.Post('crear-venta'),
    __param(0, common_1.Body()),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], VentaController.prototype, "crearVentaFormulario", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], VentaController.prototype, "obtenerPorId", null);
VentaController = __decorate([
    common_1.Controller('Venta'),
    __metadata("design:paramtypes", [venta_service_1.VentaService])
], VentaController);
exports.VentaController = VentaController;
//# sourceMappingURL=venta.controller.js.map