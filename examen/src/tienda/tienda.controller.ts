import { BadRequestException, Body, Controller, Get, Param, Post, Query, Res } from '@nestjs/common';
// import {TiendaService} from './tienda.service';
import { __await } from 'tslib';
import { TiendaEntity } from './tienda.entity';
import { FindManyOptions, Like } from 'typeorm';
import { TiendaService } from './tienda.service';

@Controller('tienda')
export class TiendaController {

  constructor(private readonly _tiendaService: TiendaService) {
  }

  @Get('tienda')
  async inicio(
    @Res() response,
    @Query('busqueda') busqueda: string,
    @Query('accion') accion: string,
    @Query('titulo') titulo: string,
    @Body() text,
  ) {
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

    // const noticias = await this._noticiaService.buscar();

    let tienda: TiendaEntity[];
    // if (busqueda) {
    //   const consulta: FindManyOptions<TiendaEntity> = {
    //     where: [
    //       {
    //         titulo: Like(`%${busqueda}%`),
    //       },
    //       {
    //         descripcion: Like(`%${busqueda}%`),
    //       },
    //     ],
    //   };
    //   noticias = await await this._noticiaService.buscar(consulta);
    // } else {
    //   noticias = await this._noticiaService.buscar();
    // }

    response.render(
      'tienda',
      {
        usuario: 'Jonathan',
        arreglo: tienda,
        booleano: false,
        mensaje,
        clase,
      },
    );
  }

  @Get('tienda')
  inicioPOST(
    @Res() response,
    @Body() text,
  ) {

    console.log(text);

  }

  @Post('eliminar/:idTienda')
  async eliminar(
    @Res() response,
    @Param('idTienda') idTienda: string,
  ) {
    const tienda = await this._tiendaService.buscarPorId(+idTienda);
    await this._tiendaService.eliminar(Number(idTienda));
    const parametroConsulta = `?accion=borrar&titulo=${tienda.nombre}`;
    response.redirect('/tienda/inicio' + parametroConsulta);
  }

  @Get('crear-tienda')
  crearNoticia(
    @Res() response,
  ) {
    response.render(
      'crear-noticia', {
        titulo: 'Crear Noticia',
      },
    );
  }

  @Post('crear-tienda')
  async crearNoticiaFuncion(
    @Res() response,
    @Body() tienda: Tienda,
  ) {
    // const noticiaCreada = this._noticiaService.crear(noticia);
    // const objetoValidacionNoticia = new CreateNoticiaDto();
    // objetoValidacionNoticia.titulo = tienda.nombre;
    // objetoValidacionNoticia.descripcion = tienda.descripcion;

    // const errores: ValidationError[] = await validate(objetoValidacionNoticia);

    // const hayErrores = errores.length > 0;
    //
    // if (hayErrores) {
    //   console.error(errores);
    //   // redirect crear noticia
    //   // en crear noticias deberia mostrar mensajes
    //   // como en la pantalla de iNICIO
    //   throw new BadRequestException({
    //     mensaje: 'Error de validacion',
    //   });
    // } else {
      await this._tiendaService.crear(tienda);
      const parametroConsulta = `?accion=crear&titulo=${tienda.nombre}`;
      response.redirect('/tienda/inicio' + parametroConsulta);
      // response.redirect(
      //     '/inicio'
      // )
    // }
  }

  @Get('actualizar-noticia/:idTienda')
  async actualizarNoticiaVista(
    @Res() response,
    @Param('idTienda') idTienda: string,
  ) {
    // El "+" le transforma en numero a un string
    // Numerico
    // const noticiaEncontrada = this._noticiaService.buscarPorId(+idNoticia)
    const noticiaEncontrada = await this._tiendaService
      .buscarPorId(+idTienda);
    response.render(
      'crear-noticia',
      {
        noticia: noticiaEncontrada,
      },
    );
  }

  @Post('actualizar-noticia/:idTienda')
  async actualizarNoticiaMetodo(
    @Res() response,
    @Param('idTienda') idTienda: string,
    @Body() tienda: Tienda,
  ) {
    tienda.id = +idTienda;
    // const noticiaActualizada = this._noticiaService.actulizar(+idNoticia, noticia);
    // const parametroConsulta = `?accion=actualizar&titulo=${noticiaActualizada.titulo}`;
    await this._tiendaService.actulizar(tienda);
    const parametrosConsulta = `?accion=actualizar&titulo=${tienda.nombre}`;
    response.redirect('/noticia/inicio' + parametrosConsulta);
    // response.redirect(
    //     '/inicio'
    // )
  }
}

export interface Tienda {
  id?: number;
  nombre: string;
  descripcion: string;
}
