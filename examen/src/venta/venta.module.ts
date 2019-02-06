import {Module} from "@nestjs/common";
import {UsuarioController} from "../usuario/usuario.controller";
import {TypeOrmModule} from "@nestjs/typeorm";
import {VentaEntity} from "./venta.entity";
import {VentaService} from "./venta.service";

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
        // UsuarioController
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
