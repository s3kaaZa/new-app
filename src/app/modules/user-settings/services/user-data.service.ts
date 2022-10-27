import { Injectable } from '@angular/core';
import { IUserModel, IUserViewModel } from "@main/app/modules/user-settings/models/user-data.model";
import { LocalStorageService } from "@main/app/services/local-storage.service";
import { UserTransformService } from "@main/app/modules/user-settings/services/user-transform.service";


@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  protected readonly localStorageKey = 'user';

  constructor(
    private readonly localStorageService: LocalStorageService,
    private readonly userTransformService: UserTransformService
  ) { }

  SaveUser(user: IUserModel): void {
    this.localStorageService.SaveUser(this.localStorageKey, user);
  }
  GetUser(): IUserViewModel | null {
    const user: IUserModel | null = this.localStorageService.GetUser(this.localStorageKey);
    if (user) {
      return this.userTransformService.UserDataToViewModel(user);
    } else {
      return null;
    }
  }
}
