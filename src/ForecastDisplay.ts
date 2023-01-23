import WeatherData from './WeatherData';
import WeatherDataObserver from './WeatherDataObserver'

export default class ForecastDisplay implements WeatherDataObserver {
  /**
   * Adds this to the weather data as an observer when this is created.
   * 
   * @param weatherData the weather data that will observe this
   */
  constructor(private weatherData:WeatherData) {
    weatherData.addObserver(this);
  }

  private _currentPressure = 0;

  private _lastPressure = 0;


  displayForecast(weatherData: WeatherData): void {
    this._lastPressure = this._currentPressure;
    this._currentPressure = weatherData.pressure;
    let forecast;
    if (this._currentPressure > this._lastPressure)
      forecast = 'Improving weather on the way!';
    else if (this._currentPressure === this._lastPressure)
      forecast = 'More of the same';
    else
      forecast = 'Watch out for cooler, rainy weather';
    // eslint-disable-next-line
    console.log('Forecast: %s', forecast);
  }

  /**
   * Updates this forecast display
   * 
   * @param theWeatherData the weather data that updates this forecast display
   */

  update(weatherData: WeatherData): void {
    this.displayForecast(weatherData)
  }
}
