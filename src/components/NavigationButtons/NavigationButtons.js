import React from 'react'
import CustomButton from '../CustomButton/CustomButton'
import './NavigationButtons.styles.scss'
import ArrowRight from '../../assets/images/arrow_back.svg'
import ArrowLeft from '../../assets/images/arrow.svg'

const NavigationButtons = props => {
  return (
    <div className="navbuttons">
      <CustomButton
        style={{ marginRight: '30px' }}
        inverted
        onClick={() => props.history.goBack()}
      >
        <img src={ArrowLeft} alt="&larr;" className="arrow-left" /> Previous
        step
      </CustomButton>
      <CustomButton onClick={() => props.history.push(`${props.navigateto}`)}>
        Next step
        <img src={ArrowRight} alt="&rarr;" className="arrow-right" />
      </CustomButton>
    </div>
  )
}

export default NavigationButtons
