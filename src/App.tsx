import React from 'react'

// import { Routes, Route, Outlet, Link } from 'react-router-dom'

import './style.css'
import './app.scss'
// import IMAGE from './assets/react.png'
// import LOGO from './assets/react.svg'
// const About = React.lazy(() => import('./pages/About'))
const App = () => {
  // const abc = '32'
  return (
    <div>
      <h1>
        React Typescript Webpack Template - ( {process.env.NODE_ENV} -
        {process.env.name} )
      </h1>
      {/* <React.Suspense fallback={<>...</>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </React.Suspense> */}
    </div>
  )
}

export default App

// function Layout() {
//   return (
//     <div>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           <li>
//             <Link to="/dashboard/messages">Messages (Dashboard)</Link>
//           </li>
//         </ul>
//       </nav>

//       <hr />

//       <Outlet />
//     </div>
//   )
// }
