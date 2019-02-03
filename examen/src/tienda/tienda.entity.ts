// tienda.entity.ts

import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {UsuarioEntity} from "../usuario/usuario-entity";
import {ProductoEntity} from "../producto/producto.entity";

@Entity('db_usuario')
export class TiendaEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        name: 'nombre',
        type: 'varchar',
        length: 50
    })
    nombre: string;

    @ManyToOne(
        type => UsuarioEntity, // Tipo relacion de muchos
        // a uno
        usuario => usuario.tiendas, // Campo donde nos guarda
    )
    usuario: UsuarioEntity;
    // tienda.entity.ts
    @OneToMany(
        type => ProductoEntity,
        producto => producto.libro
    )
    productos: ProductoEntity[];
}
