import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {UsuarioEntity} from "./usuario/usuario-entity";
import {TiendaEntity} from "./tienda/tienda.entity";
import {ProductoEntity} from "./producto/producto.entity";
import {UsuarioModule} from "./usuario/usuario.module";


@Module({
  imports: [
    TypeOrmModule
        .forRoot({
          type: 'mysql',
          host: 'localhost',
          port: 3306,
          username: 'root',
          password: 'root',
          database: 'web-examen',
          synchronize: true,
          dropSchema: false,
          entities: [
            UsuarioEntity,
            TiendaEntity,
            ProductoEntity
          ]
        }),
    UsuarioModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
