
import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {UsuarioEntity} from "./usuario/usuario-entity";
import {TiendaEntity} from "./tienda/tienda.entity";
import {ProductoEntity} from "./producto/producto.entity";
import {UsuarioModule} from "./usuario/usuario.module";
import {Evento_por_productoEntity} from "./evento_por_producto/evento_por_producto.entity";
import {EventoEntity} from "./evento/evento.entity";
import {Roles_por_usuarioEntity} from "./roles_por_usuario/roles_por_usuario.entity";
import {RollEntity} from "./rol/roll.entity";


@Module({
    imports: [
        TypeOrmModule
            .forRoot({
                type: 'mysql',
                host: 'localhost',
                port: 32783,
                username: 'root',
                password: 'root',
                database: 'web-examen',
                synchronize: true,
                dropSchema: false,
                entities: [
                    UsuarioEntity,
                    TiendaEntity,
                    ProductoEntity,
                    Evento_por_productoEntity,
                    EventoEntity,
                    Roles_por_usuarioEntity,
                    RollEntity
                ]
            }),
        UsuarioModule,

    ],
    controllers: [AppController],
    providers: [AppService],

})
export class AppModule {
}
