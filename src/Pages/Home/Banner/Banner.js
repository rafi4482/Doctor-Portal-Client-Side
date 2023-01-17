import React from 'react'

const Banner = () => {
  return (
    <div className=" hero">
    <div className="hero-content flex-col lg:flex-row-reverse">
      <img src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=847&q=80" className="rounded-lg w-1/2 shadow-2xl" />
      <div>
        <h1 className="text-5xl font-bold">Box Office News!</h1>
        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        <button class="btn btn-warning font-thin">Button</button>      </div>
    </div>
  </div>
  )
}

export default Banner