import {Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {VentaEntity} from "../venta/venta.entity";
import {ProductoEntity} from "../producto/producto.entity";

@Entity('db_evento_por_producto')
export class Evento_por_productoEntity {

    @PrimaryGeneratedColumn(
    )
    numeroProducto: number;

    @ManyToOne(
        type => VentaEntity,
        evento => evento.eventosPorProducto
    )
    tabla_evento: VentaEntity;

    @ManyToOne(
        type => ProductoEntity,
        producto => producto.eventosPorProducto
    )
    tabla_producto: ProductoEntity;


}
