import React from 'react'
import "./css/company-section.scss"

function Company() {
  return (
    <div className='company-container'>
      <h4>COMPANY</h4>
      <h3>Do stuff that matters.</h3>
      <p>Our solutions save more than 30t in carbon emissions per employee, every year. That's more than you'd save by going vegan, ditching your car and switching to a green energy supplier – combined.
      <br/><br/>
      And while it's great to know your work has true impact, doing so with a great team, flexible working policies and competitive salary is even better.
      </p>
      <button>Learn more about us</button>
      <a href='/'>Browse open positions</a>
    </div>
  )
}

export default Company