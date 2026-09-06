/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import Animals from './pages/Animals';
import AnimalProfile from './pages/AnimalProfile';
import Analytics from './pages/Analytics';
import Veterinarian from './pages/Veterinarian';
import Workflow from './pages/Workflow';
import Login from './pages/Login';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/animals" element={<Animals />} />
          <Route path="/animals/:id" element={<AnimalProfile />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/veterinarian" element={<Veterinarian />} />
          <Route path="/workflow" element={<Workflow />} />
        </Route>
        
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
