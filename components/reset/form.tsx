import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

interface AuthFormProp {
  title: string;
  newPassword?: boolean;
}
interface FormData {
  email?: string;
  newPassword?: string;
  confirmPassword?: string;
}
const ResetForm: React.FC<AuthFormProp> = ({ title, newPassword }) => {
  const [numberReactInput, setNumberReactInput] = useState<any>(null);

  const [formData, setFormData] = useState<FormData>({
    email: "",
    newPassword: "",
    confirmPassword: "",
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

  console.log(numberReactInput);
  return (
    <div className="authForm text-center h-screen">
      <div className="right flex flex-col formInput px-5 md:w-3/12 md:mx-auto md:my-auto ">
        <div className="logo mx-auto my-10">
          <Image
            src={"/assets/images/Logo-green.png"}
            width={197}
            height={32}
            alt=""
          />
        </div>
        <h1 className="max-sm:mt-12 max-sm:text-center form_header max-sm:text-left text-2xl md:font-bold text-greyDark md:my-5">
          {title}
        </h1>
        <p className="text-center">
          Please enter your email address and we will send you a password reset
          link
        </p>

        <div className="max-sm:mt-10">
          <form action="" onSubmit={handleSubmit} className="mb-10">
            <div className="md:mb-4">
              <div className="password mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-1 text-left"
                  id="email"
                >
                  <span>Email</span>
                </label>
                <div className="relative">
                  <input
                    className="border border-grey rounded w-full py-2 px-3 text-gray-700 h-[48px]"
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleOnChange}
                  />
                </div>
              </div>

              <button className="w-full h-[48px] bg-green  font-bold py-2 px-4 rounded">
                {newPassword ? "Reset password" : "Send reset link"}
              </button>
            </div>
          </form>

          <Link href={"/login"} className="text-center underline text-green">
            Back to login
          </Link>
        </div>

        <p className="absolute bottom-5 left-1/2 transform -translate-x-1/2">
          Privacy policy
        </p>
      </div>
    </div>
  );
};

export default ResetForm;
