import { TestBed } from '@angular/core/testing';

import { AsideMenuService } from './aside-menu.service';

describe('AsideMenuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AsideMenuService = TestBed.get(AsideMenuService);
    expect(service).toBeTruthy();
  });
});
