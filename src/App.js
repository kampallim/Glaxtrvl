import './App.css';
import Contact from './Components/Pages/Contact/Contact';
import Home from './Components/Pages/Home/Home';
import Pricing from './Components/Pages/Pricing/Pricing';
import Training from './Components/Pages/Training/Training';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
<>
<Router>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/training' element={<Training/>}/>
    <Route path='/pricing' element={<Pricing/>}/>
    <Route path='/contact' element={<Contact/>}/>
  </Routes>
</Router>


</>
  );
}

export default App;
