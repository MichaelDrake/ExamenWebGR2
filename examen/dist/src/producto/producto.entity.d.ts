import { TiendaEntity } from "../tienda/tienda.entity";
import { Evento_por_productoEntity } from "../evento_por_producto/evento_por_producto.entity";
export declare class ProductoEntity {
    numeroProducto: number;
    nombre: string;
    descripcion: string;
    precio: number;
    fechaLanzamientoProducto: string;
    aniosGarantia: number;
    tiendaId: TiendaEntity;
    eventosPorProducto: Evento_por_productoEntity[];
}
