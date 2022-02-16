import MainPage from "./components/MainPage/MainPage";
import React from 'react';
import { Route, Routes } from "react-router-dom";
import Menu from "./components/Menu/Menu";
import Support from "./components/UI/Suport";
import TermsOfUse from "./components/UI/TermsOfUse";
import Contact from "./components/UI/Contact";

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<MainPage />} />
      <Route exact path='/home' element={<MainPage />} />
      <Route exact path='/menu' element={<Menu />} />
      <Route exact path='/support' element={<Support />} />
      <Route exact path='/termsofuse' element={<TermsOfUse />} />
      <Route exact path='/contact' element={<Contact />} />
    </Routes>
  );
}

export default App;
