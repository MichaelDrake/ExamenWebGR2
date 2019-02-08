import { Injectable } from '@nestjs/common';
import {FindManyOptions, Repository} from 'typeorm';
import {InjectRepository} from '@nestjs/typeorm';
import { TiendaEntity } from './tienda.entity';

@Injectable()
export class TiendaService {
    Tiendas: Tienda[] = [
    ];

    constructor(
        @InjectRepository(TiendaEntity)
        private readonly _TiendaRepository: Repository<TiendaEntity>,
    ) {
    }

    async buscar(parametros?: FindManyOptions<TiendaEntity>)

        : Promise<TiendaEntity[]> {
        return await this._TiendaRepository.find(parametros);
    }

    async crear(nuevaTienda: Tienda): Promise<TiendaEntity> {

        console.log("----------------------------------------\n\n\n")
        //nuevaTienda.id

        console.log("----------------------------------------\n\n\n")
        const TiendaEntity = this._TiendaRepository
            .create(nuevaTienda);

        console.log("va a guardar\n\n\n")
        console.log(TiendaEntity)
        const tiendaCreada = await this._TiendaRepository
            .save(TiendaEntity);
        return tiendaCreada;
    }

    actualizar(idTienda: number,
               nuevaTienda: Tienda): Promise<TiendaEntity> {

        nuevaTienda.id = idTienda;

        const nuevaTiendaCreada = this._TiendaRepository.create(nuevaTienda);

        return this._TiendaRepository.save(nuevaTiendaCreada);
    }

    async borrar(idTienda: number): Promise<TiendaEntity> {
        // CREA UNA INSTANCIA DE LA ENTIDAD
        const TiendaEntityAEliminar = await this._TiendaRepository
            .create({
                id: idTienda
            });
        return this._TiendaRepository.remove(TiendaEntityAEliminar)
    }

    buscarPorId(idTienda: number): Promise<TiendaEntity> {
        return this._TiendaRepository.findOne(idTienda);
    }
}
export interface Tienda {
    id: number;
    nombre: string;
    direccion: string;
    fechaApertura: string;
    RUC: string;
    matriz: string

}