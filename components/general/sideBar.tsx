import Image from "next/image";
import {
  CalendarIcon,
  HomeIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  ListBulletIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
const SideBar = () => {
  interface AllIcons {
    [iconName: string]: React.ComponentType<any>;
  }
  const allIcons: AllIcons = {
    CalendarIcon,
    HomeIcon,
    ChatBubbleOvalLeftEllipsisIcon,
    ListBulletIcon,
  };
  const sideNav = [
    {
      title: "home",
      icon: "HomeIcon",
    },
    {
      title: "bookings",
      icon: "CalendarIcon",
      activeImage: "bookmark",
    },
    {
      title: "messages",
      icon: "ChatBubbleOvalLeftEllipsisIcon",
    },
    {
      title: "activities",
      icon: "ListBulletIcon",
    },
  ];

  return (
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

        <div className="side_nav md:mt-14 md:w-2/12">
          <ul className="max-md:flex max-sm:justify-between max-md:justify-center  max-sm:mx-0">
            {sideNav.map((nav, index) => {
              const Icon = allIcons[nav.icon];

              return (
                <li
                  key={`nav--${index}`}
                  className="flex max-md:flex-col max-md:mx-4 items-center  md:my-4 py-2 hover:bg-lightWhite cursor-pointer md:pl-7 hover:text-green"
                >
                  <div className="icon w-[24px] h-[24px] max-md:ml-2">
                    <Icon />
                  </div>
                  <p className="capitalize ml-2 max-md:text-[14px]">
                    {nav.title}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
