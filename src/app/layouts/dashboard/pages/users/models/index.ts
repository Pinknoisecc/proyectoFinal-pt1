export interface IUser {
    id: number;
    firstName: string;
    lastName: string;
    email: string ;
    cursos: string[]; // Nueva variable curso
    asignaturas: string []; 
    createdAt: Date;
}
