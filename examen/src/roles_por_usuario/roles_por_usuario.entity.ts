import {Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {UsuarioEntity} from "../usuario/usuario-entity";
import {RollEntity} from "../rol/roll.entity";

@Entity('db_roles_por_usuario')
export class Roles_por_usuarioEntity {

    @PrimaryGeneratedColumn(
    )
    numeroProducto: number;

    @ManyToOne(
        type => UsuarioEntity, // Tipo relacion de muchos
        // a uno
        usuario => usuario.roles_por_usuario, // Campo donde nos guarda
    )
    usuario: UsuarioEntity;

    @ManyToOne(
        type => RollEntity, // Tipo relacion de muchos
        // a uno
        rol => rol.roles, // Campo donde nos guarda
    )
    rol: UsuarioEntity;


}
