import Image from "next/image";
import SideBar from "../../components/general/sideBar";
import Header from "../../components/general/nav/header";
import NavHead from "../../components/postJobComponents/navHead";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const FAQ = () => {
  const [activeStep, setActiveStep] = useState(0);

  const faq = [
    {
      id: 1,
      title: "What is Loggworks?",
      content:
        "Sushi!! Most Westerners immediately hear that word and think of raw fish (what you are really talking about is sashimi), but actually the term sushi just refers to the type of vinegar rice used in the traditional Japanese cuisine. The great thing about sushi is that I can easily fill up and satiate my hunger, but I never feel overstuffed.",
    },
    {
      id: 2,
      title: "General Terms & Conditions (GTC)",
      content:
        "Sushi!! Most Westerners immediately hear that word and think of raw fish (what you are really talking about is sashimi), but actually the term sushi just refers to the type of vinegar rice used in the traditional Japanese cuisine. The great thing about sushi is that I can easily fill up and satiate my hunger, but I never feel overstuffed.",
    },
    {
      id: 2,
      title: "Do I have the right to return an item?",
      content:
        "Sushi!! Most Westerners immediately hear that word and think of raw fish (what you are really talking about is sashimi), but actually the term sushi just refers to the type of vinegar rice used in the traditional Japanese cuisine. The great thing about sushi is that I can easily fill up and satiate my hunger, but I never feel overstuffed.",
    },
    {
      id: 2,
      title: "Can I reserve a magazine via Phone or E-mail?",
      content:
        "Sushi!! Most Westerners immediately hear that word and think of raw fish (what you are really talking about is sashimi), but actually the term sushi just refers to the type of vinegar rice used in the traditional Japanese cuisine. The great thing about sushi is that I can easily fill up and satiate my hunger, but I never feel overstuffed.",
    },
    {
      id: 2,
      title: "Why do the prices in the shop sometimes change?",
      content:
        "Sushi!! Most Westerners immediately hear that word and think of raw fish (what you are really talking about is sashimi), but actually the term sushi just refers to the type of vinegar rice used in the traditional Japanese cuisine. The great thing about sushi is that I can easily fill up and satiate my hunger, but I never feel overstuffed.",
    },
    {
      id: 2,
      title: "Can I reserve a magazine via Phone or E-mail?",
      content:
        "Sushi!! Most Westerners immediately hear that word and think of raw fish (what you are really talking about is sashimi), but actually the term sushi just refers to the type of vinegar rice used in the traditional Japanese cuisine. The great thing about sushi is that I can easily fill up and satiate my hunger, but I never feel overstuffed.",
    },
    {
      id: 2,
      title: "Can I change the displayed currency?",
      content:
        "Sushi!! Most Westerners immediately hear that word and think of raw fish (what you are really talking about is sashimi), but actually the term sushi just refers to the type of vinegar rice used in the traditional Japanese cuisine. The great thing about sushi is that I can easily fill up and satiate my hunger, but I never feel overstuffed.",
    },
  ];
  const [openDetail, setOpenDetail] = useState(Array(faq.length).fill(false));
  const handleClick = (index: number) => {
    const newArr = [...openDetail];
    newArr[index] = !newArr[index];
    setOpenDetail(newArr);
  };

  return (
    <div className="md:flex">
      <div className="w-[221px]">
        <SideBar />
      </div>
      <div className="flex-grow">
        <div className="post-job bg-white h-screen relative ">
          <NavHead
            activeStep={activeStep}
            setActiveStep={setActiveStep}
            title="Frequently Asked Questions"
            type="notab"
          />
          <div className="px-6 md:px-9 pt-10 md:flex text-pTagGrey ">
            <div className="md:w-5/12 mx-auto">
              {faq.map((x, index) => (
                <div className="" key={index}>
                  <div
                    className="flex items-center py-4 justify-between border-b border-grey md:px-5 cursor-pointer max-sm:text-[14px]"
                    onClick={() => handleClick(index)}
                  >
                    <p className="font-bold">{x.title}</p>

                    <div className="toggle">
                      <ChevronDownIcon width={20} height={20} />
                    </div>
                  </div>

                  {openDetail[index] && (
                    <p className="text-pTagGrey md:px-5 py-3 pb-8">
                      {x.content}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
