import { Controller, Get } from '@nestjs/common';
import { MateriasService } from './materias.service';


@Controller('materias')
export class MateriasController {

    constructor(private materiasService: MateriasService){}
    @Get()
    getMaterias(){
        return this.materiasService.getMaterias();
    }
}