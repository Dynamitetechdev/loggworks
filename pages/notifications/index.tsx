import Image from "next/image";
import SideBar from "../../components/general/sideBar";
import Header from "../../components/general/nav/header";
import NavHead from "../../components/postJobComponents/navHead";
import { useState } from "react";

const Notifications = () => {
  const [activeStep, setActiveStep] = useState(0);
  return (
    <div className="md:grid md:grid-cols-12">
      <SideBar />
      <div className="main md:col-span-10">
        <Header />
        <div className="post-job bg-white h-screen relative md:mt-16">
          <NavHead
            activeStep={activeStep}
            setActiveStep={setActiveStep}
            title="notifications"
          />

          <div className="px-6 md:px-9 pt-10 md:flex text-pTagGrey ">
            <div className="md:w-5/12 mx-auto">
              <div className="flex items-center py-3 justify-between">
                <p>Push Notifications</p>

                <div className="toggle">
                  <Image
                    src={"/assets/icons/toggleOn.svg"}
                    width={56}
                    height={32}
                    alt=""
                  />
                </div>
              </div>
              <div className="flex items-center py-3 border-y border-grey justify-between">
                <p>Email Notifications</p>

                <div className="toggle">
                  <Image
                    src={"/assets/icons/toggleOn.svg"}
                    width={56}
                    height={32}
                    alt=""
                  />
                </div>
              </div>
              <div className="flex items-center py-3 justify-between">
                <p>Promotion Management</p>

                <div className="toggle">
                  <Image
                    src={"/assets/icons/toggleOn.svg"}
                    width={56}
                    height={32}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
