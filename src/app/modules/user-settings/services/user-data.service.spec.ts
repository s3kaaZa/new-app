import { TestBed } from '@angular/core/testing';
import { UserDataService } from '@main/app/modules/user-settings/services/user-data.service';
import { LocalStorageService } from '@main/app/services/local-storage.service';
import { UserTransformService } from '@main/app/modules/user-settings/services/user-transform.service';

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
  const localStorageServiceSpy = jasmine.createSpyObj<LocalStorageService>('LocalService', ['SaveUser', 'GetUser']);
  const userTransformServiceSpy = jasmine.createSpyObj<UserTransformService>('DataTransformService', ['UserDataToViewModel', 'UserDataFromViewModel']);
  let userDataService: UserDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: LocalStorageService,
          useValue: localStorageServiceSpy
        },
        {
          provide: UserTransformService,
          useValue: userTransformServiceSpy
        }
      ]
    });
    userDataService = TestBed.inject(UserDataService);
  });

  it('should be created', () => {
    expect(userDataService).toBeTruthy();
  });

  it('SaveUser should call the SaveUserToLocalStorage method from LocalStorageService', () => {
    userTransformServiceSpy.UserDataFromViewModel.and.returnValue(userFromViewModel);
    userDataService.SaveUser(userToViewModel);
    expect(localStorageServiceSpy.SaveUser).toHaveBeenCalled();
  });

  it('GetUser should call the LocalStorageService', () => {
    localStorageServiceSpy.GetUser.and.returnValue(null);
    userDataService.GetUser();
    expect(localStorageServiceSpy.GetUser).toHaveBeenCalledWith('user');
  });

  it('GetUser should return null', () => {
    localStorageServiceSpy.GetUser.and.returnValue(null);
    userDataService.GetUser();
    expect(localStorageServiceSpy.GetUser).toHaveBeenCalled();
    expect(userDataService.GetUser()).toBeNull();
  });

  it('GetUser should return user to view model', () => {
    localStorage.setItem('user', JSON.stringify(userFromViewModel));
    localStorageServiceSpy.GetUser.and.returnValue(userFromViewModel);
    userTransformServiceSpy.UserDataToViewModel.and.returnValue(userToViewModel);
    userDataService.GetUser();
    expect(localStorageServiceSpy.GetUser).toHaveBeenCalled();
    expect(userTransformServiceSpy.UserDataToViewModel).toHaveBeenCalledWith(userFromViewModel);
    expect(userDataService.GetUser()).toEqual(userToViewModel);
  });
});
