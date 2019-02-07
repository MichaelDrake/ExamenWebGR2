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
const usuario_service_1 = require("./usuario.service");
const typeorm_1 = require("typeorm");
const usuario_create_dto_1 = require("./dto/usuario-create.dto");
const class_validator_1 = require("class-validator");
let UsuarioController = class UsuarioController {
    constructor(_usuarioService) {
        this._usuarioService = _usuarioService;
    }
    inicio(response, accion, nombre, busqueda) {
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
            let usuarios;
            if (busqueda) {
                const consulta = {
                    where: [
                        {
                            nombre: typeorm_1.Like(`%${busqueda}%`)
                        },
                        {
                            correo: typeorm_1.Like(`%${busqueda}%`)
                        }
                    ]
                };
                usuarios = yield this._usuarioService.buscar(consulta);
            }
            else {
                usuarios = yield this._usuarioService.buscar();
            }
            const roles = [
                {
                    id: 1,
                    nombre: 'Usuario'
                },
                {
                    id: 2,
                    nombre: 'Administrador'
                }
            ];
            const esUsuario = roles.some(rol => rol.id === 1);
            const esAdministrador = roles.some(rol => rol.id === 2);
            response.render('inicio', {
                nombre: '',
                arreglo: usuarios,
                mensaje: mensaje,
                accion: clase,
                titulo: 'Gestion de usuarios',
                esUsuario: esUsuario,
                esAdministrador: esAdministrador
            });
        });
    }
    borrar(idUsuario, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuarioEncontrado = yield this._usuarioService
                .buscarPorId(+idUsuario);
            yield this._usuarioService.borrar(Number(idUsuario));
            const parametrosConsulta = `?accion=borrar&nombre=${usuarioEncontrado.nombre}`;
            response.redirect('/Usuario/inicio' + parametrosConsulta);
        });
    }
    crearUsuario(response, error) {
        if (error) {
            response.render('crear-usuario', {
                error: error,
            });
        }
        else {
            response.render('crear-usuario');
        }
    }
    mostrarRoles(response) {
        response.render('rol');
    }
    actualizarUsuario(idUsuario, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuarioAActualizar = yield this
                ._usuarioService
                .buscarPorId(Number(idUsuario));
            response.render('rol', {
                usuario: usuarioAActualizar
            });
        });
    }
    actualizarUsuarioFormulario(idUsuario, response, usuario) {
        return __awaiter(this, void 0, void 0, function* () {
            usuario.id = +idUsuario;
            yield this._usuarioService.actualizar(+idUsuario, usuario);
            const parametrosConsulta = `?accion=actualizar&nombre=${usuario.nombre}`;
            response.redirect('/Usuario/inicio' + parametrosConsulta);
        });
    }
    crearUsuarioFormulario(usuario, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuarioValidado = new usuario_create_dto_1.UsuarioCreateDto();
            usuarioValidado.nombre = usuario.nombre;
            usuarioValidado.correo = usuario.correo;
            usuarioValidado.fechaNacimiento = usuario.fechaNacimiento;
            usuarioValidado.password = usuario.password;
            const errores = yield class_validator_1.validate(usuarioValidado);
            const hayErrores = errores.length > 0;
            if (hayErrores) {
                console.error(errores);
                response.render('crear-usuario', {
                    error: 'errores',
                });
            }
            else {
                yield this._usuarioService.crear(usuario);
                response.redirect('/login');
            }
        });
    }
    obtenerPorId(idUsuario) {
        console.log(idUsuario);
        return this._usuarioService.buscarPorId(+idUsuario);
    }
};
__decorate([
    common_1.Get('inicio'),
    __param(0, common_1.Res()),
    __param(1, common_1.Query('accion')),
    __param(2, common_1.Query('nombre')),
    __param(3, common_1.Query('busqueda')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String, String]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "inicio", null);
__decorate([
    common_1.Post('borrar/:idUsuario'),
    __param(0, common_1.Param('idUsuario')),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "borrar", null);
__decorate([
    common_1.Get('crear-usuario'),
    __param(0, common_1.Res()),
    __param(1, common_1.Query('error')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], UsuarioController.prototype, "crearUsuario", null);
__decorate([
    common_1.Get('rol'),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UsuarioController.prototype, "mostrarRoles", null);
__decorate([
    common_1.Get('actualizar-rol/:idUsuario'),
    __param(0, common_1.Param('idUsuario')),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "actualizarUsuario", null);
__decorate([
    common_1.Post('actualizar-usuario/:idUsuario'),
    __param(0, common_1.Param('idUsuario')),
    __param(1, common_1.Res()),
    __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "actualizarUsuarioFormulario", null);
__decorate([
    common_1.Post('crear-usuario'),
    __param(0, common_1.Body()),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UsuarioController.prototype, "crearUsuarioFormulario", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UsuarioController.prototype, "obtenerPorId", null);
UsuarioController = __decorate([
    common_1.Controller('Usuario'),
    __metadata("design:paramtypes", [usuario_service_1.UsuarioService])
], UsuarioController);
exports.UsuarioController = UsuarioController;
//# sourceMappingURL=usuario.controller.js.map