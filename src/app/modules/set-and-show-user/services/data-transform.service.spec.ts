import { TestBed } from '@angular/core/testing';

import { DataTransformService } from './data-transform.service';

describe('DataTransformService', () => {
  let service: DataTransformService;
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

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataTransformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('UserDataToViewModel should transform response to match ui needs', () => {
    const result = service.UserDataToViewModel(userFromViewModel);
    expect(result).toEqual(userToViewModel);
  });

  it('UserDataFromViewModel should transform response to match ui needs', () => {
    const result = service.UserDataFromViewModel(userToViewModel);
    expect(result).toEqual(userFromViewModel);
  });
});
