import WeatherData from './WeatherData';

export default interface WeatherDataObserver {
    update(listener: WeatherData): void;
};
