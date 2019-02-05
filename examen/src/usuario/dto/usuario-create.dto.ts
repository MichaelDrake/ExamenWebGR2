// usuario-crate.dto.ts

import {Contains,IsAlphanumeric, IsLowercase, IsUppercase, IsEmail, IsDate, IsEmpty, IsNotEmpty, IsString, Length} from "class-validator";

export class UsuarioCreateDto {

    @IsNotEmpty()
    @IsString()
    @Length(5,50)
    nombre:string;

    @IsNotEmpty()
    @IsEmail()
    @Length(5,50)
    correo:string;



    @IsNotEmpty()
    @IsDate()
    @Length(5,10)

    fechaNacimiento:string;


    @IsNotEmpty()
    @Length(8,16)
    @IsAlphanumeric()
    password:string;

}