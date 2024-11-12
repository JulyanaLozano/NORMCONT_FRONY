import { Rol } from "./rol";

export class User {

    idUsuario: number = 0;
    nombreUsuario!: string;
    estadoUsuario: number =1;
    apellidoUsuario!: string;
    email!: string;
    codUsuario!: string;
    password!: string;
    identificacion!: string;
    tipoIdentificacion!:string;
    roles!: Rol[]; // Aquí incluimos el campo de roles
    
}