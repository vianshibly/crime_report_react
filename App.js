import './App.css';
import CrimeReport from './components/crimeReport';
import Contact from './pages/contact';
import Reports from './pages/Reports';
import Profile from './pages/profile';
import Messages from './pages/messages';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="main-header">
          <nav className="nav-bar">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/reports" className="nav-link">Reports</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
            <Link to="/messages" className="nav-link">Messages</Link>
            <Link to="/profile" className="nav-link">Profile</Link>
          </nav>
        </header>
        <main style={{ paddingTop: '300px' }}>
          <Routes>
            <Route path="/" element={<CrimeReport />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/messages" element={<Messages />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
