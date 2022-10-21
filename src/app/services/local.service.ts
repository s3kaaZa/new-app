import { Injectable } from '@angular/core';
import { IUser } from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class LocalService {
  SaveUserToLocalStorage(key: string, user: IUser): void {
    localStorage.setItem(key, JSON.stringify(user));
  }
  GetUserFromLocalStorage(key: string): IUser | null {
    const userString: string | null = localStorage.getItem(key);
    if (userString) {
      return JSON.parse(userString);
    } else {
      return null;
    }
  }
}
