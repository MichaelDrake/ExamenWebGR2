import {Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {UsuarioEntity} from "../usuario/usuario-entity";

@Entity('db_roles_por_usuario')
export class Roles_por_usuarioEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(
        type => UsuarioEntity, // Tipo relacion de muchos
        // a uno
        usuario => usuario.roles_por_usuario, // Campo donde nos guarda
    )
    usuario_id: UsuarioEntity;

    @OneToMany(
        type => Rol
    )
}
