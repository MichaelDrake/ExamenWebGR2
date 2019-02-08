import { BadRequestException, Body, Controller, Get, Param, Post, Query, Res } from '@nestjs/common';
import { FindManyOptions, Like } from 'typeorm';
import {Tienda, TiendaService} from './tienda.service';
import {TiendaEntity} from "./tienda.entity";

@Controller('Tienda')
export class TiendaController {

  constructor(private readonly _tiendaService: TiendaService) {
  }

    @Get('tiendas')
    async tiendas(
        @Res() response,
        @Query('accion') accion: string,
        @Query('nombre') nombre: string,
        @Query('busqueda') busqueda: string,
        //@Session() sesion,
    ) {
        console.log("Entrooo")
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

        let tiendas: TiendaEntity[];
        if (busqueda) {

            const consulta: FindManyOptions<TiendaEntity> = {
                where: [
                    {
                        nombre: Like(`%${busqueda}%`)
                    },
                ]
            };
            tiendas = await this._tiendaService.buscar(consulta);
        } else {
            tiendas = await this._tiendaService.buscar();
        }

        response.render('tienda', {
            nombre: '',
            arreglo: tiendas,
            mensaje: mensaje,
            accion: clase,
            titulo: 'Gestion de tiendas',
        });
        // }else{
        //     throw new ForbiddenException({mensaje:'No puedes entrar'});
        // }


    }
    @Get('tiendas-publico')
    async tiendasPublico(
        @Res() response,
        @Query('busqueda') busqueda: string,
    ) {
        let tiendas: TiendaEntity[];
        if (busqueda) {

            const consulta: FindManyOptions<TiendaEntity> = {
                where: [
                    {
                        nombre: Like(`%${busqueda}%`)
                    },
                ]
            };
            tiendas = await this._tiendaService.buscar(consulta);
        } else {
            tiendas = await this._tiendaService.buscar();
        }

        response.render('tiendas-publico', {
            arreglo: tiendas,
            titulo: 'tiendas al Público',
        });
    }

    // @Get(':id/ver-productos')

    @Post('borrar/:idTienda')
    async borrar(
        @Param('idTienda') idTienda: string,
        @Res() response
    ) {
        const tiendaEncontrado = await this._tiendaService
            .buscarPorId(+idTienda);

        await this._tiendaService.borrar(Number(idTienda));


        const parametrosConsulta = `?accion=borrar&nombre=${tiendaEncontrado.nombre}`;


        response.redirect('/Tienda/tiendas' + parametrosConsulta);
    }

    @Get('crear-tienda')
    crearUsuario(
        @Res() response
    ) {
        response.render(
            'crear-tienda'
        )
    }

    @Get('actualizar-tienda/:idTienda')
    async actualizarTienda(
        @Param('idTienda') idTienda: string,
        @Res() response
    ) {
        const tiendaActualizar = await this
            ._tiendaService
            .buscarPorId(Number(idTienda));

        response.render(
            'crear-venta', {
                venta: tiendaActualizar
            }
        )
    }


    @Post('actualizar-tienda/:idTienda')
    async actualizarTiendaFormulario(
        @Param('idVenta') idTienda: string,
        @Res() response,
        @Body() tienda: Tienda
    ) {
        tienda.id = +idTienda;

        await this._tiendaService.actualizar(+idTienda, tienda);


        const parametrosConsulta = `?accion=actualizar&nombre=${tienda.nombre}`;


        response.redirect('/Tienda/tiendas' + parametrosConsulta);

    }


    @Post('crear-tienda')
    crearTiendaFormulario(
        @Body() tienda: Tienda,
        @Res() response
    ) {
        this._tiendaService.crear(tienda);


        const parametrosConsulta = `?accion=crear&nombre=${tienda.nombre}`;

        response.redirect('/Tienda/tiendas' + parametrosConsulta);

    }

    @Get(':id')
    obtenerPorId(
        @Param('id') idTienda
    ) {
        console.log(idTienda);
        return this._tiendaService.buscarPorId(+idTienda);
    }
}
