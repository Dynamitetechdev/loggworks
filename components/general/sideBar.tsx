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
    <div className="sidebar fixed w-2/12 bg-sideBarColor h-screen">
      <div className="logo pl-7 pt-7">
        <Image
          src={"/assets/images/Logo-green.png"}
          width={125}
          height={20}
          alt=""
        />
      </div>

      <div className="side_nav mt-14">
        <ul>
          {sideNav.map((nav, index) => {
            const Icon = allIcons[nav.icon];

            return (
              <li
                key={`nav--${index}`}
                className="flex items-center my-4 py-2 hover:bg-lightWhite cursor-pointer pl-7 hover:text-green"
              >
                <div className="icon w-[24px] h-[24px]">
                  <Icon />
                </div>
                <p className="capitalize ml-2">{nav.title}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
