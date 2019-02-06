import { Injectable } from '@nestjs/common';
import {FindManyOptions, Repository} from 'typeorm';
import {InjectRepository} from '@nestjs/typeorm';
import { Tienda } from './tienda.controller';
import { TiendaEntity } from './tienda.entity';

@Injectable()
export class TiendaService {
  arreglo: Tienda[] = [
    {
      id: 1,
      nombre: 'A',
      descripcion: 'Descripcion A',
    },
    {
      id: 2,
      nombre: 'B',
      descripcion: 'Descripcion B',
    },
    {
      id: 3,
      nombre: 'C',
      descripcion: 'Descripcion C',
    },
    {
      id: 4,
      nombre: 'D',
      descripcion: 'Descripcion D',
    },
  ];
  numeroRegistro = 5;

  constructor(
    @InjectRepository(TiendaEntity)
    private readonly _tiendaRepository: Repository<TiendaEntity>,
  ) {}

  buscar(parametrosBusqueda?: FindManyOptions<TiendaEntity>)
    : Promise<TiendaEntity[]> {
    return this._tiendaRepository.find(parametrosBusqueda);
  }

  crear(tienda: Tienda): Promise<TiendaEntity> {
    // noticia.id = this.numeroRegistro;
    // this.numeroRegistro++;
    // this.arreglo.push(noticia);
    // return noticia;

    // el Create es como un cosntructor de la entidad
    const noticiaEntity: TiendaEntity = this._tiendaRepository.create(tienda);
    // El metodo save guarda en la DDB
    return this._tiendaRepository.save(noticiaEntity);

  }

  eliminar(idNoticia: number): Promise<TiendaEntity> {
    // const indiceNoticia = this.arreglo
    //     .findIndex(
    //         (noticia)=>{
    //             return noticia.id == idNoticia;
    //         }
    //     )
    // const registroEliminado = JSON.parse(JSON.stringify(this.arreglo[indiceNoticia]));
    // this.arreglo.splice(indiceNoticia,1);
    // return registroEliminado;
    const noticiaEliminar: TiendaEntity = this._tiendaRepository.create({
      id: idNoticia,
    });

    return this._tiendaRepository.remove(noticiaEliminar);
  }

  actulizar(nuevaTienda: Tienda): Promise<TiendaEntity> {
    // const indiceNoticia = this.arreglo
    //     .findIndex(
    //         (noticia)=>{
    //             return noticia.id == idNoticia;
    //         }
    //     )
    // // this.arreglo[indiceNoticia].titulo =
    // this.arreglo[indiceNoticia] = nuevaNoticia;
    // return this.arreglo[indiceNoticia];

    const tiendaEntity: TiendaEntity = this._tiendaRepository.create(nuevaTienda);
    // El metodo save guarda en la DDB
    return this._tiendaRepository.save(tiendaEntity);

  }

  buscarPorId(idTienda: number): Promise<TiendaEntity> {
    // const indiceNoticia = this.arreglo
    //     .findIndex(
    //         (noticia)=>{
    //             return noticia.id === idNoticia;
    //         }
    //     )
    // return this.arreglo[indiceNoticia];

    return this._tiendaRepository.findOne(idTienda);
  }
}
