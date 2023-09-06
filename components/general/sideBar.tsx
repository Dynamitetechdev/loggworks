import Image from "next/image";
import {
  CalendarIcon,
  HomeIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  ListBulletIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";
const SideBar = () => {
  interface AllIcons {
    [iconName: string]: React.ComponentType<any>;
  }
  const allIcons: AllIcons = {
    CalendarIcon,
    HomeIcon,
    ChatBubbleOvalLeftEllipsisIcon,
    ListBulletIcon,
    UserIcon,
  };

  const sideNav = [
    {
      id: 1,
      title: "home",
      icon: "HomeIcon",
      route: "/",
    },
    {
      id: 2,
      title: "bookings",
      icon: "CalendarIcon",
      route: "/bookings",
    },
    {
      id: 3,
      title: "messages",
      icon: "ChatBubbleOvalLeftEllipsisIcon",
      route: "/",
    },
    {
      id: 4,
      title: "activities",
      icon: "ListBulletIcon",
      route: "/activity",
    },
  ];

  const mobileNav = [
    {
      id: 1,
      title: "home",
      icon: "HomeIcon",
      route: "/",
    },
    {
      id: 3,
      title: "messages",
      icon: "ChatBubbleOvalLeftEllipsisIcon",
      route: "/",
    },
    {
      id: 4,
      title: "activities",
      icon: "ListBulletIcon",
      route: "/",
    },
    {
      id: 4,
      title: "Account",
      icon: "UserIcon",
      route: "/account",
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const handleActive = (index: number) => {
    setActiveIndex(index);
  };
  const [openAdminNav, setOpenAdminNav] = useState(false);
  return (
    <>
      <div className="relative md:col-span-2">
        <div className="sidebar max-md:fixed max-md:z-50 w-full max-md:bottom-0 md:fixed  bg-sideBarColor md:h-screen max-md:px-3">
          <Link href="/">
            <div className="max-md:hidden logo pl-7 pt-7">
              <Image
                src={"/assets/images/Logo-green.png"}
                width={125}
                height={20}
                alt=""
              />
            </div>
          </Link>

          <div className="mobile_nav md:hidden side_nav md:mt-14 md:w-2/12">
            <ul className="max-md:flex max-sm:justify-between max-md:justify-center  max-sm:mx-0">
              {mobileNav.map((nav, index) => {
                const Icon = allIcons[nav.icon];
                return (
                  <Link href={nav.route} key={`nav--${index}`}>
                    <li
                      className={`flex max-md:flex-col max-md:mx-4 items-center  md:my-4 py-2  cursor-pointer md:pl-7  ${
                        activeIndex === index && "bg-lightWhite text-green"
                      }`}
                      onClick={() => {
                        handleActive(index),
                          index === 3
                            ? setOpenAdminNav(!openAdminNav)
                            : setOpenAdminNav(false);
                      }}
                    >
                      <div className="icon w-[24px] h-[24px] max-md:ml-2">
                        <Icon />
                      </div>
                      <p className="capitalize ml-2 max-md:text-[14px]">
                        {nav.title}
                      </p>
                    </li>
                  </Link>
                );
              })}
            </ul>
          </div>

          <div className="side_nav md:mt-14 md:w-2/12">
            <ul className="max-md:hidden max-md:flex max-sm:justify-between max-md:justify-center  max-sm:mx-0">
              {sideNav.map((nav, index) => {
                const Icon = allIcons[nav.icon];
                return (
                  <Link href={nav.route} key={`nav--${index}`}>
                    <li
                      className={`flex max-md:flex-col max-md:mx-4 items-center  md:my-4 py-2  cursor-pointer md:pl-7  ${
                        activeIndex === index && "bg-lightWhite text-green"
                      }`}
                      onClick={() => handleActive(index)}
                    >
                      <div className="icon w-[24px] h-[24px] max-md:ml-2">
                        <Icon />
                      </div>
                      <p className="capitalize ml-2 max-md:text-[14px]">
                        {nav.title}
                      </p>
                    </li>
                  </Link>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
