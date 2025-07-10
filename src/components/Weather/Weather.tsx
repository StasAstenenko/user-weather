import { useEffect, useState } from 'react';
import { getWeather } from '../../api/weatherApi';

interface Coordination {
  lon: number;
  lat: number;
}

interface WeatherData {
  temperature: number;
  min: number;
  max: number;
  code: number;
}

const Weather = ({ lon, lat }: Coordination) => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setIsLoading(true);
        setError(false);
        const {
          current_temperature,
          max_temperature,
          min_temperature,
          weathercode,
        } = await getWeather(lat, lon);

        setWeather({
          temperature: current_temperature,
          min: min_temperature,
          max: max_temperature,
          code: weathercode,
        });
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchWeather();
  }, [lat, lon]);

  const getWeatherIcon = (code: number) => {
    if (code === 0) return '☀️ Ясно';
    if (code <= 3) return '⛅ Хмарно';
    if (code <= 45) return '🌫 Туман';
    if (code <= 67) return '🌧 Дощ';
    if (code <= 77) return '❄️ Сніг';
    if (code >= 95) return '⛈ Гроза';
    return '❓';
  };

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {!weather ? (
        <p>Weather not found</p>
      ) : (
        <div>
          <h4>🌤 Погода</h4>
          <p>
            <strong>Поточна:</strong> {weather.temperature}°C
          </p>
          <p>
            <strong>Мін:</strong> {weather.min}°C | <strong>Макс:</strong>{' '}
            {weather.max}°C
          </p>
          <p>
            <strong>Стан:</strong> {getWeatherIcon(weather.code)}
          </p>
        </div>
      )}
      {error && <p>Something wrong...</p>}
    </>
  );
};

export default Weather;
