import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  httpClient: any;
  // loginUser(context: any): Observable<ApiResponse<any>> {

  loginUser(context: any): Observable<Response> {

    const loginRequest = {
      email: context.email,
      password: context.password,
    };
    return this.httpClient.post(loginRequest).pipe(
      map((user: any) => {
        // localStorage.setItem('lang_app', 'FR');
      //   if (user.user.role == '2') {

      //     this.storeTokens(user.token.access_token, user.token.refresh_token);
      //     this.string = JSON.stringify(user.user)
      //     let encrypt = CryptoJS.AES.encrypt(this.string,this.secret).toString();
      //     console.log(encrypt,'encrypt');
      //   localStorage.setItem('currentUser', JSON.stringify(encrypt));
      //  //localStorage.setItem('currentUser', JSON.stringify(user.user));
      //     if (user.user.companie != undefined) {
      //       localStorage.setItem(
      //         'idUser',
      //         JSON.stringify(user.user.companie.id)
      //       );
      //     }
      //     // this.currentUserSubject.next(user.user);
      //     // const payload = user.user;
      //     // return payload;

      //   }
      })
    );
  }



  constructor() { }
}
