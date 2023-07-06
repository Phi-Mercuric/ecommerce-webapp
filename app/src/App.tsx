import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages';
import { lazy, Suspense } from 'react';

const ArtisanalClocks = lazy(() => import('./pages/ArtisanalClocks'));
const Parts = lazy(() => import('./pages/Parts'));
const LogIn = lazy(() => import('./pages/Login'));



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/artisanalclocks"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <ArtisanalClocks />
            </Suspense>
          }
        />
        <Route
          path="/parts"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Parts />
            </Suspense>
          }
        />
        <Route
          path="/login"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <LogIn />
            </Suspense>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;