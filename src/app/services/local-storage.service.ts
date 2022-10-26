import { Injectable } from '@angular/core';
import { IUserModel } from "../modules/user-settings/models/user.model";

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  SaveUser(key: string, user: IUserModel): void {
    localStorage.setItem(key, JSON.stringify(user));
  }
  GetUser(key: string): IUserModel | null {
    const userString: string | null = localStorage.getItem(key);
    if (userString) {
      return JSON.parse(userString);
    } else {
      return null;
    }
  }
}
