// usuario-crate.dto.ts

import {IsDate, IsEmpty, IsNotEmpty, IsString, Length} from "class-validator";

export class UsuarioCreateDto {

    @IsNotEmpty()
    @IsString()

    @Length(5)
    nombre:string;

    @IsNotEmpty()
    @IsString()
    @Length(5)
    correo:string;



    @IsNotEmpty()
    @IsDate()
    @Length(5)

    fechaNacimiento:string;


    @IsNotEmpty()
    @Length(5)

    password:string;

}