import SideBar from "../../components/general/sideBar";
import { useEffect, useRef, useState } from "react";
import Header from "../../components/general/nav/header";
import HomeTab from "../../components/pageTabs/homeTab";
import PostJobTab from "../../components/pageTabs/postJobTab";

const PostJobPage = () => {
  useEffect(() => {}, []);
  return (
    <div className="md:grid md:grid-cols-12">
      <SideBar />
      <div className="main md:col-span-10">
        <Header />

        {/* ALL TABS BELOW */}
        <PostJobTab />
      </div>
    </div>
  );
};

export default PostJobPage;
