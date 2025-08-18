import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from "@nestjs/common";

@Injectable()
export class EmailValidationPipe implements PipeTransform {
    transform(value: any) {
        const EmailRegex = /^[a-zA-z0-9_.]{3,30}@[a-zA-z0-9]{2,10}\.[a-zA-Z]{2,20}$/
        if(EmailRegex.test(value)) return value
        throw new BadRequestException("invalid Email information")
    }
    
}