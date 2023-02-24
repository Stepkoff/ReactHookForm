import React from 'react';
import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import Layout from "./layout";
import HomePage from "../pages/HomePage";
import {RouterProvider} from 'react-router-dom';
import './app.sass';
import SignUp from "../pages/SignUp";
import Error from '../pages/Error/index';


const router = createBrowserRouter(createRoutesFromElements(
  <Route path={'/'} element={<Layout/>}>
    <Route index element={<HomePage/>}/>
    <Route path={'/signUp'} element={<SignUp/>}/>
    <Route path={'/*'} element={<Error/>}/>
  </Route>
))


const App = () => {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
