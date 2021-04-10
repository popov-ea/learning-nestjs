import { ExceptionFilter, Catch, HttpException, ArgumentsHost, Inject, Injectable } from "@nestjs/common";
import { Response } from "express";

@Catch(HttpException)
export default class LoggingHttpExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
        var http = host.switchToHttp();
        var request = http.getRequest<Request>();
        var response = http.getResponse<Response>();
        var status = exception.getStatus();
        var exceptionResponse = exception.getResponse();

        console.log(`HttpException url: ${request.url} \r\nstatus code: ${status} \r\nmessage: ${exceptionResponse}`)
        response.status(status)
            .json(typeof exceptionResponse === "string" ? { status: status, message: exceptionResponse }
                : { ...exceptionResponse });
    }
}