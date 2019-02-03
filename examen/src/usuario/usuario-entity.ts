// usuario-entity.ts

import {BeforeInsert, Column, Entity, Index, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {TiendaEntity} from "../tienda/tienda.entity";

@Entity('db_usuario')
export class UsuarioEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Index()
    @Column(
        {
            nullable: false,
            name: 'nombre_primero',
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
        nullable: false
    })
    password: string;

    @Column({
        nullable: false
    })
    fechaNacimiento: string;

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
        libro => libro.usuario // Cual es el campo FK
    )
    libros: TiendaEntity[];


}