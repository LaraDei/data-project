import React from 'react';
import {Route} from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage'
import NavBar from './components/NavBar/NavBar'
import './App.css'

export default function App() {

  function renderMainRoutes(){
    return(
      <>
        <Route
            exact
            path='/'
            component={LandingPage}
        />
      </>
    )
  }

  return (
    <div className="App">
        <NavBar/>
        <main className="app-main">
          {renderMainRoutes()}
        </main>
    </div>

  )
}