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
            name: 'username',
            type: 'varchar',
            length: 50,

        }
    )
    username: string;

    @Column({
        nullable: false,
        name: 'correo',
        type: 'varchar',
        length: 50,
    })
    correo: string;

    @Column({
        nullable: false,
        name: 'fechaNacimiento',
        type: 'varchar',
        length: 50,
    })
    fechaNacimiento: string;

    @Column({
        nullable: true,
        name: 'password',
        type: 'varchar',
        length: 50,
    })
    password: string;




    @BeforeInsert()
    antesDeInsertar() {
        console.log('Ejecutandome antes de insertar');
        console.log(this.id);
    }

    @BeforeInsert()
    verificarFuncion() {
        console.log('Ejecuta despues de antes de insertar');
    }

/*
    @OneToMany(
        type => TiendaEntity, // Tipo de Dato Un Usuario a muchos
        // Libros[]
        libro => libro.usuario // Cual es el campo FK
    )
    libros: TiendaEntity[];

*/
}