import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/dashboard'
import Login from './components/login'
import Create from './pages/CreateUser'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className='pages'>
          <Routes>
            <Route path="/" element={ <Login/> } />
            <Route path="/createUser" element={ <Create/> } />
            <Route path="/dash" element={ <Dashboard/> } />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
