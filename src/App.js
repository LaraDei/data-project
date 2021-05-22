import React from 'react';
import {Route} from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage'
import NavBar from './components/NavBar/NavBar'
import TutorialPage from './components/TutorialPage/TutorialPage'
import GraphCreatePage from './components/GraphCreatePage/GraphCreatePage'
import './App.css'
import {data} from './DataStore'

export default function App() {

  function renderMainRoutes(){
    return(
      <>
        <Route
            exact
            path='/'
            component={LandingPage}
        />
         <Route
            path='/tutorial'
            render={() => (
              <TutorialPage data={data} />
            )}
        />
                 <Route
            path='/project'
            render={() => (
              <GraphCreatePage />
            )}
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