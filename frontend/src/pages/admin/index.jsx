import '../../style/index.css';
import Login from './Login';
import Home from './Home'
import Student from './Student'
import Documents from './Documents'
import Announcement from './Announcement'
import Setting from './Setting'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
          <Routes>
            <Route path="/login/teacher" element={<Login />} />
            <Route exact path="/teacher" element={<Home />} />
            <Route path="/teacher/students" element={<Student />} />
            <Route path="/teacher/document" element={<Documents />}/>
            <Route path="/teacher/announcement" element={<Announcement />}/>
            <Route path="/teacher/parametre" element={<Setting />}/>
            {/* <Route path="*" element={ <Navigate to="/teacher" />} /> */}

          </Routes>
      </Router>
    </>
  );
}

export default App;