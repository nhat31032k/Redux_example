import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import useDarkMode from "./hook/useDarkMode";

import logo from "./logo.svg";
import { toggleDarkMode } from "./redux-toolkit/globalSlice";
import ButtonToggle from "./Uis/ButtonToggle";
import Sidebar from "./Uis/Sidebar";
import Card from "./Uis/Card";
import HackerNew from "./Uis/HackerNew";
import CardStyle from "./components/CardStyle";
import CardListStyle from "./components/CardListStyle";
import Photo from "./components/Photo";
{
  /* import './App.css' */
}

function App() {
  const [darkMode, setDarkMode] = useDarkMode();
  const globalAction = useSelector((state) => state.global);
  useEffect(() => {
    dispatch(toggleDarkMode(darkMode));
  }, []);
  console.log(globalAction);
  const dispatch = useDispatch();
  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
    dispatch(toggleDarkMode(!darkMode));
  };

  return (
    // className="dark:bg-slate-900"
    <div>
      <Photo></Photo>
      {/* <Sidebar /> */}
      {/* <Card></Card> */}
      {/* <ButtonToggle />
      <HackerNew />
      <button
        className="mx-[500px] dark:text-white"
        onClick={handleToggleDarkMode}
      >
        Toggle Dark Mode
      </button> */}
      {/* <CardListStyle>
        <CardStyle />
        <CardStyle />
        <CardStyle />
        <CardStyle />
        <CardStyle />
        <CardStyle />
      </CardListStyle> */}
    </div>
  );
}

export default App;
