import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from "@nestjs/common";
import { validate } from "class-validator";
import { plainToClass } from "class-transformer";

export default class ValidationPipe implements PipeTransform {
    async transform(value: any, metadata: ArgumentMetadata) {
        const metatype = metadata.metatype;
        if (!metatype || !this.needCheckType(metatype)) {
            return value;
        }
        const obj = plainToClass(metatype, value);
        const errors = await validate(obj);
        if (errors.length > 0) {
            throw new BadRequestException("ValidationError");
        }
        return obj;
    }

    needCheckType(metaType: Function) {
        const typesToIgnore: Function[] = [String, Array, Boolean, Number, Object];
        return !typesToIgnore.includes(metaType);
    }   
}