import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Payment from './components/Payment';
import { ShoesProvider } from './contexts/CartContext';
import './App.css'

const Root = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<App />} />
        <Route path='/payment' element={<Payment />} />
      </>
    )
  );

  const [arr, setArr] = useState([]);
  const [total, setTotal] = useState(0);

  return (
    <React.StrictMode>
      <ShoesProvider value={{ arr, total, setArr, setTotal }}>
        <RouterProvider router={router} />
      </ShoesProvider>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<Root />);
