import React from 'react';
import ReactDOM from 'react-dom/client';
import ClientApp from './pages/client/index';
import AdminApp from './pages/admin/index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ClientApp />
    <AdminApp />
  </React.StrictMode>
);
