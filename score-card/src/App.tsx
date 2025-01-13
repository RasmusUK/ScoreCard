import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import FrontPage from './pages/FrontPage';
import Games from './pages/Games';
import Scores from './pages/Scores';
import DiscGolf from './pages/games/DiscGolf';
import MiniGolf from './pages/games/MiniGolf';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<FrontPage />} />
            <Route path="/games" element={<Games />} />
            <Route path="/scores" element={<Scores />} />
            <Route path="/games/disc-golf" element={<DiscGolf />} />
            <Route path="/games/mini-golf" element={<MiniGolf />} />
            <Route path="*" element={<h1>Not Found</h1>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
