import React, { Suspense, useState } from "react";
import "./App.css";
import ListOfGifs from "./components/ListOfGifs";

import SearchResults from "./pages/SearchResults/index";
import Detail from "./pages/Detail";

import StaticContext from "./context/StaticContext";

import { Link, Route } from "wouter";
import { GifContextProvider } from "./context/GifsContext";

const HomePage = React.lazy(() => import("./pages/Home"));

function App() {
  return (
    <StaticContext.Provider value={{ name: "andres", lastName: "Ceron" }}>
      <div className="App">
        <Suspense fallback={null}>
          <section className="App-content">
            <Link to="/">
              <h1>App</h1>
            </Link>

            <GifContextProvider>
              <Route component={HomePage} path="/" />
              <Route component={SearchResults} path="/search/:keyword" />
              <Route component={Detail} path="/gif/:id" />
              <Route component={() => <h1>404 ERROR :(</h1>} path="/404" />
            </GifContextProvider>
          </section>
        </Suspense>
      </div>
    </StaticContext.Provider>
  );
}

export default App;
