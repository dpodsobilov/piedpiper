import React from 'react';
import { MainLayoutStyled } from './MainLayoutStyled';
import MainPage from "./MainPage/MainPage";
import Header from "./Header/Header";


export default function MainLayout() {
    return (
      <MainLayoutStyled>
          <Header />
          <MainPage />
      </MainLayoutStyled>
    );
}