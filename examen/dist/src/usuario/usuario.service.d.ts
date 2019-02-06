import { Repository } from 'typeorm';
import { UsuarioEntity } from './usuario-entity';
import { FindManyOptions } from '../../node_modules/typeorm/find-options/FindManyOptions';
export declare class UsuarioService {
    private readonly _usuarioRepository;
    usuarios: Usuario[];
    registroActual: number;
    constructor(_usuarioRepository: Repository<UsuarioEntity>);
    buscar(parametros?: FindManyOptions<UsuarioEntity>): Promise<UsuarioEntity[]>;
    crear(nuevoUsuario: Usuario): Promise<UsuarioEntity>;
    actualizar(idUsuario: number, nuevoUsuario: Usuario): Promise<UsuarioEntity>;
    borrar(idUsuario: number): Promise<UsuarioEntity>;
    buscarPorId(idUsuario: number): Promise<UsuarioEntity>;
    buscarPorNombreOBiografia(busqueda: string): Usuario[];
    login(username: string, password: string): Promise<boolean>;
}
export interface Usuario {
    id: number;
    nombre: string;
    correo: string;
    fechaNacimiento: string;
    password?: string;
}
