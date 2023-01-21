import React from 'react'

const Statistics = () => {
  return (
    <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 stats text-center mt-16  stats-vertical lg:stats-horizontal shadow">
  
    <div className="stat">
      <div className="stat-title">Registered Doctors</div>
      <div className="stat-value text-secondary">231</div>
      <div className="stat-desc">Jan 1st - Feb 1st</div>
    </div>
    
    <div className="stat">
      <div className="stat-title">Successful Surgeries</div>
      <div className="stat-value text-primary">4,200</div>
      <div className="stat-desc">↗︎ (22%)</div>
    </div>
    
    <div className="stat">
      <div className="stat-title"> Recovery Rate</div>
      <div className="stat-value text-success">96%</div>
      <div className="stat-desc">↗︎ (31%)</div>
    </div>
    
  </div>
  )
}

export default Statistics