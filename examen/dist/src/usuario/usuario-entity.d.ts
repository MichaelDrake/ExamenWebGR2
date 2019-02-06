import { TiendaEntity } from "../tienda/tienda.entity";
import { Roles_por_usuarioEntity } from "../roles_por_usuario/roles_por_usuario.entity";
export declare class UsuarioEntity {
    id: number;
    nombre: string;
    correo: string;
    fechaNacimiento: string;
    password: string;
    tiendas: TiendaEntity[];
    roles_por_usuario: Roles_por_usuarioEntity[];
}
