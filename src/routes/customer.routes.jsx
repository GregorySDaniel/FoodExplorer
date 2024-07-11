import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Details } from '../pages/Details';
import { Orders } from '../pages/Orders';
import { PageNotFound } from '../pages/PageNotFound';
import { CartProvider } from '../hooks/cart';

export function CustomerRoutes(){
  return(
    <CartProvider>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/details/:id" element={<Details/>}/>
      <Route path="/orders" element={<Orders/>}/>

      <Route path="/*" element={<PageNotFound/>}/>
    </Routes>
    </CartProvider>
  )
}