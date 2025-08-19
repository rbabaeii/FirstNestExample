import { CallHandler, ExecutionContext, NestInterceptor } from "@nestjs/common";
import { map } from "rxjs";

export class TransformerInterceptor implements NestInterceptor{
    intercept(context: ExecutionContext, next: CallHandler<any>){
        return next.handle().pipe(map((data)=>{
            if(typeof data == "string") return {
                data : {
                    message:data
                }
            }
            return {
                data : {
                    message:data
                }
            }
        }))
    } }