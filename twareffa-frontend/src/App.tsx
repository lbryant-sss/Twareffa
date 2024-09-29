import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Homepage from './pages/homepage/Homepage'
import Signin from './pages/auth/signin/Signin'
import Register from './pages/auth/signup/Register';
import ForgotPassword from './pages/auth/forgotpass/ForgotPassword';
import ResetPassword from './pages/auth/resetpass/ResetPassword';
import JobDetail from './components/jobs/jobdetail/JobDetail';
import ProtectedRoute from './components/protectedroutes/ProtectedRoute'

import PrivateUserprofile from './pages/userprofile/privateprofile/PrivateUserProfile';
import EditProfileForm from './pages/userprofile/profileEditor/editProfile';
//Create, Update, Delete Posts
import CreatePost from './pages/posts/create-post/CreatePost';

//Wallet Links
import WalletHome from './pages/wallet/wallet-home/WalletHome';


function Logout() {
  localStorage.clear();
  return <Navigate to="/Twareffa/logout" />
}

function RegisterAndLogout() {
  localStorage.clear();
  return <Register />
}

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route 
          path='/Twareffa' 
          element={
            <ProtectedRoute>
              <Homepage />
            </ProtectedRoute>
            } />
        <Route path='/Twareffa/login' element={<Signin />} />
        <Route path='/Twareffa/logout' element={<Logout />} />
        <Route path='/Twareffa/signup' element={<Register />} />
        <Route path='/Twareffa/forgot-password' element={<ForgotPassword />} />
        <Route path='/Twareffa/reset-password' element={<ResetPassword />} />
        <Route path='/Twareffa/:jid' element={<JobDetail />} />


        <Route path='/Twareffa/create-post' element={<CreatePost />}/>

        <Route path='/Twareffa/wallet' element={<WalletHome />} />

        <Route path='/Twareffa/private-profile' element={<PrivateUserprofile />} />

        <Route path='/Twareffa/edit-profile' element={<EditProfileForm />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;