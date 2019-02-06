import { UsuarioEntity } from "../usuario/usuario-entity";
import { ProductoEntity } from "../producto/producto.entity";
export declare class TiendaEntity {
    id: number;
    nombre: string;
    direccion: string;
    fechaApertura: string;
    RUC: number;
    matriz: boolean;
    usuario: UsuarioEntity;
    productos: ProductoEntity[];
}
