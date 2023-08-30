import Image from "next/image";
import { useState } from "react";
import "react-phone-input-2/lib/style.css";
import AuthForm from "../../components/auth/authForm";
const SignUp = () => {
  const [phoneNumber, SetPhoneNumer] = useState<any>(null);

  const [star, setStar] = useState<any[]>(Array(4).fill(""));
  return <AuthForm title="Join Loggworks for free" route={"/verify"} />;
};

export default SignUp;
