import {Body, Controller , Get, Param, ParseIntPipe, Post, ValidationPipe} from "@nestjs/common"
import { UserService } from "./user.service"
import { CreateUserDto, LoginDto } from "./user.dto"
import { EmailValidationPipe } from "./Pipes/user.pipe"


@Controller("/user")
export class UserView{
    constructor(private Uservice : UserService){}
    @Get()
    findUser(){
        return this.Uservice
    }
    @Post()
    createUser(@Body() Userdto : CreateUserDto){
        this.Uservice.create(Userdto)
    }
    @Post("\reg")
    register(@Body("email" , EmailValidationPipe)  email : string){
        return email
    }
    @Post("\login")
    Login(@Body() logindto:LoginDto ){
        return logindto
    }
    @Get('/:id')
    findOneUser(@Param("id" , ParseIntPipe) id:number){
        return this.Uservice.findOne(id)
    }
}