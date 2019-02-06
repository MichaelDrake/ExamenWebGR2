import {VentaService} from "./venta.service";
import {Body, Controller, Get, Param, Post, Query, Res} from "@nestjs/common";
import {VentaEntity} from "../venta/venta-entity";
import {FindManyOptions, Like} from "typeorm";
import {Venta} from "../venta/venta.service";
import {VentaCreateDto} from "../venta/dto/venta-create.dto";
import {validate, ValidationError} from "class-validator";

@Controller('Venta')
export class VentaController {
    constructor(
        private readonly _ventaService: VentaService,
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

        let ventas: VentaEntity[];
        if (busqueda) {

            const consulta: FindManyOptions<VentaEntity> = {
                where: [
                    {
                        nombre: Like(`%${busqueda}%`)
                    },
                    {
                        correo: Like(`%${busqueda}%`)
                    }
                ]
            };
            ventas = await this._ventaService.buscar(consulta);
        } else {
            ventas = await this._ventaService.buscar();
        }

        response.render('inicio', {
            nombre: '',
            arreglo: ventas,
            mensaje: mensaje,
            accion: clase,
            titulo: 'Gestion de ventas',
        });
        // }else{
        //     throw new ForbiddenException({mensaje:'No puedes entrar'});
        // }



    }

    @Post('borrar/:idVenta')
    async borrar(
        @Param('idVenta') idVenta: string,
        @Res() response
    ) {
        const ventaEncontrado = await this._ventaService
            .buscarPorId(+idVenta);

        await this._ventaService.borrar(Number(idVenta));


        const parametrosConsulta = `?accion=borrar&nombre=${ventaEncontrado.nombre}`;


        response.redirect('/Venta/inicio' + parametrosConsulta);
    }

    @Get('crear-venta')
    crearVenta(
        @Res() response
    ) {
        response.render(

            'registrarse'

        )
    }

    @Get('actualizar-venta/:idVenta')
    async actualizarVenta(
        @Param('idVenta') idVenta: string,
        @Res() response
    ) {
        const ventaAActualizar = await this
            ._ventaService
            .buscarPorId(Number(idVenta));

        response.render(
            'crear-venta', {
                venta: ventaAActualizar
            }
        )
    }


    @Post('actualizar-venta/:idVenta')
    async actualizarVentaFormulario(
        @Param('idVenta') idVenta: string,
        @Res() response,
        @Body() venta: Venta
    ) {
        venta.id = +idVenta;

        await this._ventaService.actualizar(+idVenta, venta);


        const parametrosConsulta = `?accion=actualizar&nombre=${venta.nombre}`;


        response.redirect('/Venta/inicio' + parametrosConsulta);

    }


    @Post('crear-venta')
    async crearVentaFormulario(
        @Body() venta: Venta,
        @Res() response
    ) {
        const ventaValidado = new VentaCreateDto();

        ventaValidado.nombre = venta.nombre;
        ventaValidado.correo = venta.correo;
        ventaValidado.fechaNacimiento = venta.fechaNacimiento;

        ventaValidado.password = venta.password;

        const errores: ValidationError[] = await validate(ventaValidado);

        const hayErrores = errores.length > 0;

        if (hayErrores) {
            console.error(errores);
            response.redirect('/Venta/crear-venta?error=Hay errores');

        } else {
            await this._ventaService.crear(venta);


            // const parametrosConsulta = `?accion=crear&username=${venta.username}`;

            response.redirect('/login');

        }


    }

    @Get(':id')
    obtenerPorId(
        @Param('id') idVenta
    ) {
        console.log(idVenta);
        return this._ventaService.buscarPorId(+idVenta);
    }
}