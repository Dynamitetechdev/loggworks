import { useState } from "react";
import SideBar from "../../components/general/sideBar";
import Header from "../../components/general/nav/header";
import NavHead from "../../components/postJobComponents/navHead";
import Image from "next/image";
import { PlusIcon } from "@heroicons/react/24/outline";
import PaymentMain from "../../components/paymentComponent/paymentMain";
const PaymentCard = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [addCardModal, setAddCardModal] = useState(true);
  return <PaymentMain />;
};

export default PaymentCard;
