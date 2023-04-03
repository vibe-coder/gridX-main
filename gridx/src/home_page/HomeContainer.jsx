import React from "react"
import HeroSection from "./HeroSetion";
import ClientSection from "./ClientSection";
import References from "./References";
import XenonPlatform from "./XenonPlatform";
import Modules from "./modules";
import API from "./API";
import Company from "./Company";


function HomeConatiner(){
  return (
    <div className="home-container">
      <HeroSection/>
      <ClientSection/>
      <References/>
      <XenonPlatform/>
      <Modules/>
      <API/>
      <Company/>
    </div>
  )
}

export default HomeConatiner;