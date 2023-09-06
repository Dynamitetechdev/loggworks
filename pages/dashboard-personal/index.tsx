import { useState } from "react";
import Header from "../../components/general/nav/header";
import SideBar from "../../components/general/sideBar";
import NavHead from "../../components/postJobComponents/navHead";
import Link from "next/link";
import UploadPicture from "../../components/general/uploadPicture";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

interface FormData {
  firstname: string;
  lastname: string;
  email?: string;
  phoneNumber?: string;
  address: string;
}

const Personal = () => {
  const [numberReactInput, setNumberReactInput] = useState<any>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    firstname: "",
    lastname: "",
    email: "",
    phoneNumber: "",
    address: "",
  });
  const handleOnChange = (event: any): void => {
    setFormData((prevData: FormData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
      ["phoneNumber"]: numberReactInput,
    }));
  };

  const handleSubmit = (e: any): void => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className="md:grid md:grid-cols-12">
      <SideBar />
      <div className="main md:col-span-10">
        <div className="post-job bg-white h-screen relative ">
          <NavHead
            activeStep={activeStep}
            setActiveStep={setActiveStep}
            title="Personal"
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
                    <div className="upload">
                      <UploadPicture />
                    </div>
                    <div className="firstname mb-4">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-1 text-left"
                        id="firstname"
                      >
                        <span>Firstname</span>
                      </label>
                      <div className="relative">
                        <input
                          className="border border-grey rounded w-full py-2 px-3 text-gray-700 h-[48px]"
                          id="firstname"
                          type="text"
                          name="firstname"
                          value={formData.firstname}
                          onChange={handleOnChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="lastname mb-4">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-1 text-left"
                        id="lastname"
                      >
                        <span>Lastname</span>
                      </label>
                      <div className="relative">
                        <input
                          className="border border-grey rounded w-full py-2 px-3 text-gray-700 h-[48px]"
                          id="lastname"
                          type="text"
                          name="lastname"
                          value={formData.lastname}
                          onChange={handleOnChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="emailaddress mb-4 text-left">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-1"
                        id="email"
                      >
                        <span>Phone Number</span>
                      </label>
                      <PhoneInput
                        country={"gb"}
                        value={numberReactInput}
                        onChange={(e: any) => setNumberReactInput(e)}
                        inputStyle={{
                          width: "100%",
                          height: "48px",
                          border: "1px solid var(--grey-70, #DFDFDF)",
                        }}
                        inputProps={{
                          name: "phoneNumber",
                        }}
                      />
                    </div>

                    <div className="emailaddress mb-4">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-1 text-left"
                        id="email"
                      >
                        <span>Email address</span>
                      </label>
                      <div className="relative">
                        <input
                          className="border border-grey rounded w-full py-2 px-3 text-gray-700 h-[48px]"
                          id="email"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleOnChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="address mb-4">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-1 text-left"
                        id="address"
                      >
                        <span>Address</span>
                      </label>
                      <div className="relative">
                        <input
                          className="border border-grey rounded w-full py-2 px-3 text-gray-700 h-[48px]"
                          id="address"
                          type="text"
                          name="address"
                          value={formData.address}
                          onChange={handleOnChange}
                          required
                        />
                      </div>
                    </div>
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

export default Personal;
