import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home";
import PageNotFound from "./pages/page-not-found";
import {InfosClient} from "./pages/InfosClient";

import {Login} from "./connexionclient/Login";

export const App = () => {

      return (
          <div className="App">
                <Routes>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'/infosClient'} element={<InfosClient/>}/>
                    <Route path={'/login'} element={<Login/>}/>
                    {/*<Route path={'/register'} element={<Register/>}/>*/}
                    <Route path={"/*"} element={<PageNotFound/>}/>
                </Routes>
          </div>
      )

};


