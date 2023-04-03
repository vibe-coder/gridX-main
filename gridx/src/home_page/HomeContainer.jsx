import React from "react"
import HeroSection from "./HeroSetion";
import ClientSection from "./ClientSection";
import References from "./References";


function HomeConatiner(){
  return (
    <div className="home-container">
      <HeroSection/>
      <ClientSection/>
      <References/>
    </div>
  )
}

export default HomeConatiner;