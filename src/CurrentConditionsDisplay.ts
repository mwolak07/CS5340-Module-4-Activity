import WeatherData from './WeatherData';
import WeatherDataObserver from './WeatherDataObserver';

export default class CurrentConditionsDisplay implements WeatherDataObserver {
  static displayCurrentConditions(weatherData: WeatherData): void {
    // eslint-disable-next-line
    console.log('Current conditions: %fF degrees and %f% humidity', weatherData.temperature, weatherData.humidity);
  }

  update(listener: WeatherData): void {
    CurrentConditionsDisplay.displayCurrentConditions(listener);
  }
}
