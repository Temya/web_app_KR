import { Injectable } from '@angular/core';
import { UserInfo } from './user-info';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  public usersInfo?: UserInfo;

  constructor() {}

  public setInfoOfUser(user: UserInfo): void {
    
  }
}
