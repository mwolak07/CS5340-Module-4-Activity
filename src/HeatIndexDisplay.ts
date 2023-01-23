import WeatherData from './WeatherData';
import WeatherDataObserver from './WeatherDataObserver';

export default class HeatIndexDisplay implements WeatherDataObserver {
  /**
   * Constructs a HeatIndexDisplay object and subscribes it to the given WeatherData
   * 
   * @param weatherData: The WeatherData object to subscribe this observer to
   */
  constructor(private weatherData:WeatherData) {
    weatherData.addObserver(this);
  }

  static displayHeatIndex(currentData: WeatherData): void {
    const {humidity, temperature} = currentData;
    const heatIndex = (
      (16.923 + (0.185212 * temperature)) +
      (5.37941 * humidity) -
      (0.100254 * temperature * humidity) +
      (0.00941695 * (temperature * temperature)) +
      (0.00728898 * (humidity * humidity)) +
      (0.000345372 * (temperature * temperature * humidity)) -
      (0.000814971 * (temperature * humidity * humidity)) +
      (0.0000102102 * (temperature * temperature * humidity * humidity)) -
      (0.000038646 * (temperature * temperature * temperature)) +
      (0.0000291583 * (humidity * humidity * humidity)) +
      (0.00000142721 * (temperature * temperature * temperature * humidity)) +
      (0.000000197483 * (temperature * humidity * humidity * humidity)) -
      (0.0000000218429 * (temperature * temperature * temperature * humidity * humidity)) +
      (0.000000000843296 * (temperature * temperature * humidity * humidity * humidity)) -
      (0.0000000000481975 * (temperature * temperature * temperature * humidity * humidity * humidity)));
    // eslint-disable-next-line
    console.log('Heat Index: %f', heatIndex);
  }

  /**
   * Updates this display with new weather data.
   * 
   * @param weatherData: The new weather data to be displayed.
   */
  public update(weatherData: WeatherData): void {
    HeatIndexDisplay.displayHeatIndex(weatherData);
  }
}
