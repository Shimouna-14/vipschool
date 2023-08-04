import '../../style/index.css';
import Login from './Login';
import Home from './Home'
import Lessons from './Lessons'
import Documents from './Documents'
import Setting from './Setting'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
          <Routes>
            <Route path="login/student" element={<Login />} />
            <Route exact path="/" element={<Home />} />
            <Route path="/cours" element={<Lessons />} />
            <Route path="/document" element={<Documents />}/>
            <Route path="/parametre" element={<Setting />}/>
            {/* <Route path="/*" element={ <Navigate to="/" />} /> */}
          </Routes>
      </Router>
    </>
  );
}

export default App;