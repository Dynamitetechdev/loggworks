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
        "Loggworks is a platform connecting Home service consumers (Homeowners, Tenants and Property managers) to Service Professionals.",
    },
    {
      id: 2,
      title: "How does Loggworks work?",
      content:
        "Sushi!! Most Westerners immediately hear that word and think of raw fish (what you are really talking about is sashimi), but actually the term sushi just refers to the type of vinegar rice used in the traditional Japanese cuisine. The great thing about sushi is that I can easily fill up and satiate my hunger, but I never feel overstuffed.",
    },
    {
      id: 3,
      title: "Why should I use Loggworks?",
      content:
        "Loggworks protects both payment and privacy. Your funds are held in our escrow infastructure powered by MangoPay when you use our payment protection. When the job is finished to your liking, you can release payments within three working days by clicking the complete button in your booking section. With our privacy protection, you can communicate in the app or share your contact information. Loggworks does not guarantee any jobs booked outside of the platform.",
    },
    {
      id: 4,
      title: "Do you vet service professionals who sign-up to loggworks?",
      content:
        "Do you vet service providers who sign up to Loggworks? Service providers who sign up to Loggworks are vetted through a scheme called the Self- Employed Quality Control Scheme(SEQCS). Loggworks SEQCS is a scheme that involves the use of information service companies, trade standard organisations, and relevant regulatory bodies in the service industry to vet service professionals who are self - employed individuals on our platform.These organisations work with other technologies in order to minimise the risk posed by rogue service providers to property owners, property managers, and tenants.This scheme ensures that these self - employed individuals or businesses have the right licences and certifications to operate in their respective fields of service before they can use our platform. This scheme, among other things, prevents fraud, helps in identifying quality service providers, and ensures that self - employed individuals or businesses are recognised for their quality work.",
    },
    {
      id: 5,
      title: "How can you guarantee the quality of a service profession's work?",
      content:
        "The service providers on Loggworks operate as independent businesses and do not work for Loggworks, so the quality of their work cannot be guaranteed. We can only certify that every service professionals is vetted through our self-employed quality control scheme (SEQCS) and agrees to abide by our code of conduct (Href) before they are allowed on our app or website. It is advisable to read the reviews, comments, and ratings left by previous customers about the service provider's quality of work, reliability, and value for money. By doing so, you will be able to make an informed decision.",
    },
    {
      id: 5,
      title: "Do you disable service professionals' accounts?",
      content:
        "Sushi!! Most Westerners immediately hear that word and think of raw fish (what you are really talking about is sashimi), but actually the term sushi just refers to the type of vinegar rice used in the traditional Japanese cuisine. The great thing about sushi is that I can easily fill up and satiate my hunger, but I never feel overstuffed.",
    },
    {
      id: 6,
      title: "How do I choose the most reliable service professional?",
      content:
        "Our search feature is equipped with options for better decision-making when choosing a service provider. The most reliable service provider is selected based on the following criteria: ratings, level, reviews, and how long they have been a member of Loggworks. /n  Recommendations are given based on our transparent monitoring system and the KPIs used in rating the service providers. These KPIs are points that are earned by the service providers to level up, the unbiased reviews, and the ratings that were given by the consumers. With these KPIs, you are now in a position to select the most reliable service provider for the job.",
    },
    {
      id: 7,
      title: "How many service professionals can I contact before I book one?",
      content:
        "With loggworks you can contact as many service professionals as you want, depending on your preferences and needs.",
    },
    {
      id: 8,
      title: "Can I make changes or update the service I have booked??",
      content:
        "Bookings can only be updated or changed 24 hours before the appointment date with the service provider. To cancel a booking, click on booking> upcoming, then reschedule or cancel",
    },
    {
      id: 9,
      title: "Should I rate the service professional after the job is completed?",
      content:
        "Yes, it is important that you leave a rating after the job has been completed. This helps us recommend reliable service providers to existing and prospective customers. Additionally, it helps other consumers make informed decisions while searching for a reliable search provider. To leave a rating, click on booking > past booking, then click rate the job of the service provider. /n NOTE: Once you click on completed, a prompt page pops up for ratings, reviews, and a survey.It is important that you complete it so as to serve you better.",
    },
    {
      id: 10,
      title: "How do I share a service professional profile that I like with others?",
      content:
        "You can share the profile of your preferred service providers with anyone by viewing their profile, then clicking the share button to share on any platform.",
    },
    {
      id: 11,
      title: "Is my payment protected?",
      content:
        "Yes, payments are protected via the MangoPay escrow infrastructure.",
    },
    {
      id: 12,
      title: "What if there’s a dispute?",
      content:
        "Dispute resolution is completed after 14 days of investigation.",
    },
    {
      id: 13,
      title: "What if I have a dispute with a service provider after completing a job?",
      content:
        "We would advise appropriately upon the completion of our investigation.",
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
      <div className="flex-grow overflow-x-hidden">
        <div className="post-job bg-white relative ">
          <NavHead
            activeStep={activeStep}
            setActiveStep={setActiveStep}
            title="Frequently Asked Questions"
            type="notab"
          />
          <div className="px-6 md:px-9 pt-10 md:flex text-pTagGrey ">
            <div className="md:w-6/12 max-w-[650px] mx-auto">
              {faq.map((x, index) => (
                <div className="" key={index}>
                  <div
                    className="flex w-full items-center py-4 justify-between border-b border-grey md:px-5 cursor-pointer max-sm:text-[14px]"
                    onClick={() => handleClick(index)}
                  >
                    <p className="font-bold">{x.title}</p>

                    <div className="toggle ml-3">
                      <ChevronDownIcon width={16} height={16} />
                    </div>
                  </div>

                  {openDetail[index] && (
                    <p className="text-pTagGrey md:px-5 py-3 pb-8 ">
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
