// import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import EnterprisePage from './pages/EnterprisePage';
import PersonalPage from './pages/PersonalPage';
// import LegalPage from './pages/LegalPage';
import CompanyInfoPage from './pages/CompanyInfoPage';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/enterprise' element= {<EnterprisePage/>} />
        <Route path='/personal' element={<PersonalPage/>} />
        {/* <Route path='/legal' element={<LegalPage/>} /> */}
        <Route path='/company-info' element={<CompanyInfoPage/>} />
        <Route path='/' element={<EnterprisePage/>} />
      </Routes>
    </Router>
  );
}

export default App;
