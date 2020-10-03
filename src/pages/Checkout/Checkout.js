import React from 'react'
import NavigationButtons from '../../components/NavigationButtons/NavigationButtons'

const Checkout = props => {
  return (
    <div className="content-container">
      <h2>Save Project | Building Name</h2>
      <NavigationButtons history={props.history} navigateto="/" />
    </div>
  )
}

export default Checkout
