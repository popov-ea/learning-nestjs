import { ArgumentsHost, ExceptionFilter, Catch } from "@nestjs/common";
import { FriendlyException } from "../exceptions/friendly.exception";
import { Request, Response } from "express";

@Catch(FriendlyException)
export class FriendlyExceptionFilter implements ExceptionFilter {
    catch(exception: FriendlyException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const request = ctx.getRequest<Request>();
        const response = ctx.getResponse<Response>();
        const status = 500;
        
        response.status(status)
            .json({
                statusCode: status,
                friendly: true,
                message: exception.message
            });
    }

}