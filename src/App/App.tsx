import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { NavBar } from '../components/NavBar/NavBar';

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<>...</>} />

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
