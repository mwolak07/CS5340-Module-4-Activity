import WeatherData from './WeatherData';
import WeatherDataObserver from './WeatherDataObserver';

export default class StatisticsDisplay implements WeatherDataObserver{
  /** 
   * Creates a new StatisticsDisplay, subscribing it to the given weatherData object.
   */
  constructor(private weatherData:WeatherData) {
    weatherData.addObserver(this);
  }

  private _maxTemp = 0;

  private _minTemp = 0;

  private _tempSum = 0;

  private _numReadings = 0;

  displayStatistics(currentData: WeatherData): void {
    this._tempSum += currentData.temperature;
    this._numReadings += 1;
    if (this._maxTemp < currentData.temperature) {
      this._maxTemp = currentData.temperature;
    }
    if (this._minTemp > currentData.temperature) {
      this._minTemp = currentData.temperature;
    }

    // eslint-disable-next-line
    console.log('Avg/max/min temperature = %f/%i/%i', this._tempSum / this._numReadings, this._maxTemp, this._minTemp);
  }

  /**
   * Updates this display with new weather data.
   * 
   * @param weatherData: The new weather data to be displayed.
   */
  update(weatherData: WeatherData): void {
    this.displayStatistics(weatherData);
  }
}
