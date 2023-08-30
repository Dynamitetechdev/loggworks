import Image from "next/image";

const ProfileCard = () => {
  return (
    <div className="profile p-4 rounded flex items-center bg-primary100 border border-grey80 mb-8">
      <Image
        src={"/assets/images/client_test.png"}
        width={20}
        height={20}
        alt=""
        className="mr-2"
      />

      <h3 className="font-semibold">Devon Lane</h3>
    </div>
  );
};

export default ProfileCard;
