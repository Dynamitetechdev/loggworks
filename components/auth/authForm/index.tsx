import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

interface AuthFormProp {
  title: string;
  login?: boolean;
  route?: any;
}
interface FormData {
  email?: string;
  phoneNumber?: string;
  password: string;
}
const AuthForm: React.FC<AuthFormProp> = ({ title, login, route }) => {
  const Goto = useRouter();
  const [numberReactInput, setNumberReactInput] = useState<any>(null);
  const [star, setStar] = useState<any[]>(Array(4).fill(""));
  const [inputOption, setInputOption] = useState<string>("phone");
  const [passwordVisibity, setPasswordVisibity] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    email: "",
    phoneNumber: "",
    password: "",
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

    Goto.push(route);
  };

  console.log(numberReactInput);
  return (
    <div className="authForm text-center md:grid grid-cols-7 gap-8 items-center">
      <div className="left max-sm:hidden bg-[url('/assets/bg/bg-auth-testimonials.png')] bg-cover bg-no-repeat bg-center col-span-3 h-screen relative">
        <div className="top_shadow"></div>

        <div className="logo">
          <Image
            src={"/assets/images/Logo.png"}
            width={197}
            height={32}
            alt="client"
            className="mr-2 absolute top-10 left-14"
          />
        </div>
        <div className="testimonial text-[white]  text-left w-10/12 bottom-20 p-5">
          <p className="font-lighter mb-5">
            &quot;Great session! Dani was super helpful. She shared some
            practical advice on how can we go about refining our service
            offerings.&quot;
          </p>
          <div className="rating flex items-center justify-between">
            <div className="client flex items-center ">
              <Image
                src={"/assets/images/client_test.png"}
                height={32}
                width={32}
                alt="client"
                className="mr-2"
              />
              <p>Cameron Williamson</p>
            </div>
            <div className="stars flex items-center">
              {star.map((_: any, i: number) => (
                <Image
                  key={i}
                  src={"/assets/icons/filledStar.svg"}
                  height={14}
                  width={15}
                  alt="icon"
                  className=""
                />
              ))}
              <Image
                src={"/assets/icons/emptyStar.svg"}
                height={14}
                width={15}
                alt="icon"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="right max-sm:flex max-sm:flex-col max-sm:justify-between formInput col-span-4 px-5 md:w-6/12 md:mx-auto md:my-auto ">
        <h1 className="max-sm:mt-12 form_header max-sm:text-left text-2xl md:font-bold text-greyDark md:my-5">
          {title}
        </h1>
        {login && <p className="text-left  md:hidden">Welcome back</p>}

        <div className="max-sm:mt-10">
          <form action="" onSubmit={handleSubmit}>
            <div className="md:mb-4">
              <div className="">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2 text-left"
                  id="username"
                >
                  <span className="flex items-center cursor-pointer">
                    <div
                      className={`mr-1 ${
                        inputOption === "email" && "underline text-green"
                      }`}
                      onClick={() => setInputOption("email")}
                    >
                      Email
                    </div>
                    /
                    <div
                      className={`ml-1 ${
                        inputOption === "phone" && "underline text-green"
                      }`}
                      onClick={() => setInputOption("phone")}
                    >
                      Phone Number
                    </div>
                  </span>
                </label>

                <div className="text-left mb-4">
                  {inputOption === "phone" && (
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
                  )}

                  {inputOption === "email" && (
                    <input
                      className="border border-grey rounded w-full py-2 px-3 text-gray-700 h-[48px]"
                      id="username"
                      type="text"
                      placeholder="ex: abc@gmail.com"
                      name="email"
                      value={formData.email}
                      onChange={handleOnChange}
                    />
                  )}
                </div>
              </div>

              <div className="password mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-1 text-left"
                  id="username"
                >
                  <span>Password</span>
                </label>
                <div className="relative">
                  <input
                    className="border border-grey rounded w-full py-2 px-3 text-gray-700 h-[48px]"
                    id="username"
                    type={passwordVisibity ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleOnChange}
                  />

                  <div
                    className="absolute top-[13px] right-2"
                    onClick={() => setPasswordVisibity(!passwordVisibity)}
                  >
                    {passwordVisibity ? (
                      <EyeSlashIcon width={35} height={19} />
                    ) : (
                      <EyeIcon width={35} height={19} />
                    )}
                  </div>
                </div>
                {login && (
                  <p className="text-right underline text-greyDark mt-2">
                    Forgot Password
                  </p>
                )}
              </div>

              <button className="w-full h-[48px] bg-green  font-bold py-2 px-4 rounded">
                {login ? "Log In" : " Verify phone number"}
              </button>
            </div>
          </form>
        </div>

        <div className="max-sm:my-4 my-8 flex items-center gap-4 before:h-px before:flex-1 before:bg-grey  before:content-[''] after:h-px after:flex-1 after:bg-grey  after:content-['']">
          or
        </div>
        <div className="alternateAuth ">
          <button className="w-full bg-blue font-bold py-2 px-4 rounded h-[48px] flex justify-center items-center">
            <div className="icon">
              <Image
                src={"/assets/icons/facebook.svg"}
                height={20}
                width={20}
                alt="icon"
                className="mr-2"
              />
            </div>
            <span>Sign up with Facebook</span>
          </button>
          <button className="w-full my-4 bg-greyDark font-bold py-2 px-4 rounded h-[48px] flex justify-center items-center">
            <div className="icon">
              <Image
                src={"/assets/icons/apple.svg"}
                height={20}
                width={20}
                alt="icon"
                className="mr-2"
              />
            </div>
            <span>Sign up with Apple</span>
          </button>
          <button className="w-full h-[48px] text-green font-bold py-2 px-4 border border-blue rounded flex justify-center items-center mb-4">
            <div className="icon">
              <Image
                src={"/assets/icons/google.svg"}
                height={20}
                width={20}
                alt="icon"
                className="mr-2"
              />
            </div>
            <span>Sign up with Google</span>
          </button>
        </div>

        <div className="relative top-20">
          {login ? (
            <h4 className="">
              Don’t have an account?{" "}
              <span className="text-green ml-1">
                <Link href={"/signup"}>Sign Up</Link>
              </span>{" "}
            </h4>
          ) : (
            <h4>
              Already have an account?
              <span className="text-green ml-1">
                <Link href={"/login"}>Log in</Link>
              </span>{" "}
            </h4>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
