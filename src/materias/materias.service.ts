import { Injectable } from '@nestjs/common';

@Injectable()
export class MateriasService {
    // Declaramos un arreglo de materias como propiedad privada de la clase
    private materias = [
        {
            id: 1,
            nombre: 'Lenguaje',
            tipo: 2,
        },
        {
            id: 2,
            nombre: 'Matematicas',
            tipo: 1,
        },
        {
            id: 3,
            nombre: 'Sociales',
            tipo: 2,
        },
    ];

    // Este es un método para obtener todas las materias
    getMaterias() {
        return this.materias;
    }

    // Creanis otro método solamente para obtener una materia por su ID
    getMateria(id: number) {
        // Utilizamos el método "find()"" para buscar una materia con la ID que coincida con el parámetro "id"
        // Utilizamos el operador de igualdad débil (==) para comparar los valores del ID sin tener en cuenta el tipo de datos
        return this.materias.find(materia => materia.id == id);
    }
}