import React from 'react'
import {BrowserRouter,Route,Routes,NavLink} from 'react-router-dom'
import {About} from '../components/About'
import {Dashboard} from '../components/Dashboard'
import {Header} from '../components/Header'
import {Home} from '../components/Home'
function Navigation() {
  return (
    <BrowserRouter>
        <ul>
            <li>
                <NavLink to= '/'>home</NavLink>
            </li>
            <li>
                <NavLink to='about'>About</NavLink>
            </li>
            <li>
                <NavLink to = 'dashboard'>Dashboard</NavLink>
            </li>
            <li><NavLink to = 'header'>Header</NavLink></li>
        </ul>
        <Routes>
            <Route path='/' element= {<Home/>} />
            <Route path='about' element= {<About/>} />
            <Route path='dashboard' element= {<Dashboard/>} />
            <Route path='header' element= {<Header/>} />
        </Routes>
    
    
    </BrowserRouter>
  )
}

export { Navigation }