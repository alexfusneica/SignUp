import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';


@Injectable()
export class TokenInterceportService implements HttpInterceptor {

    constructor() { }

    intercept(req: any, next: any) {

        let tokenizedReq = req.clone({
            setHeaders: {
                Authorization: 'Bearer dc84bd0c21287d4e0dcc3ab43968d40f62cd5cefc4c0592afd49a9c92c807320'
            }
        })
        return next.handle(tokenizedReq)
    }
}
