import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('./pages/Home'));
const ArtisanalClocks = lazy(() => import('./pages/ArtisanalClocks'));
const Parts = lazy(() => import('./pages/Parts'));
const LogIn = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));

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
        <Route
          path="/register"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Register />
            </Suspense>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;