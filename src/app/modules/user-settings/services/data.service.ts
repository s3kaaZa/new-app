import { Injectable } from '@angular/core';
import { IUserModel, IUserViewModel } from "../models/user.model";
import { LocalStorageService } from "../../../services/local-storage.service";
import { DataTransformService } from "./data-transform.service";


@Injectable({
  providedIn: 'root'
})
export class DataService {
  protected readonly localStorageKey = 'user';

  constructor(
    private readonly localService: LocalStorageService,
    private readonly dataTransformService: DataTransformService
  ) { }

  SaveData(user: IUserViewModel): void {
    this.localService.SaveUser(
      this.localStorageKey,
      this.dataTransformService.UserDataFromViewModel(user)
    );
  }
  GetData(): IUserViewModel | null {
    const user: IUserModel | null = this.localService.GetUser(this.localStorageKey);
    if (user) {
      return this.dataTransformService.UserDataToViewModel(user);
    } else {
      return null;
    }
  }
}
