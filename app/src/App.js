import { Route, Routes } from 'react-router-dom';
import './styles/App.css'
import NewLanding from './pages/NewLanding/NewLanding';
import 'bootstrap/dist/css/bootstrap.min.css';
// import NewNavbar from './components/NewNavbar';
import BoardingPage from './pages/Boarding/BoardingPage';
import DaycarePage from './pages/Daycare/DaycarePage';
import ExtraServices from './pages/ExtraServices/ExtraServices';
import Navbar from './componentsv2/OurNavbar';
import AboutUs from './pages/AboutUs/AboutUsPage';
import HealthAndSafetyPage from './pages/HealthAndSafety/HealthAndSafetyPage';

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
      <Navbar id='navbar'/>
      <Routes>
        {/* uncomment next line to work on main site */}
        <Route path='/' element={<NewLanding/>}/>
        {/* below is only used for dev of coming soon page */}
        {/* <Route path='/' element={<ComingSoon />} /> */}
        <Route path='/boarding' element={<BoardingPage/>} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/daycare' element={<DaycarePage/>} />
        <Route path='/extra-services' element={<ExtraServices />} />
        <Route path='/health-and-safety' element={<HealthAndSafetyPage />} />
      </Routes>
    </div>
  );
}

export default App;
