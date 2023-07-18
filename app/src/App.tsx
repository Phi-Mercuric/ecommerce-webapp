import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('./pages/home/Home'));
const ArtisanalClocks = lazy(() => import('./pages/artisanalclocks/ArtisanalClocks'));
const Parts = lazy(() => import('./pages/parts/Parts'));
const LogIn = lazy(() => import('./pages/login/Login'));
const Register = lazy(() => import('./pages/register/Register'));

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