import { Controller, Get, UseGuards, UseInterceptors } from '@nestjs/common';
import { LoggerInterceptor } from './interceptor/Logger.interceptor';
import { AuthGuaerd } from 'guards/auth.guard';

@Controller()
@UseInterceptors(LoggerInterceptor)
@UseGuards(AuthGuaerd)
export class AppController {
  @Get()
  getHello(): string {
    return "Hello NestJs";
  }
}
