import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bancos } from '../../../models/bancos';
@Injectable({
  providedIn: 'root',
})
export class BankListService {
  constructor(private http: HttpClient) {}

  getBanks(): Observable<any> {
    return this.http.get<Bancos>('https://brasilapi.com.br/api/banks/v1');
  }
}
