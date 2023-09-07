import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AgenteService {

  constructor(private http: HttpClient) { }

  obterAgentes(): Observable<any> {
    return this.http.get(`${environment.url_api}/agentes`, { observe: "response" }).pipe(take(1))
  }

  deletarDados(): Observable<any> {
    return this.http.delete(`${environment.url_api}/agentes`, { observe: "response" }).pipe(take(1))
  }

  inilPaginator(paginator: MatPaginator) {
    const paginatorIntl = paginator ? paginator._intl : null;

    if (paginatorIntl) {
      paginatorIntl.nextPageLabel = "Próxima página";
      paginatorIntl.previousPageLabel = "Página anterior";
      paginatorIntl.itemsPerPageLabel = "Itens por página"

      paginatorIntl.getRangeLabel = (page: number, pageSize: number, length: number) => {
        if(length === 0 || pageSize ===0){
          return `0 de ${length}`;
        }

        length = Math.max(length , 0);
        const startIndex = page * pageSize;
        const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
        return `${startIndex + 1} - ${endIndex} de ${length}`;
      }
    }
  }
}
