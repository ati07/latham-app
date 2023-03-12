import { useState } from 'react'
// import './App.css'
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DialogBox from './assets/DialogBox';
import SnackBarComponent from './assets/SnackBarComponent';
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
      <DialogBox />
      <SnackBarComponent/>
    </BrowserRouter>
  )
}

export default App
