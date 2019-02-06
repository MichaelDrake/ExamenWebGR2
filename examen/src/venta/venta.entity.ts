import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Evento_por_productoEntity} from "../evento_por_producto/evento_por_producto.entity";

@Entity('db_evento')
export class VentaEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'varchar',
        nullable: false
    })
    nombre: string;

    @Column({
        type: 'date'
    })
    fecha: string;

    @Column({
        type: 'float'
    })
    latitud: number;

    @Column({
        type: 'float'
    })
    longitud: number;

    @OneToMany(
        type => Evento_por_productoEntity,
        evento_por_producto => evento_por_producto.tabla_evento
    )
    eventosPorProducto: Evento_por_productoEntity[]

}
