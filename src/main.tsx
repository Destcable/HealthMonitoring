import React from 'react'
import ReactDOM from 'react-dom/client'
import HelloPage from './pages/Hello'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelloPage />
  </React.StrictMode>,
)
