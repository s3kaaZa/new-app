import { Injectable } from '@angular/core';
import {IUser} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  constructor() { }

  SaveUserToLocalStorage(key: string, user: IUser) {
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
