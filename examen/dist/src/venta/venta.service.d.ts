import { Venta } from "../venta/venta.service";
import { VentaEntity } from "../venta/venta.entity";
import { FindManyOptions, Repository } from "typeorm";
export declare class VentaService {
    private readonly _ventaRepository;
    ventas: Venta[];
    constructor(_ventaRepository: Repository<VentaEntity>);
    buscar(parametros?: FindManyOptions<VentaEntity>): Promise<VentaEntity[]>;
    crear(nuevaVenta: Venta): Promise<VentaEntity>;
    actualizar(idVenta: number, nuevaVenta: Venta): Promise<VentaEntity>;
    borrar(idVenta: number): Promise<VentaEntity>;
    buscarPorId(idVenta: number): Promise<VentaEntity>;
}
export interface Venta {
    id: number;
    nombre: string;
    fecha: string;
    latitud: number;
    longitud: number;
}
