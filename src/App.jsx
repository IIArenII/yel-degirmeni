import React from 'react'
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
import Home from './components/Home'
import Category from './components/Category'
import bgBreakfast from './assets/breakfasts.jpg';
import bgCoffee from './assets/coffees.jpg';
import bgDessert from './assets/desserts.jpg';
import bgFastfood from './assets/fastfoods.jpg';
import { useEffect } from 'react';

const App = () => {

  useEffect(() => {
  const images = [bgBreakfast, bgCoffee, bgDessert, bgFastfood];
  images.forEach((src) => {
    const img = new Image();
    img.loading = 'eager';
    img.src = src;
  });
}, []);

  return (
    <Router>
      <Routes>
        <Route path='/' element={ <Home />}></Route>
        <Route path='/kategori/:categoryName' element={<Category />}>
          <Route path=':subcategoryName' element={<Category />} />
        </Route>

      </Routes>
    </Router>
  )
}

export default App