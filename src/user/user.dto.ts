import { IsEmail, IsNumber, IsString , Length } from "class-validator"


export class CreateUserDto{
    @IsNumber({} , {message : "Value is not a number"})
    id : number  ;
    @IsString()
    @Length(4,8 , {message:"name most in range 4-8"}) 
    name : string ;
    @IsString()
    @Length(4,8 , {message:"job most in range 4-8"})
    job :string ;
    email : string
}

export class registerDto {
    email :string
}
export class LoginDto {
    @IsEmail({} , {message:"Email is invalid"})
    email :string
}