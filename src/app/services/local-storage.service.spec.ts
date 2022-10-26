import { TestBed } from '@angular/core/testing';

import { LocalStorageService } from './local-storage.service';

describe('LocalStorageService', () => {
  const localStorageKey = 'test';
  const userFromViewModel = {
    name: 'string',
    surname: 'string',
    country: 'string',
    option: 'string',
    email: 'string',
    zipCode: 12345
  };
  let service: LocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('SaveUser should create an object in localStorage', () => {
    service.SaveUser(localStorageKey, userFromViewModel);
    const result = localStorage.getItem(localStorageKey);
    expect(result).toEqual('{"name":"string","surname":"string","country":"string","option":"string","email":"string","zipCode":12345}');
  });

  it('GetUser should return user from view model from localStorage', () => {
    service.SaveUser(localStorageKey, userFromViewModel);
    const result = service.GetUser(localStorageKey);
    expect(result).toEqual(userFromViewModel);
  });

  it('GetUser should return null from localStorage', () => {
    localStorage.clear();
    const result = service.GetUser(localStorageKey);
    expect(result).toBeNull();
  });
});
