// usuario-crate.dto.ts

import {
    MinDate,
    Contains,
    IsAlphanumeric,
    IsLowercase,
    IsUppercase,
    IsEmail,
    IsDate,
    IsEmpty,
    IsNotEmpty,
    IsString,
    Length,
    IsDateString
} from "class-validator";

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
    //@IsDate()
    fechaNacimiento:string;
    // @Length(5,10)


    @IsNotEmpty()
    @Length(8,16)
    @IsAlphanumeric()
    password:string;
}







