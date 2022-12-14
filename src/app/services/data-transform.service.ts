import { Injectable } from '@angular/core';
import {IUser, IUserViewModel} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class DataTransformService {

  constructor() { }

  UserDataToViewModel(user: IUser) {
    return {
      Name: user.name,
      Surname: user.surname,
      Country: user.country,
      Option: user.option,
      Email: user.email,
      ZipCode: user.zipCode
    }

  }
  UserDataFromViewModel(user: IUserViewModel) {
    return {
      name: user.Name?.trim(),
      surname: user.Surname?.trim(),
      country: user.Country?.trim(),
      option: user.Option?.trim(),
      email: user.Email?.trim(),
      zipCode: user.ZipCode || undefined
    }
  }
}
