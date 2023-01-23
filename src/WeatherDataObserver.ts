import WeatherData from './WeatherData';

export default interface WeatherDataObserver {
    update(weatherData: WeatherData): void;
};
