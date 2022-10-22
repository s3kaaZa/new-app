import { Injectable } from '@angular/core';
import { IUser, IUserViewModel } from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class DataTransformService {
  UserDataToViewModel(user: IUser): IUserViewModel {
    return {
      Name: user.name,
      Surname: user.surname,
      Country: user.country,
      Option: user.option,
      Email: user.email,
      ZipCode: user.zipCode
    }

  }
  UserDataFromViewModel(user: IUserViewModel): IUser {
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
