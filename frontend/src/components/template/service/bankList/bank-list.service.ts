import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class BankListService {
  constructor(private http: HttpClient) {}

  listBank(): Observable<any> {
    return this.http.get('https://brasilapi.com.br/api/banks/v1');
  }
}
