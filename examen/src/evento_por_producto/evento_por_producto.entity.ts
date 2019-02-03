import {Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {EventoEntity} from "../evento/evento.entity";
import {ProductoEntity} from "../producto/producto.entity";

@Entity('db_evento_por_producto')
export class Evento_por_productoEntity {

    @PrimaryGeneratedColumn(
    )
    numeroProducto: number;

    @ManyToOne(
        type => EventoEntity,
        evento => evento.eventosPorProducto
    )
    tabla_evento: EventoEntity;

    @ManyToOne(
        type => ProductoEntity,
        producto => producto.eventosPorProducto
    )
    tabla_producto: ProductoEntity;


}
