import { TestBed } from '@angular/core/testing';

import { GameGenereService } from './game-genere.service';

describe('GameGenereService', () => {
  let service: GameGenereService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameGenereService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
