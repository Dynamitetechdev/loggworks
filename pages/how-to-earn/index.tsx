import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import SideBar from "../../components/general/sideBar";
import Header from "../../components/general/nav/header";
import NavHead from "../../components/postJobComponents/navHead";
import Image from "next/image";

const HowToEarn = () => {
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
            title="How to Earn Points"
          />

          <div className="px-6 md:px-9 pt-10 md:flex text-pTagGrey ">
            <div className="md:w-5/12 mx-auto ">
              <div className="h-[243px] bg-[#FFEFD9] flex flex-col justify-between items-center mb-4">
                <h1 className="text-2xl font-bold mt-10 ">Earn Logg Points</h1>
                <Image
                  src={"/assets/bg/earnPoint.svg"}
                  width={216}
                  height={182}
                  alt=""
                />
              </div>

              <p className="text-1xl  mb-4">
                Collecting Log points is easy. The more you use the Loggworks
                app, the more you earn. Accumulation of your points are
                automatically redeemed in LOGG CASH.
              </p>

              <div className="points mb-4">
                <div className="relative">
                  <table className="w-full md:w-8/12 text-sm text-left">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                        <th scope="col" className="py-3">
                          Product name
                        </th>
                        <th scope="col" className="py-3">
                          Type
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-4">10 every £1</td>
                        <td className="py-4">Book a service</td>
                      </tr>
                      <tr>
                        <td className="py-4">50</td>
                        <td className="py-4">Write a review</td>
                      </tr>
                      <tr>
                        <td className="py-4">10</td>
                        <td className="py-4">Upload photos with your review</td>
                      </tr>
                      <tr>
                        <td className="py-4">50</td>
                        <td className="py-4">Share our app on Social media</td>
                      </tr>
                      <tr>
                        <td className="py-4">50</td>
                        <td className="py-4">
                          Verify your profile via Social media
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="mb-3">
                <h1 className="font-semibold mb-3">
                  How easy it is to earn points?
                </h1>
                <p className="text-1xl text-pTagGrey">
                  The more you use,the chances you stand to earn. Here are some
                  ways you can earn points.
                </p>
              </div>

              <div className="mb-3">
                <h1 className="font-semibold mb-3">How do I use my points?</h1>
                <p className="text-1xl text-pTagGrey">
                  Your points are automatically redeemed for Loggcash
                </p>
              </div>
              <div className="pb-16">
                <h1 className="font-semibold mb-3">Do my points expire?</h1>
                <p className="text-1xl text-pTagGrey">
                  No, points don’t expire
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToEarn;
