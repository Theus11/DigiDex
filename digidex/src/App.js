import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { useEffect, useState } from "react";
import './App.css'
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';





function App() {

  const [diginame, setDiginame] = useState('')

  const onCallbackDigimonName = (name) => {
      setDiginame(name);
  } 

  useEffect(() => {
      onCallbackDigimonName(diginame);
      console.log(`Callback Home: ${diginame}`);
  }, [diginame]);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<HomePage onDigimonName={onCallbackDigimonName}/>}/>
          <Route path='/:diginame' element={<AboutPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
