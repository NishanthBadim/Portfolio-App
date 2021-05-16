import React from "react";
import Template from './../../templates/_webPage/_webPage'
import Main from "./../../organisms/_main/_main";
import NavBar from "./../../molecules/_navBar/_navBar";
import Drawer from './../../molecules/_drawer/_drawer'

const HomePage = () => {
  return <Template header={<NavBar />} drawer={<Drawer />} main={<Main />} />;
}
export default HomePage;
