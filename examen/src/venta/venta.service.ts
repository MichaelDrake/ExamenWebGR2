import {Injectable} from '@nestjs/common';
import {Venta} from "../venta/venta.service";
import {VentaEntity} from "../venta/venta.entity";
import {FindManyOptions, Repository} from "typeorm";
import {InjectRepository} from '@nestjs/typeorm';


@Injectable()
export class VentaService {
    ventas: Venta[] = [
    ];

    constructor(
        @InjectRepository(VentaEntity)
        private readonly _ventaRepository: Repository<VentaEntity>,
    ) {
    }


    async buscar(parametros?: FindManyOptions<VentaEntity>)

        : Promise<VentaEntity[]> {
        return await this._ventaRepository.find(parametros);
    }

    async crear(nuevaVenta: Venta): Promise<VentaEntity> {
        
        const ventaEntity = this._ventaRepository
            .create(nuevaVenta);

        console.log("va a guardar")

        const ventaCreado = await this._ventaRepository
            .save(ventaEntity);


        return ventaCreado;
    }

    actualizar(idVenta: number,
               nuevaVenta: Venta): Promise<VentaEntity> {

        nuevaVenta.id = idVenta;

        const ventaEntity = this._ventaRepository.create(nuevaVenta);

        return this._ventaRepository.save(ventaEntity);
    }


    async borrar(idVenta: number): Promise<VentaEntity> {


        // CREA UNA INSTANCIA DE LA ENTIDAD
        const ventaEntityAEliminar = await this._ventaRepository
            .create({
                id: idVenta
            });


        return this._ventaRepository.remove(ventaEntityAEliminar)
    }

    buscarPorId(idVenta: number): Promise<VentaEntity> {
        return this._ventaRepository.findOne(idVenta);
    }
}
export interface Venta {
    id: number;

    nombre: string;
    fecha: string;
    latitud: number;
    longitud: number;

}