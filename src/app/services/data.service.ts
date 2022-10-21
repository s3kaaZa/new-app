import { Injectable } from '@angular/core';
import { IUser, IUserViewModel } from "../models/user.model";
import { LocalService } from "./local.service";
import { DataTransformService } from "./data-transform.service";


@Injectable({
  providedIn: 'root'
})
export class DataService {
  protected readonly localStorageKey = 'user';

  constructor(
    private readonly localService: LocalService,
    private readonly dataTransformService: DataTransformService
  ) { }

  SaveData(user: IUserViewModel): void {
    this.localService.SaveUserToLocalStorage(
      this.localStorageKey,
      this.dataTransformService.UserDataFromViewModel(user)
    );
  }
  GetData(): IUserViewModel | null {
    const user: IUser | null = this.localService.GetUserFromLocalStorage(this.localStorageKey);
    if (user) {
      return this.dataTransformService.UserDataToViewModel(user);
    } else {
      return null;
    }
  }
}
