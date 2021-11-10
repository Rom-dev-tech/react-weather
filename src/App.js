import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AppBar } from 'components/AppBar/AppBar';
import { Loading } from 'components/Loader/Loader';

import './App.css';

const CurrentWeather = lazy(() =>
  import(
    './pages/CurrentWeather/CurrentWeather' /* webpackChunkName: "Current-Weather-page" */
  )
);

const WeatherForecast = lazy(() =>
  import(
    './pages/WeatherForecast/WeatherForecast' /* webpackChunkName: "Weather-Forecast-page" */
  )
);

const NotFound = lazy(() =>
  import('./pages/NotFound/NotFound' /* webpackChunkName: "Not-Found-page" */)
);

function App() {
  return (
    <>
      <AppBar />

      <main>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route index element={<CurrentWeather />} />
            <Route path="forecast" element={<WeatherForecast />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
    </>
  );
}

export default App;
