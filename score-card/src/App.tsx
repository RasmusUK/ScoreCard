import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import FrontPage from './pages/FrontPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<FrontPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
