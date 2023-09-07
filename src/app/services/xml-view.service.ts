import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class XmlViewService {

  constructor(private http: HttpClient) { }

  enviarArquivos(file: any):Observable<any>{
    return this.http.post(`${environment.url_api}/xml`, file, {observe: "response"}).pipe(take(1))
  }
}
