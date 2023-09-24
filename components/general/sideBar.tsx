import Image from "next/image";
import {
  CalendarIcon,
  HomeIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  ListBulletIcon,
  UserIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useEffect, useState } from "react";
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
    UserCircleIcon,
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
      route: "/message",
    },
    {
      id: 4,
      title: "activities",
      icon: "ListBulletIcon",
      route: "/activity",
    },
    {
      id: 4,
      title: "account",
      icon: "UserCircleIcon",
      route: "/account",
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
      id: 1,
      title: "booking",
      icon: "CalendarIcon",
      route: "/bookings",
    },
    {
      id: 3,
      title: "messages",
      icon: "ChatBubbleOvalLeftEllipsisIcon",
      route: "/message",
    },
    {
      id: 4,
      title: "activities",
      icon: "ListBulletIcon",
      route: "/activity",
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
    setActiveIndexInLocalStorage(index);
  };

  const [openAdminNav, setOpenAdminNav] = useState(false);

  const setActiveIndexInLocalStorage = (index: number | null) => {
    if (index !== null) {
      localStorage.setItem("activeIndex", index.toString());
    }
  };

  useEffect(() => {
    const storedIndex = localStorage.getItem("activeIndex");
    if (storedIndex !== null) {
      const parsedIndex = parseInt(storedIndex, 10);
      if (!isNaN(parsedIndex)) {
        setActiveIndex(parsedIndex);
      }
    }
  }, []);

  return (
    <>
      <div className="relative md:col-span-2">
        <div className="sidebar max-md:fixed max-md:z-50 w-full max-md:bottom-0 md:fixed  bg-sideBarColor md:h-screen max-md:px-3  md:max-w-[221px]">
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

          <div className="mobile_nav md:hidden side_nav md:mt-14 md:w-full">
            <ul className="max-md:flex max-sm:justify-between max-md:justify-center  max-sm:mx-0">
              {mobileNav.map((nav, index) => {
                const Icon = allIcons[nav.icon];
                return (
                  <Link href={nav.route} key={`nav--${index}`}>
                    <li
                      className={`flex max-md:flex-col items-center md:my-4 py-2  cursor-pointer md:pl-7  ${
                        activeIndex === index && "md:bg-lightWhite text-green"
                      }`}
                      onClick={() => handleActive(index)}
                    >
                      <div className="icon w-[20px] h-[20px] max-md:ml-2">
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

          <div className="side_nav md:mt-14 ml-3">
            <ul className="max-md:hidden max-md:flex max-sm:justify-between max-md:justify-center  max-sm:mx-0 pr-5">
              {sideNav.map((nav, index) => {
                const Icon = allIcons[nav.icon];
                return (
                  <Link href={nav.route} key={`nav--${index}`}>
                    <li
                      className={`flex max-md:flex-col max-md:mx-4 items-center  md:my-4 py-2  cursor-pointer md:pl-5 font-[500]  ${
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
