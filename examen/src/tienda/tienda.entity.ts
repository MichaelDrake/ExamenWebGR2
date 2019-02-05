// tienda.entity.ts

import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {UsuarioEntity} from "../usuario/usuario-entity";
import {ProductoEntity} from "../producto/producto.entity";

@Entity('db_tienda')
export class TiendaEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        name: 'nombre',
        type: 'varchar',
        length: 50
    })
    nombre: string;



    @Column({
        type: 'varchar',
        length: 50
    })
    direccion: string;

    @Column({
        type: 'date',
    })
    fechaApertura: string;

    @Column({
        type: 'int',
    })
    RUC: number;
    @Column({
        type: 'boolean',
    })
    matriz: boolean;


    @ManyToOne(

        type => UsuarioEntity, // Tipo relacion de muchos
        // a uno
        usuario => usuario.tiendas, // Campo donde nos guarda
    )
    usuario: UsuarioEntity;
    // tienda.entity.ts
    @OneToMany(
        type => ProductoEntity,


        producto => producto.tiendaId
    )

    productos: ProductoEntity[];
}
