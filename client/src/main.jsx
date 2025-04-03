import { createRoot } from 'react-dom/client';
import './index.css'
import Homepage from './views/Homepage.jsx'
import { BrowserRouter, Routes, Route } from "react-router";


createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <Routes>
   <Route path = "/" element={<Homepage/>} />
    </Routes>
  </BrowserRouter>
);
