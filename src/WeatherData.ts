import StatisticsDisplay from './StatisticsDisplay';
import ForecastDisplay from './ForecastDisplay';
import CurrentConditionsDisplay from './CurrentConditionsDisplay';
import HeatIndexDisplay from './HeatIndexDisplay';
import WeatherDataObserver from './WeatherDataObserver';

export default class WeatherData {
  private _temperature = 0;
  
  private _observers : WeatherDataObserver[] = [];

  get temperature(): number {
    return this._temperature;
  }

  private _humidity = 0;

  get humidity(): number {
    return this._humidity;
  }

  private _pressure = 0;

  get pressure(): number {
    return this._pressure;
  }

  public setMeasurements(temperature: number, humidity: number, pressure: number): void {
    this._temperature = temperature;
    this._humidity = humidity;
    this._pressure = pressure;
    this.measurementsChanged();
  }

  private measurementsChanged() {
    this.updateObservers();
  }

  /**
   * Updates all of the observers in the internal _observers array.
   */
  private updateObservers() {
    this._observers.forEach(obs => obs.update(this));
  }

  /**
   * Adds the given client to this weather data
   * 
   * @param observer the observer to be added to this
   */
  public addObserver(observer: WeatherDataObserver): void {
    this._observers.push(observer);
  }

  /**
   * Removes the given client from this weather data
   * 
   * @param observer the observer to be removed
   */
  public remnoveObserver(observer: WeatherDataObserver): void {
    this._observers = this._observers.filter(obs => obs !== observer);
  }


}
