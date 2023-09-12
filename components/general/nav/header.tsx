import Image from "next/image";
import LocationSearch from "../locationSearch";
import Link from "next/link";
import AdminNav from "./adminNav";
import { useState } from "react";

const Header = () => {
  const mobile_icons = [
    { icon: "post_mobile", route: "/jobs" },
    { icon: "wishlist_mobile", route: "/" },
  ];

  const [openAdminNav, setOpenAdminNav] = useState(false);
  return (
    <div className="header md:bg-white md:z-50 md:fixed md:w-10/12 md:h-[62px] md:flex justify-between md:border-b border-grey items-center md:px-6 px-3 max-sm:pt-3">
      <div className="md:hidden mobile flex items-center justify-between">
        <div className="mobile_log">
          <Link href="/">
            <Image
              src={"/assets/images/logo_mobile.png"}
              width={40}
              height={40}
              alt=""
            />
          </Link>
        </div>

        <div className="mobile_nav">
          <ul className="flex items-center">
            {mobile_icons.map((x, i) => (
              <Link href={x.route} key={i}>
                <li className="mx-2">
                  <Image
                    src={`/assets/images/${x.icon}.svg`}
                    width={24}
                    height={24}
                    alt=""
                  />
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>

      <LocationSearch />

      <div className="admin max-md:hidden flex justify-between items-center">
        <Link href="/jobs">
          <div className="post flex items-center bg-green p-2.5  text-white rounded mr-10">
            <Image
              src={"/assets/icons/nav_icons/plus.svg"}
              width={24}
              height={24}
              alt=""
              className="mr-2"
            />
            <p>Post a job</p>
          </div>
        </Link>

        <Link href={"/bookmark"}>
          <div className="bookmarks flex flex-col items-center">
            <Image
              src={"/assets/images/wishlist_mobile.svg"}
              width={24}
              height={24}
              alt=""
            />
            <p className="text-14px">Bookmarks</p>
          </div>
        </Link>

        {/* <div className="adminOption">
          <div
            className="admin_image cursor-pointer"
            onClick={() => setOpenAdminNav(!openAdminNav)}
          >
            <Image
              src={"/assets/images/client_test.png"}
              width={40}
              height={40}
              alt=""
            />
          </div>

          {openAdminNav && (
            <div className="admin_nav">
              <AdminNav
                setOpenAdminNav={setOpenAdminNav}
                openAdminNav={openAdminNav}
              />
            </div>
          )}
        </div> */}
      </div>
    </div>
  );
};

export default Header;
