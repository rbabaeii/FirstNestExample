import { Injectable } from "@nestjs/common";



@Injectable()

export class UserService{
    private user : any[] = []
    find() : any{
        return this.user
    }
    create(UserData:any){
        this.user.push(UserData)
        return "User created successfuly"
    }
    findOne(id:number){
        return this.user.find(user=> user.id == id)
    }

}