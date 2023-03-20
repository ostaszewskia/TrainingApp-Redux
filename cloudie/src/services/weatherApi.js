import { createrApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "weatherapi-com.p.rapidapi.com";

const weatherHeaders = {
  "X-RapidAPI-Key": "022be03c1bmsh3b2cc4ebdcb3d61p13bf75jsn8899f6bb76c7",
  "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
};

const requestWeather = (url) => ({ url, headers: weatherHeaders });

export const weatherApi = createrApi({
  reducerPath: "weatherApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getForecastWeather: builder.query({
      query: (location) => requestWeather(`forecast.json?q=${location}&days=3`),
    }),
    getSearchWeather: builder.query({
      query: (search) => requestWeather(`search.json?q=${search}&days=3`),
    }),
  }),
});

export const { useGetForecastWeatherQuery, useGetSearchWeatherQuery } =
  weatherApi;
