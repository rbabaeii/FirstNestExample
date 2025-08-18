import { NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, RequestHandler } from "express";

export class LoggerMidlware implements NestMiddleware{
    use(req: Request, res: RequestHandler, next: NextFunction) {
        console.log(`Hello Request - ${req.method} : ${req.path}`);
        next()
    }
}