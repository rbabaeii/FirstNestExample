import { Module } from "@nestjs/common";
import { UserView } from "./user.controller";
import { UserService } from "./user.service";

@Module({
    controllers : [UserView] ,
    providers : [UserService]
})
export class UserModule{}