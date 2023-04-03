import React from 'react'
import {Link} from "react-router-dom"

function Menu() {
  return (
    <div>
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

        USE CASES

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

        MODULE

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

            COMPANY

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
    </div>
  )
}

export default Menu