import React from 'react';
import MainNavigation from './src/navigation/main-navigation';
import User from "./src/context/user";

export default function App() {


  return (
    <User.Provider>
      <MainNavigation />
    </User.Provider>
  );
};
