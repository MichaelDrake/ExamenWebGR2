import { Observable } from "rxjs";
import { UsuarioService } from "./usuario/usuario.service";
export declare class AppController {
    private readonly _usuarioService;
    constructor(_usuarioService: UsuarioService);
    saludar(queryParams: any, nombre: any, seguridad: any, sesion: any): string;
    ruta(todosParametrosRuta: any, idUsuario: any): string;
    despedirse(): Promise<string>;
    tomar(): string;
    saludarObservable(): Observable<string>;
    loginMetodo(username: string, password: string, response: any, sesion: any): Promise<void>;
    loginVista(response: any): void;
    logout(response: any, sesion: any): void;
}
