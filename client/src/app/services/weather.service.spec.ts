import { TestBed, inject } from '@angular/core/testing';
import { HttpModule, Http } from '@angular/http';
import { WeatherService } from './weather.service';

describe('WeatherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
    	imports: [ HttpModule ],
      	providers: [WeatherService]
    });
  });

  it('should be created', inject([WeatherService], (service: WeatherService) => {
    expect(service).toBeTruthy();
  }));
});
