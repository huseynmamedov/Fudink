import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './assets/css/layout.css'
import './assets/css/reset.css'
import './assets/css/responsive.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
         <App />
    </BrowserRouter>
)
