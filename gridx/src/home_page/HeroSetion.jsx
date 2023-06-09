import './css/hero-section.scss'
import xenonPlaform from "../icons/XENON PLATFORM ICON 1.svg"


export default function HeroSection(){
  return(
    <>
      <div className="container">

        <div className="parallelogram" id="one"></div>
        <div className="parallelogram" id="two"></div>
        <div className="parallelogram" id="three"></div>
        <div className="parallelogram" id="four"></div>
        <div className="parallelogram" id="five"></div>
        <div className="parallelogram" id="six"></div>
      
       {/* LEFT COLUMN */}
        <div className="left-column">
        <h1 className="hero-header">
          Build customized <br/> digital  <span className='bold-header'>energy <br/> solutions</span>
        </h1>
        <p className="hero-paragraph">
          By complementing powerful IoT and cloud
          infrastructure with flexible modules, our 
          XENON platform makes building cutting-edge 
          energy applications quick and cost-efficient.
        </p>
        <div className="button-wrapper">
        <button className="demo-button">Book a demo</button>
        <button className="sales-button">Contact Sales ›</button>
        </div>
      </div>


        {/* RIGHT COLUMN */}
      <div className="right-column">
        <img src={xenonPlaform} alt="/" />
      </div>
    </div>
  </>
  )
}