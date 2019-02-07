import { VentaService } from "./venta.service";
import { VentaEntity } from "./venta.entity";
import { Venta } from "./venta.service";
export declare class VentaController {
    private readonly _ventaService;
    constructor(_ventaService: VentaService);
    ventas(response: any, accion: string, nombre: string, busqueda: string): Promise<void>;
    ventasPublico(response: any, busqueda: string): Promise<void>;
    borrar(idVenta: string, response: any): Promise<void>;
    crearUsuario(response: any): void;
    actualizarVenta(idVenta: string, response: any): Promise<void>;
    actualizarVentaFormulario(idVenta: string, response: any, venta: Venta): Promise<void>;
    crearVentaFormulario(venta: Venta, response: any): void;
    obtenerPorId(idVenta: any): Promise<VentaEntity>;
}
