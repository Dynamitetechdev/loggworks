import SideBar from "../../components/general/sideBar";
import { useEffect, useRef, useState } from "react";
import Header from "../../components/general/nav/header";
import HomeTab from "../../components/pageTabs/homeTab";

const HomePage = () => {
  useEffect(() => {}, []);

  return (
    <div className="md:flex">
      <div className="w-[221px]">
        <SideBar />
      </div>

      <div className="flex-grow ">
        <Header />
        {/* ALL TABS BELOW */}
        <HomeTab />
      </div>
    </div>
  );
};

export default HomePage;
