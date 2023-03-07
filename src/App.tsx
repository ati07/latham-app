import { useState } from 'react'
// import './App.css'
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from './components/layout/MainLayout';
import { routes } from './routes';
// import { appRoutes } from './routestes/routes';
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {routes}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
