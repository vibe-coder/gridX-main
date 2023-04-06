import "./css/references.scss"
import maingau from "../icons/maingau.svg"
import smartlab from "../icons/SMARTLAB.svg"
import ibc from "../icons/IBC.svg"
import eliso from "../icons/ELISTO.png"
import gatter from "../icons/GATTER.svg"
import electris from "../icons/electris.svg"
import goldbeck from "../icons/goldbeck.svg"
import dhl from "../icons/dhl.svg"
import austrianPost from "../icons/number 6.svg"

export default function References(){
  return(
    <div className="references-container">
      <div className="first-column">
        <h4>REFERENCES</h4>
        <h3>Built for any use case</h3>
        <p>
          From home energy management to smart grid operations, energy trading to eMobility, XENON is the platform for companies paving the way to the new energy era.
        </p>
        <a href="www.gridx.ai">See all references</a>
      </div>

      <div className="second-column">
        <div className="company-references">
        <h3>E-Mobility</h3>
          <div className="company-wrapper">
            <img src={maingau} alt="/"/>
          </div>
        </div>

        <div className="company-references">
        <h3>E-Mobility</h3>
          <div className="company-wrapper">
            <img src={smartlab} alt="/"/>
          </div>
        </div>

        <div className="company-references">
        <h3>HEMS</h3>
          <div className="company-wrapper">
            <img src={ibc} alt="/" className="img-2"/>
          </div>
        </div>

        <div className="company-references">
          <h3>E-Mobility</h3>
          <div className="company-wrapper">
            <img src={eliso} alt="/" className="img-2"/>
          </div>
        </div>

        <div className="company-references">
          <h3>HEMS</h3>
          <div className="company-wrapper">
            <img src={gatter} alt="/"/>
          </div>
        </div>

        <div className="company-references">
        <h3>HEMS</h3>
          <div className="company-wrapper">
            <img src={electris} alt="/"/>
          </div>
        </div>

        <div className="company-references">
        <h3>E-Mobility</h3>
          <div className="company-wrapper">
            <img src={goldbeck} alt="/"/>
          </div>
        </div>

        <div className="company-references">
          <h3>Logistics</h3>
          <div className="company-wrapper">
            <img src={dhl} alt="/"/>
          </div>
        </div>

        <div className="company-references">
          <h3>Logistics</h3>
          <div className="company-wrapper">
            <img src={austrianPost} alt="/" className="img-2"/>
          </div>
        </div>
      </div>
    </div>
  )
}