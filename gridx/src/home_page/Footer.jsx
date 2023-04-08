import React from 'react'
import "./css/footer.scss"
import gridxLogo from "../icons/GRIDX-LOGO-07.svg"
import twitter from "../icons/twitter (1).png"
import linkedin from "../icons/linkedin.png"
import instagram from "../icons/instagram.png"
import britain from "../icons/united-kingdom.png"

function Footer() {
  return (
    <div className='footer-container'>
      <div className="row-one">
        <img src={gridxLogo} alt="/"/>

        <p> <strong>Office Aachen</strong> <br/>
            Dennewartstraße 25 <br/>
            52068 Aachen
        </p>

        <br/>
        <p> <strong>Office Munich</strong> <br/>
        Christoph-Rapparini-Bogen 25 <br/>
        80639 Munich
        </p>

        <br/>
        <p> <strong>Contact</strong> <br/>
        <a href='/' style={{textDecoration:"none", color:"#546982"}}>info@gridx.ai</a> <br/>
        +49 (0) 241 412597 10
        </p>
      </div>

      <div className="row-two">
        <p><strong>XENON</strong></p>
        <a href='/'>Platform</a>
        <a href='/'>Integrations</a>
        <a href='/'>Gateway</a>
        <a href='/'>Use Cases</a>
      </div>

      <div className="row-three">
        <p><strong>Modules</strong></p>
        <a href='/'>Grid Protector</a>
        <a href='/'>Energy Optimizer</a>
        <a href='/'>Peak Shaver</a>
        <a href='/'>Tariff Timer</a>
        <br/>
        <a href='/'>Web App</a>
        <a href='/'>Mobile App</a>
        <a href='/'>Cloud Connector</a>
        <a href='/'>API</a>
        <br/>
        <a href='/'>Energy Billing</a>
        <a href='/'>V2G/V2H</a>
        <a href='/'>Diagnostics</a>
        <a href='/'>Energy Community</a>
        <a href='/'>Multi Energy Optimizer</a>
        <a href='/'>VPP</a>
      </div>

      <div className="row-four">
        <p><strong>Company</strong></p>
        <a href='/'>About Us</a>
        <a href='/'>Career</a>
        <a href='/'>Events</a>
        <a href='/'>Tariff Timer</a>
        <a href='/'>Blog</a>
        <a href='/'>Press</a>
        <a href='/'>Downloads</a>
        <a href='/'>Knowledge</a>
        <a href='/'>FAQs</a>
        <br/>
        <a href='/'><strong>Legal</strong></a>
        <a href='/'>Imprint</a>
        <a href='/'>Privacy notice</a>
        <a href='/'>Privacy policy</a>
        <a href='/'>Terms and conditions</a>
        <a href='/'>Terms of use</a>
        <br/>
        <p><strong>Switch Language</strong></p>
        <button> <img src={britain} alt="/"/>English</button>

        <div className="social-media-icons">
          <img src={linkedin} alt="/"/>
          <img src={twitter} alt="/"/>
          <img src={instagram} alt="/"/>
        </div>
      </div>
    </div>
  )
}

export default Footer