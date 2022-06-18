import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { StudentProvider } from './components/Store/StudentStore';
import { TeacherProvider } from './components/Store/TeacherStore';
import './style/app.scss'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <StudentProvider>
      <TeacherProvider>
      <App />
      </TeacherProvider>
    </StudentProvider>
  </BrowserRouter>
);
