import axios from 'axios';
import type { WeatherData } from '../types/weathertypes';

export const getWeather = async (
  lat: number,
  lon: number
): Promise<WeatherData> => {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=auto`;

  const { data } = await axios.get(url);

  return {
    current_temperature: data.current_weather.temperature,
    min_temperature: data.daily.temperature_2m_min[0],
    max_temperature: data.daily.temperature_2m_max[0],
    weathercode: data.daily.weathercode[0],
  };
};
