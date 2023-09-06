import { XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const AddMainCradModal: React.FC<{
  addCardModal: boolean;
  setAddCardModal: any;
  setSampleCard: any;
}> = ({ addCardModal, setAddCardModal, setSampleCard }) => {
  const [formData, setFormData] = useState<any>({
    nameOnCard: "",
    cardNumber: "",
    expiryDate: "",
    CVV: "",
  });
  const handleOnChange = (event: any): void => {
    setFormData((prevData: FormData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };
  const handleSubmit = (e: any): void => {
    e.preventDefault();
    setSampleCard((prevCard: any) => [...prevCard, { ...formData }]);
    setAddCardModal(false);
    setFormData({
      nameOnCard: "",
      cardNumber: "",
      expiryDate: "",
      CVV: "",
    });
  };
  return (
    <div className="relative">
      <div className="fixed modal-container z-50 w-full bg-green md:p-4 top-0 left-0 h-full flex items-center max-sm:items-end justify-center">
        <div className="max-w-3xl mx-auto">
          <div className="relative bg-white md:w-[511px] h-[480px] md:rounded-md rounded-lg shadow dark:bg-gray-700 md:px-8 px-6 py-6 flex flex-col items-center md:justify-between">
            <div className="w-full flex items-center justify-between">
              <h1 className="font-bold text-[20px]">Add a new card</h1>
              <div
                className="max-sm:hidden close cursor-pointer"
                onClick={() => setAddCardModal(false)}
              >
                <XMarkIcon width={24} height={24} />
              </div>
            </div>

            <form action="" onSubmit={handleSubmit} className="text-grey20">
              <div className="flex flex-wrap mb-6">
                <div className="x-3 my-2 md:mb-0 w-full">
                  <label
                    className="capitalize tracking-wide text-md"
                    id="grid-first-name"
                  >
                    Name on Card
                  </label>
                  <input
                    className="appearance-none w-full text-gray-700 border border-red-500 rounded p-4 my-2 leading-tight focus:outline-none focus:bg-white bg-lightWhite border border-grey80"
                    id="grid-first-name"
                    type="text"
                    name="nameOnCard"
                    value={formData.nameOnCard}
                    onChange={handleOnChange}
                    placeholder="Name on Card"
                    required
                  />
                </div>

                <div className="x-3 my-2 md:mb-0 w-full">
                  <label
                    className="capitalize tracking-wide text-md"
                    id="grid-first-name"
                  >
                    Card Number
                  </label>
                  <input
                    className="appearance-none w-full text-gray-700 border border-red-500 rounded p-4 my-2 leading-tight focus:outline-none focus:bg-white bg-lightWhite border border-grey80"
                    id="grid-first-name"
                    type="text"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleOnChange}
                    placeholder="Card Number"
                    required
                  />
                </div>

                <div className="w-full flex items-center justify-between">
                  <div className="x-3 my-2 md:mb-0 w-6/12 pr-3">
                    <label
                      className="capitalize tracking-wide text-md"
                      id="grid-first-name"
                    >
                      Expiry date
                    </label>
                    <input
                      className="appearance-none w-full text-gray-700 border border-red-500 rounded p-4 my-2 leading-tight focus:outline-none focus:bg-white bg-lightWhite border border-grey80"
                      id="grid-first-name"
                      type="text"
                      name="expiryDate"
                      value={formData.expiryDate}
                      onChange={handleOnChange}
                      placeholder="MM/YY"
                      required
                    />
                  </div>
                  <div className="x-3 my-2 md:mb-0 w-6/12 pl-3">
                    <label
                      className="capitalize tracking-wide text-md"
                      id="grid-first-name"
                    >
                      CVV
                    </label>
                    <input
                      className="appearance-none w-full text-gray-700 border border-red-500 rounded p-4 my-2 leading-tight focus:outline-none focus:bg-white bg-lightWhite border border-grey80"
                      id="grid-first-name"
                      type="text"
                      name="CVV"
                      value={formData.CVV}
                      onChange={handleOnChange}
                      placeholder="CVV"
                      required
                    />
                  </div>
                </div>
              </div>

              <button className="relative bg-green text-white w-full h-[48px] font-bold py-2 px-4 rounded ">
                Save Card
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddMainCradModal;
