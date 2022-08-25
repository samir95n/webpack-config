import React from 'react'
import './style.css'
import IMAGE from './react.png'
import LOGO from './react.svg'
import ClickCounter from './ClickCounter'

const App = () => {
  // const abc = '32'
  return (
    <div>
      <h1>
        React Typescript Webpack Template - ( {process.env.NODE_ENV} -
        {process.env.name} )
      </h1>
      <img src={IMAGE} alt="React Logo" width="300" height="200" />
      <img src={LOGO} alt="React Logo" width="300" />
      <ClickCounter />
    </div>
  )
}

export default App
