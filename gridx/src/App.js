import './App.scss';
import {Link, Routes, Route} from "react-router-dom"
import gridxLogo from "./icons/GRIDX-LOGO-07.svg"
import HomeContainer from './home_page/HomeContainer';
import { useState } from 'react';
import platformIcon from "./icons/platform-icon.svg"
import gatewayIcon from "./icons/gateway-icon.svg"
import integrationsIcon from "./icons/integrations-icon.svg"
import homeEnergyIcon from "./icons/home-energy-icon.svg"
import evCharging from "./icons/ev-charging.svg"
import gridIcon from "./icons/grid-icon.svg"
import optimizerIcon from "./icons/optimizer icon.svg"
import peakIcon from "./icons/peak-icon.svg"
import tariffIcon from "./icons/tariff-icon.svg"
import webIcon from "./icons/webapp-icon.svg"
import mobileIcon from "./icons/mobileapp-icon.svg"
import apiIcon from "./icons/API-icon.svg"
import cloudIcon from "./icons/cloud-icoon.svg"
import billingIcon from "./icons/billing-icon.svg"
import diagnosticsIcon from "./icons/diagnostics-icon.svg"
import multiIcon from "./icons/multi-icon.svg"
import communityIcon from "./icons/community-icon.svg"
import virtualIcon from "./icons/virtual-icon.svg"
import v2gIcon from "./icons/v2g-icon.svg"
import aboutIcon from "./icons/about-icon.svg"
import careresIcon from "./icons/careers-icon.svg"
import eventsIcon from "./icons/events-icon.svg"
import blogIcon from "./icons/blog-icon.svg"
import knowledgeIcon from "./icons/knowledge-icon.svg"
import pressIcon from "./icons/press-icon.svg"
import downloadsIcon from "./icons/downloads-icon.svg"





