import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GameItem } from '../model/game-item.interface';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  getGames(): Observable<any>{
    return this.httpClient.get('http://localhost:3000/giochi');
  }

  getFilteredGenere(genere: number): Observable<GameItem[]> {
    return this.httpClient.get<GameItem[]>('http://localhost:3000/giochi?genere=' + genere);
  }
}
