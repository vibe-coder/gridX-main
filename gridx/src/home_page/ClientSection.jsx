import React from "react";
import "./css/client-section.scss"
import clientLogo1 from "../icons/ICON FILE-08.svg"
import clientLogo2 from "../icons/ICON FILE-09.svg"
import clientLogo3 from "../icons/ICON FILE-10.svg"
import clientLogo4 from "../icons/ICON FILE-11.svg"
import clientLogo5 from "../icons/ICON FILE-12.svg"
import clientLogo6 from "../icons/ICON FILE-13.svg"
import clientLogo7 from "../icons/ICON FILE-14.svg"
import clientLogo8 from "../icons/ICON FILE-15.svg"
import time from "../icons/FOCUS ICON-02.svg"
import speed from "../icons/FOCUS ICON-03.svg"
import star from "../icons/FOCUS ICON-04.svg"
import tag from "../icons/FOCUS ICON-05.svg"


export default function ClientSection(){
  return(
    <div className="client-container">
      <div className="client-company-container">
        <img src={clientLogo1} alt="client logo"/>
        <img src={clientLogo8} alt="client logo"/>
        <img src={clientLogo5} alt="client logo"/>
        <img src={clientLogo4} alt="client logo"/>
        <img src={clientLogo7} alt="client logo"/>
        <img src={clientLogo6} alt="client logo"/>
        <img src={clientLogo3} alt="client logo"/>
        <img src={clientLogo2} alt="client logo"/>
      </div>

      <div className="about-gridx-container">
        <h4 className="about-header">WHY XENON?</h4>
        <h3 className="about-subheader">Focus on what's important</h3>

        <div className="time-wrapper">
          <img src={time} alt="time icon" />
          <h3>Save thousands of developers hours</h3>
          <p>An abstraction layer for DERs allows developers to <strong>focus</strong> on their <strong>actual solution</strong> rather than the technical details.</p>
        </div>

        <div className="time-wrapper">
          <img src={speed} alt="time icon" />
          <h3>Get to market in no time</h3>
          <p>Easily tap into new markets with an average of just <strong>32 days</strong> between purchase and pilot project.</p>
        </div>

        <div className="time-wrapper">
          <img src={star} alt="time icon" />
          <h3>Stay at the forefront of innovation</h3>
          <p>We release and roll out <strong>updates every week</strong> to constantly improve our platform and future-proof your operations.</p>
        </div>

        <div className="time-wrapper">
          <img src={tag} alt="time icon" />
          <h3>Scale products, add customer value</h3>
          <p>XENON supports endless use cases and has proven its scalability with <strong>more than 10,000 devices in the field.</strong></p>
        </div>



      </div>
    </div>
  )
}