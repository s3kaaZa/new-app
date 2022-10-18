import { TestBed } from '@angular/core/testing';
import { DataService } from './data.service';
import { LocalService } from "./local.service";
import { DataTransformService } from "./data-transform.service";

describe('DataService', () => {
  const userFromViewModel = {
    name: 'string',
    surname: 'string',
    country: 'string',
    option: 'string',
    email: 'string',
    zipCode: 12345
  };
  const userToViewModel = {
    Name: 'string',
    Surname: 'string',
    Country: 'string',
    Option: 'string',
    Email: 'string',
    ZipCode: 12345
  };
  const localServiceSpy = jasmine.createSpyObj<LocalService>('LocalService', ['SaveUserToLocalStorage', 'GetUserFromLocalStorage']);
  const transformServiceSpy = jasmine.createSpyObj<DataTransformService>('DataTransformService', ['UserDataToViewModel']);
  let dataService: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: LocalService,
          useValue: localServiceSpy
        },
        {
          provide: DataTransformService,
          useValue: transformServiceSpy
        }
      ]
    });
    dataService = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(dataService).toBeTruthy();
  });

  it('SaveData should call the SaveUserToLocalStorage method from LocalService', () => {
    const key = 'user';
    dataService.SaveData(userFromViewModel);
    expect(localServiceSpy.SaveUserToLocalStorage).toHaveBeenCalledWith(key, userFromViewModel);
  });

  it('GetData should call the GetUserFromLocalStorage method from LocalService', () => {
    localServiceSpy.GetUserFromLocalStorage.and.returnValue(null);
    dataService.GetData();
    expect(localServiceSpy.GetUserFromLocalStorage).toHaveBeenCalledWith('user');
  });

  it('GetData should return null', () => {
    localServiceSpy.GetUserFromLocalStorage.and.returnValue(null);
    dataService.GetData();
    expect(localServiceSpy.GetUserFromLocalStorage).toHaveBeenCalled();
    expect(dataService.GetData()).toBeNull();
  });

  it('GetData should return user to view model', () => {
    localStorage.setItem('user', JSON.stringify(userFromViewModel));
    localServiceSpy.GetUserFromLocalStorage.and.returnValue(userFromViewModel);
    transformServiceSpy.UserDataToViewModel.and.returnValue(userToViewModel);
    dataService.GetData();
    expect(localServiceSpy.GetUserFromLocalStorage).toHaveBeenCalled();
    expect(transformServiceSpy.UserDataToViewModel).toHaveBeenCalled();
    expect(dataService.GetData()).toEqual(userToViewModel);
  });
});
