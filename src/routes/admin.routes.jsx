import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Details } from '../pages/Details';
import { NewDish } from '../pages/NewDish';
import { EditDish } from '../pages/EditDish';
import { Orders } from '../pages/Orders';
import { PageNotFound } from '../pages/PageNotFound';
import { CartProvider } from '../hooks/cart';

export function AdminRoutes(){
  return(
    <CartProvider>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/details/:id" element={<Details/>}/>
      <Route path="/new" element={<NewDish/>}/>
      <Route path="/orders" element={<Orders/>}/>
      <Route path="/edit/:id" element={<EditDish/>}/>

      <Route path="/*" element={<PageNotFound/>}/>
    </Routes>
    </CartProvider>
  )
}