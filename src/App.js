import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { NavBar } from 'components/NavBar/NavBar';
import CurrentWeather from 'pages/CurrentWeather/CurrentWeather';
import { Loading } from 'components/Loader/Loader';

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
    <main>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<CurrentWeather />} />

          <Route
            path="forecast"
            element={
              <Suspense fallback={<Loading />}>
                <WeatherForecast />
              </Suspense>
            }
          />

          <Route
            path="*"
            element={
              <Suspense fallback={<Loading />}>
                <NotFound />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
