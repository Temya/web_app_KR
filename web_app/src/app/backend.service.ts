import { Injectable } from '@angular/core';
import { UserInfo } from './user-info';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  public usersInfo?: UserInfo;
  private apiUrl = 'http://localhost:3000/api/reservations';

  constructor(private readonly http: HttpClient) {}

  public addReservation(reservationData: UserInfo): Observable<any> {
    return this.http.post<any>(this.apiUrl, reservationData);
  }

  public getAllReservations(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
