import { useState } from "react";
import "./App.css";
import ListOfGifs from "./components/ListOfGifs";

import Home from "./pages/Home";
import SearchResults from './pages/SearchResults/index'
import Detail from './pages/Detail'

import StaticContext from './context/StaticContext'

import { Link, Route } from "wouter";
import { GifContextProvider } from "./context/GifsContext";

function App() {
  return (
    <StaticContext.Provider value={{name: 'andres', lastName: 'Ceron'}}>
      <div className="App">
        <section className="App-content">
          <Link to="/">
            <h1>App</h1>
          </Link>

          <GifContextProvider>
            <Route
              component={Home}
              path="/"
            />
            <Route 
              component={SearchResults}
              path="/search/:keyword"
            />
            <Route 
              component={Detail}
              path="/gif/:id"
            />
          </GifContextProvider>

        </section>
      </div>
    </StaticContext.Provider>
  );
}

export default App;
