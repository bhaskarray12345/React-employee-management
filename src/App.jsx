import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CreateEmployeeComponent from './components/Employee/CreateEmployeeComponent'
import ListEmployeeComponent from './components/Employee/ListEmployeeComponent'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import UpdateEmployeeComponent from './components/Employee/UpdateEmployeeComponent'

function App() {

  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ListEmployeeComponent />}></Route>
          <Route path='/create/employee' element={<CreateEmployeeComponent />}></Route>
          <Route path='/update/employee' element={<UpdateEmployeeComponent />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
