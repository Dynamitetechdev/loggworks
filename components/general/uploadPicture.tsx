import Image from "next/image";

const UploadPicture = () => {
  return (
    <div className="flex items-center justify-center md:my-5">
      <label
        id="dropzone-file"
        className="flex flex-col items-center relative justify-center rounded-full w-[72px] h-[72px] md:w-[92px] md:h-[92px] rounded-lg cursor-pointer bg-grey"
      >
        <div className="flex items-center justify-center">
          <Image
            src={"/assets/icons/camera.svg"}
            width={24}
            height={24}
            alt=""
          />
        </div>
        <div className="addIcon absolute bg-green w-7 h-7 md:w-9 md:h-9 rounded-full -right-3 bottom-0 flex items-center justify-center ">
          <Image
            src={"/assets/icons/plus.svg"}
            width={24}
            height={24}
            alt=""
            className=""
          />
        </div>
        <input id="dropzone-file" type="file" className="hidden" />
      </label>
    </div>
  );
};

export default UploadPicture;
