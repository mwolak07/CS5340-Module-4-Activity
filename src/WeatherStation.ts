import CurrentConditionsDisplay from './CurrentConditionsDisplay';
import ForecastDisplay from './ForecastDisplay';
import HeatIndexDisplay from './HeatIndexDisplay';
import StatisticsDisplay from './StatisticsDisplay';
import WeatherData from './WeatherData';

const weatherData = new WeatherData();

const currentConditionsObserver = new CurrentConditionsDisplay(weatherData);
const forecastObserver = new ForecastDisplay(weatherData);
const heatIndexObserver = new HeatIndexDisplay(weatherData);
const statisticsObserver = new StatisticsDisplay(weatherData);

weatherData.setMeasurements(80, 65, 30.4);

weatherData.setMeasurements(82, 70, 29.2);

weatherData.setMeasurements(78, 90, 29.2);
