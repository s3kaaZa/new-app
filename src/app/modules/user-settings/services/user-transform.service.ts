import { Injectable } from '@angular/core';
import { IUserModel, IUserViewModel } from "@main/app/modules/user-settings/models/user.model";

@Injectable({
  providedIn: 'root'
})
export class UserTransformService {
  UserDataToViewModel(user: IUserModel): IUserViewModel {
    return {
      Name: user.name,
      Surname: user.surname,
      Country: user.country,
      Option: user.option,
      Email: user.email,
      ZipCode: user.zipCode
    }

  }
  UserDataFromViewModel(user: IUserViewModel): IUserModel {
    return {
      name: user.Name.trim(),
      surname: user.Surname.trim(),
      country: user.Country.trim(),
      option: user.Option.trim(),
      email: user.Email.trim(),
      zipCode: user.ZipCode
    }
  }
}
