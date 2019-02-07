import { Evento_por_productoEntity } from "../evento_por_producto/evento_por_producto.entity";
export declare class VentaEntity {
    id: number;
    nombre: string;
    fecha: string;
    latitud: number;
    longitud: number;
    eventosPorProducto: Evento_por_productoEntity[];
}
