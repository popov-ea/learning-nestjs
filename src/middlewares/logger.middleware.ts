import { NestMiddleware, Injectable } from "@nestjs/common";

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    use(req, res, next) {
        console.log("Request...");
        next();
    }
}