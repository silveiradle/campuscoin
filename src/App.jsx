import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Home from './pages/Home';
import Register from './pages/Register';
import LoadingPage from './pages/Loading';
import { AuthProvider } from '../src/AuthContext';
import PrivateRoute from '../src/PrivateRoute';
import ProfilePage from './pages/Profile/Main';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/loading' element={<LoadingPage />} />
          <Route path='/' element={<PrivateRoute />}>
            <Route index element={<Home />} />
            <Route path='profile' element={<ProfilePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;