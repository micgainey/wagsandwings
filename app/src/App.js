import { Route, Routes } from 'react-router-dom';
import './styles/App.css'
import Landing from './pages/Landing';
import 'bootstrap/dist/css/bootstrap.min.css';
import NewNavbar from './components/NewNavbar';
// import ComingSoon from './pages/ComingSoon';

// The app.js file handles all routes and general website flow. This will include all available routes and redirection. This file also includes the stylesheet for bootstrap
/**
 * Landing Page
 * ComingSoon Page
 * Navbar
 * Bootstrap css file
 */
const App = () => {
  return (
    <div>
      {/* uncomment below for navbar */}
      <NewNavbar/>
      <Routes>
        {/* uncomment next line to work on main site */}
        <Route path='/' element={<Landing/>}/>
        {/* below is only used for dev of coming soon page */}
        {/* <Route path='/' element={<ComingSoon />} /> */}
      </Routes>
    </div>
  );
}

export default App;
