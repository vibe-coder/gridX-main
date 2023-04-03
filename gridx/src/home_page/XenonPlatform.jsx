import "./css/xenon-platform.scss"
import platformIcon from "../icons/XENON PLATFORM ICON 2.svg"

export default function XenonPlatform(){
  return(
    <div className="xenon-platform-container">
      <div className="first-wrapper">
        <h4>XENON PLATFORM</h4>
        <h3>The interface to the decentralized energy world</h3>
        <img src={platformIcon} alt="/" />
      </div>

      <div className="second-wrapper">
        <h3>XENON</h3>
        <p>Our platform provides a standardized interface to distributed energy resources. It connects to devices from more than 43 OEMs - either via an IoT gateway or through the cloud.</p>
        <a href="gridx.ai">Learn more about XENON</a>
        
        
        <h3>Distributed Energy Resources</h3>
        <p>DERs are a range of devices that produce, consume and store energy. These range from EV chargers to solar panels to heat pumps.</p>
      </div>
    </div>
  )
}