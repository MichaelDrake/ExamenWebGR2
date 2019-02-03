// tienda.entity.ts

import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {UsuarioEntity} from "../usuario/usuario-entity";
import {ProductoEntity} from "../producto/producto.entity";

@Entity('libro')
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
        usuario => usuario.libros, // Campo donde nos guarda
    )
    usuario: UsuarioEntity;
    // tienda.entity.ts
    @OneToMany(
        type => ProductoEntity,
        pagina => pagina.libro
    )
    paginas: ProductoEntity[];
}
