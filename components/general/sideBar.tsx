import Image from "next/image";
import {
  CalendarIcon,
  HomeIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  ListBulletIcon,
} from "@heroicons/react/24/outline";
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
    <div className="sidebar max-sm:fixed max-sm:z-50 max-sm:w-full max-sm:bottom-0 md:fixed md:w-2/12 bg-sideBarColor md:h-screen max-sm:px-3">
      <div className="max-sm:hidden logo pl-7 pt-7">
        <Image
          src={"/assets/images/Logo-green.png"}
          width={125}
          height={20}
          alt=""
        />
      </div>

      <div className="side_nav md:mt-14">
        <ul className="max-sm:flex max-sm:justify-between">
          {sideNav.map((nav, index) => {
            const Icon = allIcons[nav.icon];

            return (
              <li
                key={`nav--${index}`}
                className="flex max-sm:flex-col items-center  md:my-4 py-2 hover:bg-lightWhite cursor-pointer md:pl-7 hover:text-green"
              >
                <div className="icon w-[24px] h-[24px] max-sm:ml-2">
                  <Icon />
                </div>
                <p className="capitalize ml-2 max-sm:text-[14px]">
                  {nav.title}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
