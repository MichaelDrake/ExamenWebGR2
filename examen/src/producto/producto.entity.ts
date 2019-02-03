import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {TiendaEntity} from "../tienda/tienda.entity";
import {Evento_por_productoEntity} from "../evento_por_producto/evento_por_producto.entity";


@Entity('db_producto')
export class ProductoEntity {

    @PrimaryGeneratedColumn(
    )
    numeroProducto: number;

    @Column({
        type: 'varchar',
    })
    nombre: string;

    @Column({
        type: 'varchar',
    })
    descripcion: string;

    @Column({
        type: 'decimal',
    })
    precio: number;

    @Column({
        type: 'date',
    })
    fechaLanzamientoProducto: string;

    @Column({
        type: 'int',
    })
    aniosGarantia: number;

    // producto.entity.ts
    @ManyToOne(
        type => TiendaEntity,
        tienda => tienda.productos
    )
    tiendaId: TiendaEntity;

    @OneToMany(
        type => Evento_por_productoEntity,
        evento_por_producto => evento_por_producto.tabla_producto
    )
    eventosPorProducto: Evento_por_productoEntity[];
}
