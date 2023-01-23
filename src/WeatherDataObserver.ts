import WeatherData from './WeatherData';

export default interface WeatherDataObserver {
    /**
     * Updates this observer with new weather data.
     * @param weatherData: the weatherData to update with.
     */
    update(weatherData: WeatherData): void;
};
