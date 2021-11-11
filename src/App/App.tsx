import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { NavBar } from '../components/NavBar/NavBar';
import CurrentWeather from '../pages/CurrentWeather/CurrentWeather';

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<CurrentWeather />} />

          <Route
            path="forecast"
            element={
              <Suspense fallback={<p>Loading</p>}>
                <>...</>
              </Suspense>
            }
          />

          <Route
            path="*"
            element={
              <Suspense fallback={<p>Loading</p>}>
                <>...</>
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
