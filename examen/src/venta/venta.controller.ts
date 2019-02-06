import {VentaService} from "./venta.service";
import {Body, Controller, Get, Param, Post, Query, Res} from "@nestjs/common";
import {FindManyOptions, Like} from "typeorm";
import {VentaEntity} from "./venta.entity";
import {Venta} from "./venta.service";

@Controller('Venta')
export class VentaController {
    constructor(
        private readonly _ventaService: VentaService,
    ) {

    }

    @Get('ventas')
    async ventas(
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
                ]
            };
            ventas = await this._ventaService.buscar(consulta);
        } else {
            ventas = await this._ventaService.buscar();
        }

        response.render('ventas', {
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

    // @Get(':id/ver-productos')

    @Post('borrar/:idVenta')
    async borrar(
        @Param('idVenta') idVenta: string,
        @Res() response
    ) {
        const ventaEncontrado = await this._ventaService
            .buscarPorId(+idVenta);

        await this._ventaService.borrar(Number(idVenta));


        const parametrosConsulta = `?accion=borrar&nombre=${ventaEncontrado.nombre}`;


        response.redirect('/Venta/ventas' + parametrosConsulta);
    }

    @Get('crear-venta')
    crearUsuario(
        @Res() response
    ) {
        response.render(
            'crear-venta'
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


        response.redirect('/Venta/ventas' + parametrosConsulta);

    }


    @Post('crear-venta')
    crearVentaFormulario(
        @Body() venta: Venta,
        @Res() response
    ) {
        this._ventaService.crear(venta);


        const parametrosConsulta = `?accion=crear&nombre=${venta.nombre}`;

        response.redirect('/Venta/ventas' + parametrosConsulta);


    }


    @Get(':id')
    obtenerPorId(
        @Param('id') idVenta
    ) {
        console.log(idVenta);
        return this._ventaService.buscarPorId(+idVenta);
    }
}