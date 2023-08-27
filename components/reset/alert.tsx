import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

interface AuthFormProp {
  title: string;
  sub?: string;
  emailSent?: boolean;
  image: string;
}
interface FormData {
  email?: string;
  newPassword?: string;
  confirmPassword?: string;
}
const AlertBanner: React.FC<AuthFormProp> = ({
  title,
  emailSent,
  sub,
  image,
}) => {
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

        <div className="mx-auto">
          <Image src={image} width={162} height={114} alt="" />
        </div>
        <h1 className="max-sm:mt-12 max-sm:mb-8 max-sm:text-center form_header max-sm:text-left text-2xl font-bold text-greyDark md:my-5">
          {title}
        </h1>
        <p className="text-center">{sub}</p>

        {emailSent && (
          <p className="text-center  my-5 text-1xl">
            Still have issues resetting your password?{" "}
            <Link href={""} className="text-green">
              Contact Support
            </Link>
          </p>
        )}
        {!emailSent ? (
          <Link href={"/login"}>
            <button className="w-full h-[48px] bg-green my-5 font-bold py-2 px-4 rounded">
              Back to login
            </button>
          </Link>
        ) : (
          <Link href={"/login"} className="text-center underline text-green">
            Back to login
          </Link>
        )}

        <p className="absolute bottom-5 left-1/2 transform -translate-x-1/2">
          Privacy policy
        </p>
      </div>
    </div>
  );
};

export default AlertBanner;
