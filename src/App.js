import "./App.css";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import AdminReport from "./pages/adminReport/AdminReport";
import AdminPraise from "./pages/adminPraise/AdminPraise";
import AdminActivity from "./pages/adminActivity/AdminActivity";
import Pohvala from "./pages/Pohvala/Pohvala";
import Prijava from "./pages/Prijava/Prijava";
import Sudjelovanje from "./pages/Sudjelovanje/Sudjelovanje";
import Post from './pages/Post/Post';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Idea from '../src/components/Idea/Idea';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/adminreport' element={<AdminReport />} />
          <Route path='/adminpraise' element={<AdminPraise />} />
          <Route path='/adminactivity' element={<AdminActivity />} />
          <Route path='/prijava' element={<Prijava />} />
          <Route path='/pohvala' element={<Pohvala />} />
          <Route path='/sudjelovanje' element={<Sudjelovanje />} />
          <Route path='/post/:id' element={<Post />} />
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/addIdea' element={<Idea />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
