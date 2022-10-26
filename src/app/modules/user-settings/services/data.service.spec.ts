import { TestBed } from '@angular/core/testing';
import { DataService } from '@main/app/modules/user-settings/services/data.service';
import { LocalStorageService } from '@main/app/services/local-storage.service';
import { DataTransformService } from '@main/app/modules/user-settings/services/data-transform.service';

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
  const localServiceSpy = jasmine.createSpyObj<LocalStorageService>('LocalService', ['SaveUser', 'GetUser']);
  const transformServiceSpy = jasmine.createSpyObj<DataTransformService>('DataTransformService', ['UserDataToViewModel', 'UserDataFromViewModel']);
  let dataService: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: LocalStorageService,
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

  it('SaveData should call the SaveUserToLocalStorage method from LocalStorageService', () => {
    transformServiceSpy.UserDataFromViewModel.and.returnValue(userFromViewModel);
    dataService.SaveData(userToViewModel);
    expect(localServiceSpy.SaveUser).toHaveBeenCalled();
  });

  it('GetData should call the GetUserFromLocalStorage method from LocalStorageService', () => {
    localServiceSpy.GetUser.and.returnValue(null);
    dataService.GetData();
    expect(localServiceSpy.GetUser).toHaveBeenCalledWith('user');
  });

  it('GetData should return null', () => {
    localServiceSpy.GetUser.and.returnValue(null);
    dataService.GetData();
    expect(localServiceSpy.GetUser).toHaveBeenCalled();
    expect(dataService.GetData()).toBeNull();
  });

  it('GetData should return user to view model', () => {
    localStorage.setItem('user', JSON.stringify(userFromViewModel));
    localServiceSpy.GetUser.and.returnValue(userFromViewModel);
    transformServiceSpy.UserDataToViewModel.and.returnValue(userToViewModel);
    dataService.GetData();
    expect(localServiceSpy.GetUser).toHaveBeenCalled();
    expect(transformServiceSpy.UserDataToViewModel).toHaveBeenCalledWith(userFromViewModel);
    expect(dataService.GetData()).toEqual(userToViewModel);
  });
});
