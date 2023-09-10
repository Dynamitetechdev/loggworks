import Image from "next/image";

const AttachmentMenu = () => {
  return (
    <div className="attachmentMenu max-md:bg-white fixed md:absolute py-7 px-2 z-50 md:right-8 md:bottom-16 bottom-[120px] w-[414px] h-[185px] md:shadow-lg rounded-t-lg">
      <ul className="flex items-center justify-around">
        <li className="cursor-pointer">
          <label
            className="rounded-full w-[56px] h-[56px] focus:outline-none bg-[#2D9CDB]  md:mb-0 relative  text-gray-700 flex items-center justify-center"
            id="grid-first-name"
          >
            <div className="absolute">
              <Image
                src={"/assets/icons/document.svg"}
                width={20}
                height={20}
                alt="profile "
              />
            </div>
            <input
              id="grid-first-name"
              type="file"
              name="title"
              // onChange={(e) => handleImageChange(e, i)}
              hidden
            />
          </label>
          <p className="text-[14px]">Document</p>
        </li>
        <li className="cursor-pointer">
          <label
            className="rounded-full w-[56px] h-[56px] focus:outline-none bg-[#EB5757]  md:mb-0 relative  text-gray-700 flex items-center justify-center"
            id="grid-first-name"
          >
            <div className="absolute">
              <Image
                src={"/assets/icons/camera_white.svg"}
                width={20}
                height={20}
                alt="profile "
              />
            </div>

            <input
              id="grid-first-name"
              type="file"
              name="title"
              // onChange={(e) => handleImageChange(e, i)}
              hidden
            />
          </label>
          <p className="text-[14px]">Camera</p>
        </li>
        <li className="cursor-pointer">
          <label
            className="rounded-full w-[56px] h-[56px] focus:outline-none bg-[#9B51E0]  md:mb-0 relative  text-gray-700 flex items-center justify-center"
            id="grid-first-name"
          >
            <div className="absolute">
              <Image
                src={"/assets/icons/gallery.svg"}
                width={20}
                height={20}
                alt="profile "
              />
            </div>

            <input
              id="grid-first-name"
              type="file"
              name="title"
              // onChange={(e) => handleImageChange(e, i)}
              hidden
            />
          </label>
          <p className="text-[14px]">Gallery</p>
        </li>
        <li className="cursor-pointer">
          <label
            className="rounded-full w-[56px] h-[56px] focus:outline-none bg-[#C4C4C4]  md:mb-0 relative  text-gray-700 flex items-center justify-center"
            id="grid-first-name"
          >
            <div className="absolute">
              <Image
                src={"/assets/icons/location_white.svg"}
                width={20}
                height={20}
                alt="profile "
              />
            </div>

            <input
              id="grid-first-name"
              type="file"
              name="title"
              // onChange={(e) => handleImageChange(e, i)}
              hidden
            />
          </label>
          <p className="text-[14px]">Location</p>
        </li>
      </ul>
    </div>
  );
};

export default AttachmentMenu;
