import WeatherData from './WeatherData';
import WeatherDataObserver from './WeatherDataObserver';

export default class CurrentConditionsDisplay implements WeatherDataObserver {
  constructor(private weatherData:WeatherData) {
    weatherData.addObserver(this);
  }
  
  static displayCurrentConditions(weatherData: WeatherData): void {
    // eslint-disable-next-line
    console.log('Current conditions: %fF degrees and %f% humidity', weatherData.temperature, weatherData.humidity);
  }

  /**
   * Updates this display with new weather data.
   * 
   * @param weatherData: The new weather data to be displayed.
   */
  update(weatherData: WeatherData): void {
    CurrentConditionsDisplay.displayCurrentConditions(weatherData);
  }
}
