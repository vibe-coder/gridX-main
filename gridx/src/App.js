import './App.scss';
import {Link, Routes, Route} from "react-router-dom"
import gridxLogo from "./icons/GRIDX-LOGO-07.svg"
import HomeContainer from './home_page/HomeContainer';

function App() {
  return (
    <div className="App">
      <div className="header-wrapper">
        <img className='gridx-logo' src={gridxLogo} alt="gridx logo"/>
        
        <div className="menu-icon">
          <input type="checkbox" id="menu_checkbox"/>
          <label for="menu_checkbox">
            <div></div>
            <div></div>
            <div></div>
          </label>
        </div>

      </div>

      

      {/* <nav className='nav-wrapper'>

        MENU WRAPPER FOR MOBILE VIEW











        LINK WRAPPER FOR DESKTOP VIEW

        <ul className="link-wrapper">
          <li><Link className="link" to="/">XENON</Link></li>
          <li><Link className="link" to="/">use cases</Link></li>
          <li><Link className="link" to="/">modules</Link></li>
          <li><Link className="link" to="/">company</Link></li>
          <li><Link className="demo-link" to="/">book a demo</Link></li>
        </ul>
      </nav> */}


      <Routes>
        <Route path='/' element={<HomeContainer/>} />
      </Routes>
    </div>
  );
}

export default App;
