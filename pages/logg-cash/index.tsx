import { useState } from "react";
import SideBar from "../../components/general/sideBar";
import Header from "../../components/general/nav/header";
import NavHead from "../../components/postJobComponents/navHead";
import Image from "next/image";

const LoggCash = () => {
  const [activeStep, setActiveStep] = useState(0);

  const transData = [
    {
      name: "Deposit",
      amount: "1500",
      status: "pending",
      date: "26/06/2021",
      time: "3:00",
    },
    {
      name: "Deposit",
      amount: "500",
      status: "success",
      date: "26/06/2021",
      time: "3:00",
    },
    {
      name: "Deposit",
      amount: "10",
      status: "pending",
      date: "26/06/2021",
      time: "3:00",
    },
    {
      name: "Deposit",
      amount: "503",
      status: "success",
      date: "26/06/2021",
      time: "3:00",
    },
  ];
  return (
    <div className="md:flex">
      <div className="w-[221px]">
        <SideBar />
      </div>
      <div className="flex-grow overflow-hidden">
        <div className="post-job bg-white h-screen relative">
          <NavHead
            activeStep={activeStep}
            setActiveStep={setActiveStep}
            title="Logg Cash"
            type="notab"
          />

          <div className="px-6 md:px-9 pt-10 md:flex text-pTagGrey ">
            <div className="md:w-5/12 mx-auto ">
              <div className="">
                <div className="balance h-[117px] text-white text-center bg-[#333333] rounded flex flex-col justify-center items-center">
                  <p className="text-[10px] uppercase">Available Balance</p>
                  <h1 className="text-[32px]">£900</h1>
                </div>

                <button className="w-full h-[48px] bg-green  font-bold my-3 py-2 px-4 rounded">
                  Deposit
                </button>
              </div>

              <div className="transactions">
                <h1 className="my-2 font-bold">Recent transactions</h1>
                {transData.map((x, i) => (
                  <div
                    className="transaction border-b border-grey py-3 flex items-center justify-between"
                    key={i}
                  >
                    <div className="flex items-center">
                      <div className="flex bg-[#EDF9E6] items-center justify-center rounded-full w-[40px] h-[40px]">
                        <Image
                          src={`/assets/icons/${
                            x.status === "pending"
                              ? "transactionPending"
                              : "transactionSuccess"
                          }.svg`}
                          width={20}
                          height={20}
                          alt=""
                        />
                      </div>

                      <div className="amount ml-3">
                        <h1 className="text-[16px] font-bold mb-1">{x.name}</h1>
                        <p className="text-[12px]">
                          <span>{x.date}</span> | <span>{x.time}pm</span>
                        </p>
                      </div>
                    </div>
                    <div className="">
                      <div className="time-status ">
                        <h1 className="text-[16px] font-bold">
                          £<span>{x.amount}</span>
                        </h1>
                        <p className="bg-[#EDF9E6] text-[#2FA500] text-center text-[8px] p-1 rounded-lg uppercase">
                          {x.status}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoggCash;
