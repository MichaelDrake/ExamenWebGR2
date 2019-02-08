import {Module} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TiendaService } from './tienda.service';
import { TiendaEntity } from './tienda.entity';
import { TiendaController } from './tienda.controller';

@Module(
  {
    imports: [
      TypeOrmModule.forFeature(
        [
          TiendaEntity,
        ]
      ),
    ],
    controllers: [
      TiendaController,
    ],
    providers: [
      TiendaService,
    ],
    exports: [
      // Servicios o modulos
      TiendaService,
    ],
  },
)
export class TiendaModule {

}
