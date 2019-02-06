import { TiendaService } from './tienda.service';
export declare class TiendaController {
    private readonly _tiendaService;
    constructor(_tiendaService: TiendaService);
    inicio(response: any, busqueda: string, accion: string, titulo: string, text: any): Promise<void>;
    inicioPOST(response: any, text: any): void;
    eliminar(response: any, ideNoticia: string): Promise<void>;
    crearNoticia(response: any): void;
    crearNoticiaFuncion(response: any, noticia: Noticia): Promise<void>;
    actualizarNoticiaVista(response: any, idNoticia: string): Promise<void>;
    actualizarNoticiaMetodo(response: any, idNoticia: string, noticia: Noticia): Promise<void>;
}
export interface Noticia {
    id?: number;
    titulo: string;
    descripcion: string;
}
