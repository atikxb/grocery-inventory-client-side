import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddItem from './components/AddItem/AddItem';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import SingleItem from './components/SingleItem/SingleItem';
import Login from './components/Login/Login';
import ManageInventory from './components/ManageInventory/ManageInventory';
import Register from './components/Register/Register';
import MyItems from './components/MyItems/MyItems';
import Blogs from './components/Blogs/Blogs';
import NotFound from './components/NotFound/NotFound';
import RequireAuth from './components/RequireAuth/RequireAuth';
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/inventory/:id' element={<RequireAuth><SingleItem /></RequireAuth>} />
        <Route path='/manage-inventory' element={<RequireAuth><ManageInventory /></RequireAuth>  } />
        <Route path='/add-item' element={<RequireAuth><AddItem /></RequireAuth>} />
        <Route path='/my-items' element={<RequireAuth><MyItems /></RequireAuth>} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
