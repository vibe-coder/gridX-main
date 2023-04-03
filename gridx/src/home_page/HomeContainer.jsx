import React from "react"
import HeroSection from "./HeroSetion";
import ClientSection from "./ClientSection";
import References from "./References";
import XenonPlatform from "./XenonPlatform";


function HomeConatiner(){
  return (
    <div className="home-container">
      <HeroSection/>
      <ClientSection/>
      <References/>
      <XenonPlatform/>
    </div>
  )
}

export default HomeConatiner;