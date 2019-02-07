// usuario.controller.ts
import {Body, Controller, ForbiddenException, Get, HttpCode, Param, Post, Query, Res, Session} from "@nestjs/common";
import {Usuario, UsuarioService} from "./usuario.service";
import {UsuarioEntity} from "./usuario-entity";
import {FindManyOptions, Like} from 'typeorm';
import {UsuarioCreateDto} from "./dto/usuario-create.dto";
import {validate, ValidationError} from "class-validator";

@Controller('Usuario')
export class UsuarioController {

    constructor(
        private readonly _usuarioService: UsuarioService,
    ) {

    }


    @Get('inicio')
    async inicio(
        @Res() response,
        @Query('accion') accion: string,
        @Query('nombre') nombre: string,
        @Query('busqueda') busqueda: string,
        //@Session() sesion,
    ) {

        // if(sesion.usuario){
            let mensaje; // undefined
            let clase; // undefined

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

            let usuarios: UsuarioEntity[];
            if (busqueda) {

                const consulta: FindManyOptions<UsuarioEntity> = {
                    where: [
                        {
                            nombre: Like(`%${busqueda}%`)
                        },
                        {
                            correo: Like(`%${busqueda}%`)
                        }
                    ]
                };
                usuarios = await this._usuarioService.buscar(consulta);
            } else {
                usuarios = await this._usuarioService.buscar();
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
        // }else{
        //     throw new ForbiddenException({mensaje:'No puedes entrar'});
        // }



    }

    @Post('borrar/:idUsuario')
    async borrar(
        @Param('idUsuario') idUsuario: string,
        @Res() response
    ) {
        const usuarioEncontrado = await this._usuarioService
            .buscarPorId(+idUsuario);

        await this._usuarioService.borrar(Number(idUsuario));


        const parametrosConsulta = `?accion=borrar&nombre=${usuarioEncontrado.nombre}`;


        response.redirect('/Usuario/inicio' + parametrosConsulta);
    }

    @Get('crear-usuario')
    crearUsuario(
        @Res() response,
        @Query('error') error: string,
        @Query('error20') error20: string,
        @Query('error21') error21: string,
        @Query('error22') error22: string,
        @Query('error23') error23: string,
    ) {
        if(error20 || error21 || error22 || error23){

            console.log(error20)
            response.render(

                'crear-usuario', {
                    error20: error20,
                    error21: error21,
                    error22: error22,
                    error23: error23,
                }

            )
        }
        else {
            response.render(

                'crear-usuario'

            )
        }

    }
    @Get('rol')
    mostrarRoles(
        @Res() response
    ) {
        response.render(

            'rol'

        )
    }

    @Get('actualizar-rol/:idUsuario')
    async actualizarUsuario(
        @Param('idUsuario') idUsuario: string,
        @Res() response
    ) {
        const usuarioAActualizar = await this
            ._usuarioService
            .buscarPorId(Number(idUsuario));

        response.render(
            'rol', {
                usuario: usuarioAActualizar
            }
        )
    }


    @Post('actualizar-usuario/:idUsuario')
    async actualizarUsuarioFormulario(
        @Param('idUsuario') idUsuario: string,
        @Res() response,
        @Body() usuario: Usuario
    ) {
        usuario.id = +idUsuario;

        await this._usuarioService.actualizar(+idUsuario, usuario);


        const parametrosConsulta = `?accion=actualizar&nombre=${usuario.nombre}`;


        response.redirect('/Usuario/inicio' + parametrosConsulta);

    }

    @Post('crear-usuario')
    @HttpCode(200)
    async crearUsuarioFormulario(
        @Body() usuario: Usuario,
        @Res() response
    ) {
        const usuarioValidado = new UsuarioCreateDto();

        usuarioValidado.nombre = usuario.nombre;
        usuarioValidado.correo = usuario.correo;
        usuarioValidado.fechaNacimiento = usuario.fechaNacimiento;

        usuarioValidado.password = usuario.password;

        const errores: ValidationError[] = await validate(usuarioValidado);

        const hayErrores = errores.length > 0;

        if (hayErrores) {

            const errores2 = errores.map((errores)=>{return errores['property']})
            console.error(errores);
            console.log(errores2[0])



            response.render('crear-usuario', {
                error: 'errores',
                error20: errores2[0],
                error21: errores2[1],
                error22: errores2[2],
                error23: errores2[3],
            });
            // response.redirect('/Usuario/crear-usuario?error=Hay errores');

        } else {
            await this._usuarioService.crear(usuario);


            // const parametrosConsulta = `?accion=crear&username=${usuario.username}`;

           response.redirect('/login');

        }


    }

    @Get(':id')
    obtenerPorId(
        @Param('id') idUsuario
    ) {
        console.log(idUsuario);
        return this._usuarioService.buscarPorId(+idUsuario);
    }
}


// DTO -> Data Transfer Object

// CREAR  UsuarioCreateDTO

// nombre*
// cedula*
// password*
// direccion
// numeroTelefono
// celular
// apodo


// ACTUALIZAR UsuarioUpdateDTO

// nombre
// password
// cedula -> no actualizamos la cedula
// direccion
// numeroTelefono
// celular
// apodo

// VISUALIZANDO DTO

// nombre
// cedula
// direccion
// numeroTelefono
// celular
// apodo


