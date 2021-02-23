import { NestMiddleware } from "@nestjs/common";

export class LoggerMiddleware implements NestMiddleware {
    use(req, res, next) {
        console.log("Request...");
        next();
    }
}