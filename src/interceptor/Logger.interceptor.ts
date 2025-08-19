import { CallHandler, ExecutionContext, Inject, Injectable, NestInterceptor } from "@nestjs/common";
import { tap } from "rxjs";


@Injectable()
export class LoggerInterceptor implements NestInterceptor{
    intercept(context: ExecutionContext, next: CallHandler<any>){

        // before
        console.log("before route handler");
        console.log(new Date().getTime());
        // after
        return next.handle().pipe(tap(()=>console.log("After Route Handler ..." + Date.now())))
    }}