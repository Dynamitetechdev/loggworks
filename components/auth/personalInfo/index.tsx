import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Testimonial from "../testimonial";
import UploadPicture from "../../general/uploadPicture";

interface AuthFormProp {
  title: string;
  login?: boolean;
}
interface FormData {
  firstname: string;
  lastname: string;
  email?: string;
  phoneNumber?: string;
  address: string;
}

const PersonalInfoForm: React.FC<AuthFormProp> = ({ title, login }) => {
  const [numberReactInput, setNumberReactInput] = useState<any>(null);

  const [star, setStar] = useState<any[]>(Array(4).fill(""));
  const [inputOption, setInputOption] = useState<string>("phone");
  const [formData, setFormData] = useState<FormData>({
    firstname: "",
    lastname: "",
    email: "",
    phoneNumber: "",
    address: "",
  });

  const formValidate = () => {
    const { firstname, lastname, email, phoneNumber, address } = formData;
    if ((firstname && lastname && email) || (phoneNumber && address)) {
      return true;
    } else {
      return false;
    }
  };
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

  console.log(numberReactInput);

  return (
    <div className="authForm text-center md:grid grid-cols-7 gap-8 items-center">
      <Testimonial />

      <div className="right max-sm:flex max-sm:flex-col max-sm:justify-between formInput col-span-4 px-5 md:w-6/12 md:mx-auto md:my-auto ">
        <h1 className="max-sm:mt-12 form_header max-sm:font-bold text-2xl md:font-bold text-greyDark md:mt-5 max-sm:text-center">
          {title}
        </h1>
        <p className="text-center mb-5">We would love to know you</p>

        <div className="">
          <form action="" onSubmit={handleSubmit} className="personalForm">
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
              {inputOption == "phone" && (
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
              )}

              {inputOption == "email" && (
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
              )}

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
              <div className="relative mt-10">
                <h4 className="leading-8 mb-6">
                  By clicking &quot;Continue&quot;, you agree to our{" "}
                  <span className="text-green ml-1 underline">
                    <Link href={"/signup"}>Terms</Link>
                  </span>{" "}
                  and acknowledge our{" "}
                  <span className="text-green ml-1 underline">
                    <Link href={"/signup"}>Privacy policy</Link>
                  </span>{" "}
                </h4>
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
  );
};

export default PersonalInfoForm;
