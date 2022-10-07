import { TestBed } from '@angular/core/testing';

import { LocalService } from './local.service';

describe('LocalService', () => {
  const localStorageKey = 'test';
  const localStorageData = {
    name: 'string',
    surname: 'string',
    country: 'string',
    option: 'string',
    email: 'string',
    zipCode: 12345
  };
  let service: LocalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('SaveUserToLocalStorage should create an object in localStorage', () => {
    service.SaveUserToLocalStorage(localStorageKey, localStorageData);
    const result = localStorage.getItem(localStorageKey);
    expect(result).toEqual('{"name":"string","surname":"string","country":"string","option":"string","email":"string","zipCode":12345}');
  });

  it('GetUserFromLocalStorage should return object from localStorage', () => {
    service.SaveUserToLocalStorage(localStorageKey, localStorageData);
    const result1 = service.GetUserFromLocalStorage(localStorageKey);
    expect(result1).toEqual(localStorageData);
  });

  it('GetUserFromLocalStorage should return null from localStorage', () => {
    localStorage.clear();
    const result2 = service.GetUserFromLocalStorage(localStorageKey);
    expect(result2).toBeNull();
  });
});
