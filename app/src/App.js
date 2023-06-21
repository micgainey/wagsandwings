import { Route, Routes } from 'react-router-dom';
import './styles/App.css'
import Landing from './pages/Landing'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Landing/>}/>
    </Routes>
  );
}

export default App;
