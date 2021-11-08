import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import AppBar from '../components/AppBar';

const Home = lazy(
  () => import('../pages/Home' /* webpackChunkName: "home-page" */)
);

const Information = lazy(
  () =>
    import('../pages/Information' /* webpackChunkName: "Information-page" */)
);

const NotFound = lazy(
  () => import('../pages/NotFound' /* webpackChunkName: "NotFound-page" */)
);

function App() {
  return (
    <>
      <AppBar />

      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="information" element={<Information />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
