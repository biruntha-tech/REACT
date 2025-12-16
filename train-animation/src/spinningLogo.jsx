import { useState, useEffect } from 'react'
import './spinningLogo.css'
import spinningLogoImage from './assets/spinning_logo.jpeg'

function SpinningLogo() {
  const [animationStep, setAnimationStep] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (animationStep < 4) {
        setAnimationStep(prev => prev + 1)
      }
    }, 1000)
    return () => clearTimeout(timer)
  }, [animationStep])

  return (
    <div className="spinning-logo-container">
      <div className="text-left">Education</div>
      <div className="text-right">Empowerment</div>
      <div className="text-top">Entrepreneurship</div>
      
      <div className="logo-wrapper">
        <img src={spinningLogoImage} alt="Spinning Logo" className="spinning-logo" />
      </div>
      
      <div className="animated-text">
        <span className={`letter ${animationStep >= 1 ? 'show' : ''}`}>H</span>
        <span className={`letter ${animationStep >= 1 ? 'show' : ''}`}>O</span>
        <span className={`letter ${animationStep >= 1 ? 'show' : ''}`}>P</span>
        <span className={`letter ${animationStep >= 1 ? 'show' : ''}`}>E</span>
        <span className={`space ${animationStep >= 2 ? 'show' : ''}`}> </span>
        <span className={`e-letter ${animationStep >= 2 ? 'show' : ''} ${animationStep >= 4 ? 'transform' : ''}`}>
          {animationStep >= 4 ? '3' : 'EEE'}
        </span>
      </div>
    </div>
  )
}

export default SpinningLogo