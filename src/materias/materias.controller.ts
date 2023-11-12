import { Controller, Get, Param } from '@nestjs/common';
import { MateriasService } from './materias.service';

// El controlador se asocia a la ruta '/materias'
@Controller('materias')
export class MateriasController {

    constructor(private materiasService: MateriasService) {}

    // Decorador get para la ruta '/materias'
    @Get()
    getMaterias() {
        // Llama al método getMaterias() del servicio MateriasService para obtener todas las materias
        return this.materiasService.getMaterias();
    }

    // Decorador get para la ruta '/materias/id'
    @Get(':id')
    // El decorador @Param('id') indica que el valor del parámetro 'id' se obtendrá de la ruta correspondiente
    getMateriaById(@Param('id') id: number) {
        // Llama al método getMateria() del servicio MateriasService para obtener una materia específica por su ID
        return this.materiasService.getMateria(id);
    }
}