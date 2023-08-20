import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import AuthForm from "../../components/authForm";
const SignUp = () => {
  const [phoneNumber, SetPhoneNumer] = useState<any>(null);

  const [star, setStar] = useState<any[]>(Array(4).fill(""));
  return <AuthForm title="Join Loggworks for free" />;
};

export default SignUp;
