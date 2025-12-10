import React from 'react'
import { Route ,Routes ,BrowserRouter } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Quotation from './pages/Quotation'
import Inquiry from './pages/Inquiry'
import Invoice from './pages/Invoice'


const App = () => {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path='/' element={<Dashboard/>}></Route>
        <Route path='/inquiry' element={<Inquiry/>}></Route>
        <Route path='/quotation' element={<Quotation/>}></Route>
        <Route path='/invoice' element={<Invoice/>}></Route>
      </Routes>
  
    </BrowserRouter>
  )
}

export default App
