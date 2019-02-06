import { Usuario, UsuarioService } from "./usuario.service";
import { UsuarioEntity } from "./usuario-entity";
export declare class UsuarioController {
    private readonly _usuarioService;
    constructor(_usuarioService: UsuarioService);
    inicio(response: any, accion: string, nombre: string, busqueda: string): Promise<void>;
    borrar(idUsuario: string, response: any): Promise<void>;
    crearUsuario(response: any): void;
    actualizarUsuario(idUsuario: string, response: any): Promise<void>;
    actualizarUsuarioFormulario(idUsuario: string, response: any, usuario: Usuario): Promise<void>;
    crearUsuarioFormulario(usuario: Usuario, response: any): Promise<void>;
    obtenerPorId(idUsuario: any): Promise<UsuarioEntity>;
}
