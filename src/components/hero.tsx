import React from 'react'

const Hero = () => {
  return (
    <div className='hero-root'>
     <div className='badge'>
        <span>

         Thinking about incorporating?
        </span>
        
        <svg width="16" height="16" fill="none"><path stroke="#1E1F25" stroke-linecap="round" stroke-linejoin="round" stroke-opacity=".5" stroke-width="1.25" d="M8 4.75 11.25 8m0 0L8 11.25M11.25 8h-6.5"></path></svg>
     </div>
     <div>
        <h1 className='hero-title'>Magically simplify accounting and taxes</h1>
        <p className='hero-subtitle'>Automated bookkeeping, effortless tax filing, real‑time insights. Set up in 10 mins. Back to building by 12:14am.</p>
     </div>
    </div>
  )
}

export default Hero
