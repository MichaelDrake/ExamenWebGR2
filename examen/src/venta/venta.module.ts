import {Module} from "@nestjs/common";
import {UsuarioController} from "../usuario/usuario.controller";
import {TypeOrmModule} from "@nestjs/typeorm";
import {VentaEntity} from "./venta.entity";
import {VentaService} from "./venta.service";
import {VentaController} from "./venta.controller";

@Module({
    imports: [
        // Repositorio
        TypeOrmModule
            .forFeature(
                [
                    VentaEntity
                ]
            )
    ],
    controllers: [
        VentaController
    ],
    providers: [
        VentaService
    ],
    exports: [
        VentaService
    ]
})
export class VentaModule {
}
