import { Route, Routes } from 'react-router-dom';
import './styles/App.css'
import Landing from './pages/Landing';
import 'bootstrap/dist/css/bootstrap.min.css';
import NewNavbar from './components/NewNavbar';
import ComingSoon from './pages/ComingSoon';

const App = () => {
  return (
    <>
      {/* uncomment below for navbar */}
      {/* <NewNavbar/> */}
      <Routes>
        {/* uncomment next line to work on main site */}
        {/* <Route path='/' element={<Landing/>}/> */}
        {/* below is only used for dev of coming soon page */}
        <Route path='/' element={<ComingSoon />} />
      </Routes>
    </>
  );
}

export default App;
