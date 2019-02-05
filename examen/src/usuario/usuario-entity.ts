// usuario-entity.ts

import {BeforeInsert, Column, Entity, Index, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {TiendaEntity} from "../tienda/tienda.entity";
import {Roles_por_usuarioEntity} from "../roles_por_usuario/roles_por_usuario.entity";

@Entity('db_usuario')
export class UsuarioEntity {

    @PrimaryGeneratedColumn()
    id: number;

    // @Index()
    @Column(
        {
            nullable: false,
            name: 'nombre',
            type: 'varchar',
            length: 50,
            default: 'nombre'
        }
    )
    nombre: string;

    @Column({
        nullable: false,
        name: 'correo',
        type: 'varchar',
        length: 50,
    })
    correo: string;



    @Column({
        nullable: false,
        type: 'date',
    })
    fechaNacimiento: string;
    @Column({
        nullable: false,
        type: 'varchar',
        length: 16
    })
    password: string;

    /*
    @BeforeInsert()
    antesDeInsertar() {
        console.log('Ejecutandome antes de insertar');
    }
    @BeforeInsert()
    verificarFuncion() {
        console.log('Ejecuta despues de antes de insertar');
    }
    */

    @OneToMany(
        type => TiendaEntity, // Tipo de Dato Un Usuario a muchos
        // Libros[]
        tienda => tienda.usuario // Cual es el campo FK
    )
    tiendas: TiendaEntity[];

    @OneToMany(
        type => Roles_por_usuarioEntity,
        roles_por_usuario => roles_por_usuario.usuario
    )
    roles_por_usuario: Roles_por_usuarioEntity[];

}