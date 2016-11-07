import { WeatherForecastPage } from './app.po';

describe('weather-forecast App', function() {
  let page: WeatherForecastPage;

  beforeEach(() => {
    page = new WeatherForecastPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
