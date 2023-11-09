import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MateriasController } from './materias/materias.controller';
import { MateriasService } from './materias/materias.service';

@Module({
  imports: [],
  controllers: [AppController, MateriasController],
  providers: [AppService, MateriasService],
})
export class AppModule {}
