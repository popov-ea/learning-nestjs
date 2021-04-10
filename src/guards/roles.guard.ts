import { Injectable, CanActivate, ExecutionContext } from "@nestjs/common";
import { Reflector } from "@nestjs/core";

@Injectable()
export default class RolesGuard implements CanActivate {
    //reflector is already provided by nest
    constructor(private reflector: Reflector) {

    }
    canActivate(context: ExecutionContext): boolean {
        const roles = this.reflector.get<string[]>("roles", context.getHandler());
        //TODO: check roles here
        return true;
    }
}