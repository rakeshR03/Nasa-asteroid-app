import {Home} from './Component/Home/Home';
import Look from './Component/Look/Look';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (  
    // <div className="App">
    //     <Home />   
    // </div>  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/looks" element={<Look />} />  
      </Routes>
    </BrowserRouter>
  );
}

export default App;
