import Image from "next/image";
import LocationSearch from "../locationSearch";
import Link from "next/link";

const Header = () => {
  const mobile_icons = [
    { icon: "post_mobile", route: "/post-job" },
    { icon: "bookmark_mobile", route: "/" },
    { icon: "wishlist_mobile", route: "/" },
  ];
  return (
    <div className="header md:bg-white md:z-50 md:fixed md:w-10/12 md:h-[62px] md:flex justify-between md:border-b border-grey items-center md:px-6 px-3 max-sm:pt-3">
      <div className="lg:hidden mobile flex items-center justify-between">
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
        <Link href="/post-job">
          <div className="post flex items-center bg-green p-2.5  text-white rounded-md mr-10">
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

        <div className="bookmarks flex flex-col items-center mr-10">
          <Image
            src={"/assets/icons/nav_icons/bookmark.svg"}
            width={24}
            height={24}
            alt=""
          />
          <p className="text-14px">Bookmarks</p>
        </div>

        <div className="adminOption">
          <div className="admin_image">
            <Image
              src={"/assets/images/client_test.png"}
              width={40}
              height={40}
              alt=""
            />
          </div>
          <div className="admin_nav"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
