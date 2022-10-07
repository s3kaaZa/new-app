import { TestBed } from '@angular/core/testing';

import { DataTransformService } from './data-transform.service';

describe('DataTransformService', () => {
  let service: DataTransformService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataTransformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('UserDataToViewModel should transform response to match ui needs', () => {
    const data = {
      name: 'string',
      surname: 'string',
      country: 'string',
      option: 'string',
      email: 'string',
      zipCode: 12345
    };
    const result = service.UserDataToViewModel(data);
    expect(result).toEqual({
      Name: 'string',
      Surname: 'string',
      Country: 'string',
      Option: 'string',
      Email: 'string',
      ZipCode: 12345
    })
  });

  it('UserDataFromViewModel should transform response to match ui needs', () => {
    const data = {
      Name: 'string',
      Surname: ' string',
      Country: '  string ',
      Option: 'string          ',
      Email: '              string          ',
      ZipCode: 12345
    };
    const result = service.UserDataFromViewModel(data);
    expect(result).toEqual({
      name: 'string',
      surname: 'string',
      country: 'string',
      option: 'string',
      email: 'string',
      zipCode: 12345
    })
  });
});
