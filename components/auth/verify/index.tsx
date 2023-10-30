import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Testimonial from "../testimonial";
import { useRouter } from "next/router";
import Alert from "../../general/alert/alert";

interface AuthFormProp {
  title: string;
  login?: boolean;
}
interface FormData {
  phoneNumber?: string;
  FACode: any;
}
let currentInputIndex: number;
const VerifyForm: React.FC<AuthFormProp> = ({ title }) => {
  const Goto = useRouter();
  const [verifyCode, setVerifyCode] = useState<string[]>(new Array(5).fill(""));
  const [editNumber, setEditNumber] = useState<boolean>(false);
  const [timer, setTimer] = useState<number>(60);
  const [isSent, setIsSent] = useState(true)
  const [phoneNumber, setPhoneNumber] = useState("+44 7911 123456");
  const [formData, setFormData] = useState<FormData>({
    phoneNumber,
    FACode: verifyCode.join(""),
  });

  const handleSubmit = (e: any): void => {
    e.preventDefault();
    console.log(formData);

    Goto.push("/personal");
  };

  const [activeInputIndex, setActiveInputIndex] = useState<number>(0);

  const inputRef = useRef<HTMLInputElement>(null);
  const handleOnChange = (event: any): void => {
    const { value } = event.target;
    const newVal = [...verifyCode];
    newVal[currentInputIndex] = value.substring(value.length - 1);
    if (!value) setActiveInputIndex(currentInputIndex - 1);
    else setActiveInputIndex(currentInputIndex + 1);
    setVerifyCode(newVal);
    setFormData({ FACode: newVal.join("") });
  };
  console.log("activeInputIndex", activeInputIndex);
  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    const { key } = e;
    currentInputIndex = index;
    if (key === "Backspace") setActiveInputIndex(currentInputIndex - 1);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTime) => (prevTime === 0 ? 60 : prevTime - 1));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="authForm text-center md:grid grid-cols-7 gap-8 items-center">
      <Testimonial />

      <div className="right max-sm:flex max-sm:flex-col max-sm:justify-between formInput col-span-4 px-5 md:w-6/12 md:mx-auto md:my-auto relative">
        <div className="md:hidden mobile_nav absolute top-10">
          <Image
            src={"/assets/icons/navBack.svg"}
            width={24}
            height={24}
            alt=""
          />
        </div>
        <h1 className="max-sm:mt-20 form_header max-sm:text-center text-3xl font-bold text-greyDark ">
          {title}
        </h1>
        <div className="">
          <form action="" onSubmit={handleSubmit}>
            <h3 className="text-pColor my-1">
              Enter the verification number sent to
            </h3>

            <div className="user_phone flex justify-between items-center">
              {editNumber ? (
                <input
                  type="text"
                  placeholder=""
                  name="phoneNumber"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="w-full text-center focus:outline-none pl-6"
                />
              ) : (
                <h3 className="text-center w-full">{phoneNumber}</h3>
              )}

              <div
                className="text-green cursor-pointer capitalize"
                onClick={() => setEditNumber(!editNumber)}
              >
                {editNumber ? "done" : "edit"}
              </div>
            </div>
            <div className="mt-10">
              <div className="flex justify-between items-center mb-3">
                {verifyCode.map((_, index) => (
                  <input
                    ref={index === activeInputIndex ? inputRef : null}
                    key={index}
                    className="w-[66px] h-[48px] border rounded bg-transparent outline-none text-center font-semibold text-xl spin-button-none border-normalGrey focus:border-green focus:text-gray-700 text-gray-400 transition max-sm:w-[48px] max-sm:rounded-lg bg-[#F9F9F9]"
                    type="password"
                    name="FACode"
                    value={verifyCode[index]}
                    maxLength={1}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    onChange={(e) => handleOnChange(e)}
                    required
                  />
                ))}
              </div>

              <div className="resendCount">
                <h3 className="text-left">
                  {timer}
                  <span>s</span>
                </h3>
              </div>
            </div>

            <p className="text-red text-left mt-2 mb-4">Wrong 2fa code, please enter correct code.</p>


            <h4 className="flex flex-col max-sm:mt-10 mb-8">
              Didn’t get the OTP?
              <span className="text-green ml-1">
                <Link href={""}>Resend OTP</Link>
              </span>{" "}
            </h4>
            <div className="md:mb-4">
              {formData.FACode?.length == 5 ? (
                <button className="w-full h-[48px] bg-green  font-bold py-2 px-4 rounded">
                  Verify OTP
                </button>
              ) : (
                <button className="w-full h-[48px] text-[#000000] bg-normalGrey font-bold py-2 px-4 rounded">
                  Verify OTP
                </button>
              )}
            </div>
          </form>

         
        </div>

        {
          isSent && <Alert setIsSent={setIsSent} />
        }
       
      </div>
    </div>
  );
};

export default VerifyForm;