function App() {

  const [isOpen, setIsOpen] = useState(false);

  

  return (
    <div className="App">
      
      <div className="header-wrapper">
        <img className='gridx-logo' src={gridxLogo} alt="gridx logo"/>
        
        <div role='button' id='menu-button' className="menu-icon">
          <input onClick={() => setIsOpen(!isOpen)} type="checkbox" id="menu_checkbox"/>
          <label for="menu_checkbox">
            <div></div>
            <div></div>
            <div></div>
          </label>
        </div>
      </div>

      {/* NAV MENU CONTAINER */}
      
     {isOpen && <div className='nav-container'>
        <ul className="menu-wrapper">

            {/* XENON */}

          <div className="menu-container">
            <h2>XENON</h2>
            <ul className='link-list'>
              <li> 
                <Link to="/" className='link'>
                  <h4>Platform</h4>
                  <p> Interface to all distributed energy resources</p>
                </Link>                
              </li>

              <li>
                <Link to="/" className='link'>
                  <h4>Getaway</h4>
                  <p>Edge computing mode of energy</p>
                </Link> 
              </li>

              <li>
                <Link to="/" className='link'>
                  <h4>Integration</h4>
                  <p>Services and products that work with Xenon</p>
                </Link> 
              </li>
            </ul>
          </div>

          {/* USE CASES */}

          <div className="menu-container">
            <h2>USE CASES</h2>
            <ul className='link-list'>
              <li> 
                <Link to="/" className='link'>
                  <h4>Home Energy Management</h4>
                  <p>Bring smart energy management to your <br/> customers</p>
                </Link>               
              </li>

              <li>
              <Link to="/" className='link'>
                  <h4>EV Charging</h4>
                  <p>Charge EVs smarter, cheaper and greener</p>
                </Link>
              </li>
            </ul>
          </div>

          {/* MODULE */}

          <div className="menu-container">
            <h2>MODULES</h2>
            <h3>OPTIMIZE</h3>
            <ul className='link-list'>
              <li> 
                <Link to="/" className='link'>
                  <h4>Grid Protector </h4>
                  <p>Avoide overloads and maximize charging speed</p>
                </Link>              
              </li>

              <li>
                <Link to="/" className='link'>
                  <h4>Energy Optimizer</h4>
                  <p>Reduce operating costs and emissions</p>
                </Link> 
              </li>

              <li>
                <Link to="/" className='link'>
                  <h4>Peak Shaver</h4>
                  <p>Minimize energy grid fees by locally reducing peak <br/> loads</p>
                </Link> 
              </li>

              <li>
                <Link to="/" className='link'>
                  <h4>Tariff Timer</h4>
                  <p>Minimize energy costs with varying energy <br/> prices</p>
                </Link> 
              </li>

              <h3>ACCESS</h3>
              <li>
                <Link to="/" className='link'>
                  <h4>Web App</h4>
                  <p>Give users full control and transparency over <br/>their energy</p>
                </Link> 
              </li>

              <li>
                <Link to="/" className='link'>
                  <h4>Mobile App</h4>
                  <p>Provide users with energy infromation on the <br/> go</p>
                </Link> 
              </li>

              <li>
                <Link to="/" className='link'>
                  <h4>API</h4>
                  <p>Build custom solutions on top of XENON</p>
                </Link> 
              </li>

              <li>
                <Link to="/" className='link'>
                  <h4>Cloud Connector</h4>
                  <p>Easily add Integrations to your existing <br/> systems</p>
                </Link> 
              </li>

              <h3>EXTEND</h3>
              <li>
                <Link to="/" className='link'>
                  <h4>Energy Billing</h4>
                  <p>Seamlessly quthorize and invoice charging <br/> processes</p>
                </Link> 
              </li>

              <li>
                <Link to="/" className='link'>
                  <h4>Diagnostics</h4>
                  <p>Resolve issues without onsite technicians</p>
                </Link> 
              </li>

              <li>
                <Link to="/" className='link'>
                  <h4>Moulti-Energy Optimizer</h4>
                  <p>Aggregate and optimize multiple systems</p>
                </Link> 
              </li>

              <li>
                <Link to="/" className='link'>
                  <h4>Energy Community</h4>
                  <p>Enable energy trading within a user group</p>
                </Link> 
              </li>

              <li>
                <Link to="/" className='link'>
                  <h4>Virtual Power Plant</h4>
                  <p>Trade the flexibility and energy of connected <br/> DERs</p>
                </Link> 
              </li>

              <li>
                <Link to="/" className='link'>
                  <h4>V2G/V2H</h4>
                  <p>Leverage the flexibility of EVs</p>
                </Link> 
              </li>

              {/* COMPANY */}

              <h2>COMPANY</h2>
              <h3>ABOUT US</h3>
              <li>
                <Link to="/" className='link'>
                  <h5>About</h5>
                </Link> 
              </li>

              <li>
                <Link to="/" className='link'>
                  <h5>Careers</h5>
                </Link> 
              </li>


              <li>
                <Link to="/" className='link'>
                  <h5>Events</h5>
                </Link> 
              </li>

              <h3>RESOURCES</h3>
              <li>
                <Link to="/" className='link'>
                  <h5>Blog</h5>
                </Link> 
              </li>

              <li>
                <Link to="/" className='link'>
                  <h5>Press</h5>
                </Link> 
              </li>

              <li>
                <Link to="/" className='link'>
                  <h5>Downloads</h5>
                </Link> 
              </li>
            </ul>
          </div>
        </ul>
      </div>}



      <nav className='link-container'>
        <img className='gridx-logo' src={gridxLogo} alt="gridx logo"/>
        <ul className="link-wrapper">
          <li><Link className="link" to="/">XENON</Link></li>
          <li><Link className="link" to="/">Use cases</Link></li>
          <li><Link className="link" to="/">Modules</Link></li>
          <li><Link className="link" to="/">Company</Link></li>
        </ul>
        <button className='demo-button'><Link className="demo-link-button" to="/">book a demo</Link></button>
      </nav>

      {/* XENONO MENU */}


      <div className='xenon-menu-container'>
        <div className='xenon-menu-wrapper'>
          
          <div className='menu-container'>
            <div className='img-container'><img src={platformIcon} alt='/'/></div>
            <div className='text-container'>
              <h3>Platform</h3>
              <p>Interface to all distributed energy reseources</p>
            </div>            
          </div>

          <div className='menu-container'>
            <div className='img-container'><img src={gatewayIcon} alt='/'/></div>
            <div className='text-container'>
              <h3>Gateway</h3>
              <p>Interface to all distributed energy reseources</p>
            </div>            
          </div>
          <div className='menu-container'>
            <div className='img-container'><h3><img src={integrationsIcon} alt='/'/></h3></div>
            <div className='text-container'>
              <Link>
                <h3>Integrations</h3>
                <p>Interface to all distributed energy reseources</p>
              </Link>
            </div>            
          </div>
        </div>
      </div>

      {/* USE CASES MENU */}

      <div className='usecases-menu-container'>
        <div className='usecases-menu-wrapper'>
          
          <div className='menu-container'>
            <Link className='menu-link'>
              <div className='img-container'><img src={homeEnergyIcon} alt='/'/></div>
                <div className='text-container'>
                  <h3>Home Energy Management</h3>
                  <p>Bring smart energy management to your customers</p>
              </div> 
            </Link>
          </div>

          <div className='menu-container'>
            <Link className='menu-link'>
              <div className='img-container'><img src={evCharging} alt='/'/></div>
                <div className='text-container'>
                  <h3>EV Charging</h3>
                  <p>Charge EVs smarter, cheaper and greener</p>
              </div>
            </Link>
          </div>

          <div className='sub-menu-container'>
              <div className='text-container'>
                <Link className='text-link'>
                  <h3>Success stories</h3>
                  <p>Learn how companies succeed with XENON</p>
                </Link>
            </div>            
          </div>
        </div>
      </div>

      <div className='modules-menu-container'>
        <div className='modules-menu-wrapper'>
          <div className='left-wrapper'>
            <h3>OPTIMIZE</h3>
            
            <Link className='modules-link'>
              <div className='modules-link-wrapper'>
                <div className='modules-img-wrapper'><img src={gridIcon} alt='/'/></div>
                <div className='modules-text-wrapper'>
                  <h3>Grid Protector</h3>
                  <p>Avoid overloads and maximize charging speed</p>
                </div>
              </div>
            </Link>

            <Link className='modules-link'>
              <div className='modules-link-wrapper'>
                <div className='modules-img-wrapper'><img src={optimizerIcon} alt='/'/></div>
                <div className='modules-text-wrapper'>
                  <h3>Energy Optimizer</h3>
                  <p>Reduce operating costs and emissions</p>
                </div>
              </div>
            </Link>

            <Link className='modules-link'>
              <div className='modules-link-wrapper'>
                <div className='modules-img-wrapper'><img src={peakIcon} alt='/'/></div>
                <div className='modules-text-wrapper'>
                  <h3>Peak Shaver</h3>
                  <p>Minimize grid fees by locally reducing peak loads </p>
                </div>
              </div>
            </Link>

            <Link className='modules-link'>
              <div className='modules-link-wrapper'>
                <div className='modules-img-wrapper'><img src={tariffIcon} alt='/'/></div>
                <div className='modules-text-wrapper'>
                  <h3>Tariff Timer</h3>
                  <p>Minimize energy costs with varying energy prices</p>
                </div>
              </div>
            </Link>
          </div>

          <div className='center-wrapper'>
            <h3>ACCESS</h3>
            
            <Link className='modules-link'>
              <div className='modules-link-wrapper'>
                <div className='modules-img-wrapper'><img src={webIcon} alt='/'/></div>
                <div className='modules-text-wrapper'>
                  <h3>Web App</h3>
                  <p>Give users full control  and transparency over their energy</p>
                </div>
              </div>
            </Link>

            <Link className='modules-link'>
              <div className='modules-link-wrapper'>
                <div className='modules-img-wrapper'><img src={mobileIcon} alt='/'/></div>
                <div className='modules-text-wrapper'>
                  <h3>Mobile App</h3>
                  <p>Provide users with energy infromation on the go</p>
                </div>
              </div>
            </Link>

            <Link className='modules-link'>
              <div className='modules-link-wrapper'>
                <div className='modules-img-wrapper'><img src={apiIcon} alt='/'/></div>
                <div className='modules-text-wrapper'>
                  <h3>API</h3>
                  <p>Build custom solutions on top of XENON</p>
                </div>
              </div>
            </Link>

            <Link className='modules-link'>
              <div className='modules-link-wrapper'>
                <div className='modules-img-wrapper'><img src={cloudIcon} alt='/'/></div>
                <div className='modules-text-wrapper'>
                  <h3>Cloud Connector</h3>
                  <p>Easily add integrations to your existing systems</p>
                </div>
              </div>
            </Link>

            
          </div>

          <div className='right-wrapper'>
            <h3>EXTEND</h3>

            <Link className='modules-link'>
              <div className='modules-link-wrapper'>
                <div className='modules-img-wrapper'><img src={billingIcon} alt='/'/></div>
                <div className='modules-text-wrapper'>
                  <h3>Energy Billing</h3>
                  <p>Seamlessly authorize and invoice charging processes</p>
                </div>
              </div>
            </Link>

            <Link className='modules-link'>
              <div className='modules-link-wrapper'>
                <div className='modules-img-wrapper'><img src={diagnosticsIcon} alt='/'/></div>
                <div className='modules-text-wrapper'>
                  <h3>Diagnostics</h3>
                  <p>Resolve issues without onsite technicians</p>
                </div>
              </div>
            </Link>

            <Link className='modules-link'>
              <div className='modules-link-wrapper'>
                <div className='modules-img-wrapper'><img src={multiIcon} alt='/'/></div>
                <div className='modules-text-wrapper'>
                  <h3>Multi-Energy Optimizer</h3>
                  <p>Aggregate and optimize multiple systems </p>
                </div>
              </div>
            </Link>

            <Link className='modules-link'>
              <div className='modules-link-wrapper'>
                <div className='modules-img-wrapper'><img src={communityIcon} alt='/'/></div>
                <div className='modules-text-wrapper'>
                  <h3>Energy Community</h3>
                  <p>Enable energy trading within a user group</p>
                </div>
              </div>
            </Link>

            <Link className='modules-link'>
              <div className='modules-link-wrapper'>
                <div className='modules-img-wrapper'><img src={virtualIcon} alt='/'/></div>
                <div className='modules-text-wrapper'>
                  <h3>Virtual Power Plant</h3>
                  <p>Trade the flexibility and energy of connected DERs</p>
                </div>
              </div>
            </Link>

            <Link className='modules-link'>
              <div className='modules-link-wrapper'>
                <div className='modules-img-wrapper'><img src={v2gIcon} alt='/'/></div>
                <div className='modules-text-wrapper'>
                  <h3>V2G/V2H</h3>
                  <p>Leverage the flexibility of EVs</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className='company-menu-container'>
        <div className='company-menu-wrapper'>
          <div className='company-top'>
            <div className='company-left'>
            <h3>ABOUT US</h3>
              <Link className='company-link'>
                <div className='company-link-wrapper'>
                  <div className='company-img-wrapper'><img src={aboutIcon} alt='/'/></div>
                  <div className='company-text-wrapper'>
                    <h3>About</h3>
                  </div>
                </div>
              </Link>

              <Link className='company-link'>
                <div className='company-link-wrapper'>
                  <div className='company-img-wrapper'><img src={careresIcon} alt='/'/></div>
                  <div className='company-text-wrapper'>
                    <h3>Careers</h3>
                  </div>
                </div>
              </Link>

              <Link className='company-link'>
                <div className='company-link-wrapper'>
                  <div className='company-img-wrapper'><img src={eventsIcon} alt='/'/></div>
                  <div className='company-text-wrapper'>
                    <h3>Events</h3>
                  </div>
                </div>
              </Link>
            </div>

            <div className='company-right'> 
            <h3>RESEOURCES</h3>
              <Link className='company-link'>
                <div className='company-link-wrapper'>
                  <div className='company-img-wrapper'><img className='blog-icon' src={blogIcon} alt='/'/></div>
                  <div className='company-text-wrapper'>
                    <h3>Blog</h3>
                  </div>
                </div>
              </Link>

              <Link className='company-link'>
                <div className='company-link-wrapper'>
                  <div className='company-img-wrapper'><img src={knowledgeIcon} alt='/'/></div>
                  <div className='company-text-wrapper'>
                    <h3>Knowledge</h3>
                  </div>
                </div>
              </Link>

              <Link className='company-link'>
                <div className='company-link-wrapper'>
                  <div className='company-img-wrapper'><img src={pressIcon} alt='/'/></div>
                  <div className='company-text-wrapper'>
                    <h3>Press</h3>
                  </div>
                </div>
              </Link>

              <Link className='company-link'>
                <div className='company-link-wrapper'>
                  <div className='company-img-wrapper'><img src={downloadsIcon} alt='/'/></div>
                  <div className='company-text-wrapper'>
                    <h3>Downloads</h3>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className='company-bottom'>
            <h4>Latest posts from our blog</h4>
            <div>
              <a href='/'>Moving abroad: The challenges and opportunities of relocating to Germany</a>
              <br/>
              <a href='/'>Energy Consulting: Taming the digital beast</a>
              <br/>
              <a href='/'>Knowledge is power: Scaling customer solutions with energy diagnostics</a>
            </div>
          </div>
        </div>
      </div>

      <Routes>
        <Route path='/' element={<HomeContainer/>} />
      </Routes>
    </div>
  );
}

export default App;
