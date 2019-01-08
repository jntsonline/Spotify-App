import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpResponse,
    HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Router, Routes } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export class HttpErrorInterceptor implements HttpInterceptor {
    constructor(public router: Router) {}
    intercept(request: HttpRequest<any>, next: HttpHandler) {
        return next.handle(request)
        .pipe(
            catchError((error: any) => {
                let errorMessage = '';
                let errorStatus;
                if ( error.error instanceof ErrorEvent ) {
                    errorMessage = `Error: ${error.error.message}`;
                } else {
                  // server-side error
                  errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
                  errorStatus = error.status;
                }

                console.log(errorMessage);
                return throwError(errorMessage);
            })
        );
    }
}
