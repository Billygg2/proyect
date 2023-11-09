import { Injectable } from '@nestjs/common';

@Injectable()
export class MateriasService {
    private materias =[{
        id: 1,
        nombre : "Lenguaje",
        tipo : 2
    },
    {
        id: 2,
        nombre : "Matematicas",
        tipo : 1
    },
    {
        id: 3,
        nombre : "Sociales",
        tipo : 2
    }
]

    getMaterias(){
        return this.materias;
    }
    getMateria(id: string){
        return this.materias[1];
    }


}
