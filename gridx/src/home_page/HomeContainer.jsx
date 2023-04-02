import React from "react"
import HeroSection from "./HeroSetion";
import ClientSection from "./ClientSection";


function HomeConatiner(){
  return (
    <div className="home-container">
      <HeroSection/>
      <ClientSection/>
    </div>
  )
}

export default HomeConatiner;