import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AuthContext from './context/authContext.jsx'
import TaskContext from './context/taskContext.jsx'
import './index.css'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContext>
      <TaskContext>
        <App />
      </TaskContext>
    </AuthContext>
  </StrictMode>,
)
