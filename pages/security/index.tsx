import { useState } from "react";
import Header from "../../components/general/nav/header";
import SideBar from "../../components/general/sideBar";
import UploadPicture from "../../components/general/uploadPicture";
import NavHead from "../../components/postJobComponents/navHead";
import Image from "next/image";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

const Security = () => {
  const [numberReactInput, setNumberReactInput] = useState<any>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [passwordVisibity, setPasswordVisibity] = useState<boolean>(false);
  const [formData, setFormData] = useState<any>({
    oldPassword: "",
    newPassword: "",
  });
  const handleOnChange = (event: any): void => {
    setFormData((prevData: FormData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (e: any): void => {
    e.preventDefault();
    console.log(formData);
  };

  const formValidate = () => {
    const { oldPassword, newPassword } = formData;
    if (oldPassword === newPassword) {
      return true;
    } else {
      return false;
    }
  };

  const handleVisibility = (e: any) => {
    setPasswordVisibity(!passwordVisibity);
  };
  return (
    <div className="md:grid md:grid-cols-12">
      <SideBar />
      <div className="main md:col-span-10">
        <div className="post-job bg-white h-screen relative">
          <NavHead
            activeStep={activeStep}
            setActiveStep={setActiveStep}
            title="Security"
            type="notab"
          />

          <div className="px-6 md:px-9 pt-5 md:flex text-pTagGrey ">
            <div className="md:w-5/12 mx-auto">
              <div className="">
                <form
                  action=""
                  onSubmit={handleSubmit}
                  className="personalForm"
                >
                  <div className="md:mb-4">
                    <div className="password mb-4">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-1 text-left"
                        id="oldPassword"
                      >
                        <span>Old password</span>
                      </label>
                      <div className="relative">
                        <input
                          className="border border-grey rounded w-full py-2 px-3 text-gray-700 h-[48px]"
                          id="oldPassword"
                          type={passwordVisibity ? "text" : "password"}
                          name="oldPassword"
                          value={formData.oldPassword}
                          onChange={handleOnChange}
                          placeholder="Enter old password"
                        />

                        <div
                          className="absolute top-3 right-2 text-dark"
                          onClick={() => setPasswordVisibity(!passwordVisibity)}
                        >
                          {passwordVisibity ? (
                            <EyeSlashIcon height={23} width={30} />
                          ) : (
                            <EyeIcon height={23} width={30} />
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="password mb-4">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-1 text-left"
                        id="newPassword"
                      >
                        <span>New password</span>
                      </label>
                      <div className="relative">
                        <input
                          className="border border-grey rounded w-full py-2 px-3 text-gray-700 h-[48px]"
                          id="newPassword"
                          type={passwordVisibity ? "text" : "password"}
                          name="newPassword"
                          value={formData.newPassword}
                          onChange={handleOnChange}
                          placeholder="Enter new password"
                        />

                        <div
                          className="absolute top-3 text-dark right-2"
                          onClick={(e) => handleVisibility(e)}
                        >
                          {passwordVisibity ? (
                            <EyeSlashIcon height={23} width={30} />
                          ) : (
                            <EyeIcon height={23} width={30} />
                          )}
                        </div>
                      </div>
                    </div>

                    <button
                      className={`${
                        formValidate() ? "bg-green " : "bg-grey text-pColor"
                      } w-full h-[48px] font-bold py-2 px-4 rounded`}
                    >
                      Sign Up
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Security;
