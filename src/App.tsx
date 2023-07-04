import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home, ArtisanalClocks, Login, Parts } from './pages';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artisanalclocks" element={<ArtisanalClocks />} />
        <Route path="/parts" element={<Parts />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
