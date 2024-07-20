import { BrowserRouter as Router } from "react-router-dom"
import Routing from './routes';
import './assets/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './assets/css/animate.min.css'
import './assets/css/magnific-popup.css'
import './assets/fontawesome/css/all.min.css'
import './assets/css/dripicons.css'
import './assets/css/slick.css'
import './assets/css/meanmenu.css'
import './assets/css/default.css'
import './assets/css/style.css'
import './assets/css/responsive.css'
import 'react-toastify/dist/ReactToastify.css';



export default function App() {
  return (
    <Router>
      <Routing />
    </Router>
  );
}

