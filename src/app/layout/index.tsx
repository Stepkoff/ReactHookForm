import React from 'react';
import {Outlet} from 'react-router-dom';
import s from './index.module.sass';
import Header from "../../modules/Header";
import Footer from "../../modules/Footer";


const Layout = () => {
  return (
    <div className={s.layout}>
      <Header/>
      <main className={s.mainContent}>
        <Outlet/>
      </main>
      <Footer/>
    </div>
  );
};

export default Layout;