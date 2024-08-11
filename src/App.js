import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import BloodRequest from './pages/BloodRequest';
import BloodDonor from './pages/BloodDonor';
import HospitalList from './pages/HospitalList';
import About from './pages/About';
import BloodBankList from './pages/BloodBankList';
import Inventory from './pages/Inventory';
import Contact from './pages/Contact';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import AdminDashboard from './pages/AdminDashboard';
import BloodManagement from './pages/BloodManagement'; 
import OrganManagement from './pages/OrganManagement';
import Analysis from './pages/Analysis';
import AdminLogin from './pages/AdminLogin';
import OrganDonation from './pages/OrganDonation';
import HospitalTable from './pages/HospitalTable';
import UserManagement from './pages/UserManagement';
import OrganRequest from './pages/OrganRequest';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/requests" element={<BloodRequest />} />
          <Route path="/donor" element={<BloodDonor />} />
          <Route path="/hospitals" element={<HospitalList />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/blood_bank" element={<BloodBankList />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/blood-management" element={<BloodManagement />} />
          <Route path="/organ-management" element={<OrganManagement />} />
          <Route path="/analysis" element={<Analysis />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/organ-donation" element={<OrganDonation />} />
          <Route path="/hospital/:name" element={<HospitalTable />} />
          <Route path="/user-management" element={<UserManagement />} />
          <Route path="/organ-request" element={<OrganRequest />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
