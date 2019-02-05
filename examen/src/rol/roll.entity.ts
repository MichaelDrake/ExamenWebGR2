
import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {type} from "os";
import {Roles_por_usuarioEntity} from "../roles_por_usuario/roles_por_usuario.entity";


@Entity('db_rol')
export class RollEntity {

    @PrimaryGeneratedColumn()
    id: number;


    @Column({
            nullable: false,
            type: 'varchar',
            length: 15,
        }
    )
    nombre: string;

    @OneToMany(
        type => Roles_por_usuarioEntity,
        roles => roles.rol
    )
    roles: Roles_por_usuarioEntity[]

}
