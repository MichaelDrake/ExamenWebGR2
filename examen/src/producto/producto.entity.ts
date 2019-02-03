import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {TiendaEntity} from "../tienda/tienda.entity";

@Entity('producto')
export class ProductoEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    texto: string;
    // producto.entity.ts
    @ManyToOne(
        type => TiendaEntity,
        libro => libro.paginas
    )
    libro: TiendaEntity;
}