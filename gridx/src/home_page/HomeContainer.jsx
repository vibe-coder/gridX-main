import React from "react"
import HeroSection from "./HeroSetion";
import ClientSection from "./ClientSection";
import References from "./References";
import XenonPlatform from "./XenonPlatform";
import Modules from "./modules";
import API from "./API";


function HomeConatiner(){
  return (
    <div className="home-container">
      <HeroSection/>
      <ClientSection/>
      <References/>
      <XenonPlatform/>
      <Modules/>
      <API/>
    </div>
  )
}

export default HomeConatiner;