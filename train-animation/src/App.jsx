import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [isRunning, setIsRunning] = useState(false)
  const [currentStation, setCurrentStation] = useState(0)

  const timelineMilestones = [
    { year: '2005', title: 'Foundation' },
    { year: '2006', title: 'Early Development' },
    { year: '2007', title: 'First Launch' },
    { year: '2008', title: 'Market Entry' },
    { year: '2009', title: 'Growth Phase' },
    { year: '2010', title: 'Expansion' },
    { year: '2011', title: 'Innovation Hub' },
    { year: '2012', title: 'Global Reach' },
    { year: '2013', title: 'Digital Transform' },
    { year: '2014', title: 'Mobile Era' },
    { year: '2015', title: 'Cloud Migration' },
    { year: '2016', title: 'AI Integration' },
    { year: '2017', title: 'Smart Solutions' },
    { year: '2018', title: 'Automation' },
    { year: '2019', title: 'Data Analytics' },
    { year: '2020', title: 'Remote Revolution' },
    { year: '2021', title: 'Hybrid Model' },
    { year: '2022', title: 'Sustainability' },
    { year: '2023', title: 'Green Tech' },
    { year: '2024', title: 'Future Vision' }
  ]

  const getMilestonePosition = (index) => {
    const x = (index / (timelineMilestones.length - 1)) * 300 + 50
    const y = -80
    return { x: `${x}vw`, y }
  }

  const getTrackOffset = () => {
    return 0
  }

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setCurrentStation(prev => {
          if (prev >= timelineMilestones.length - 1) {
            setIsRunning(false)
            setTimeout(() => setCurrentStation(0), 1000)
            return prev
          }
          return prev + 1
        })
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [isRunning, timelineMilestones.length])

  const startJourney = () => {
    setCurrentStation(0)
    setIsRunning(true)
  }

  return (
    <div className="app">
      <h1>Timeline Journey 2005-2024</h1>
      
      <div className="control-panel">
        <button 
          onClick={startJourney} 
          disabled={isRunning}
          className="start-btn"
        >
          {isRunning ? 'Journey in Progress...' : 'Start Journey'}
        </button>
      </div>

      <div className="train-container">
        <div className="mountains"></div>
        <div className="track-viewport">
          <div 
            className="track"
            style={{ transform: `translateX(${getTrackOffset()}vw)` }}
          >
            <div className="railway-base"></div>
            <div className="railway-tracks"></div>
            <div className="railway-ties"></div>
            
            {/* Departure Station */}
            <div 
              className="station-wrapper"
              style={{ 
                left: '20vw',
                transform: 'translateY(-80px)'
              }}
            >
              <div className={`station ${currentStation === 0 ? 'active' : 'visited'}`}>
                <div className="station-building">
                  <div className="building-roof"></div>
                  <div className="building-body"></div>
                  <div className="building-door"></div>
                </div>
                <div className="station-board">
                  <div className="year">{timelineMilestones[currentStation].year}</div>
                  <div className="title">{timelineMilestones[currentStation].title}</div>
                </div>
              </div>
            </div>
            
            {/* Arrival Station */}
            {currentStation < timelineMilestones.length - 1 && (
              <div 
                className="station-wrapper"
                style={{ 
                  left: '80vw',
                  transform: 'translateY(-80px)'
                }}
              >
                <div className={`station arriving`}>
                  <div className="station-building">
                    <div className="building-roof"></div>
                    <div className="building-body"></div>
                    <div className="building-door"></div>
                  </div>
                  <div className="station-board">
                    <div className="year">{timelineMilestones[currentStation + 1].year}</div>
                    <div className="title">{timelineMilestones[currentStation + 1].title}</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        
        <div className={`train ${isRunning ? 'moving' : ''}`}>
          <div className="compartment">🚃</div>
          <div className="compartment">🚃</div>
          <div className="compartment">🚃</div>
          🚂
        </div>
      </div>

      <div className="journey-info">
        <p>Current Milestone: <strong>{timelineMilestones[currentStation].year} - {timelineMilestones[currentStation].title}</strong></p>
        <p>Progress: {currentStation + 1} / {timelineMilestones.length}</p>
      </div>
    </div>
  )
}

export default App
