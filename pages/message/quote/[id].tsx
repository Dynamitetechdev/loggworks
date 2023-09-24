import { useState } from "react";
import SideBar from "../../../components/general/sideBar";
import NavHead from "../../../components/postJobComponents/navHead";
import Image from "next/image";
import Link from "next/link";

const Quote = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [quoteRequest, setQuoteRequest] = useState<string | null>(null);
  return (
    <div className="md:grid md:grid-cols-12">
      <SideBar />
      <div className="main md:col-span-10">
        <div className="post-job bg-white min-h-screen relative">
          <NavHead
            activeStep={activeStep}
            setActiveStep={setActiveStep}
            title="Quote"
            type="notab"
          />

          <div className="px-6 md:px-9 pt-5 md:flex text-pTagGrey ">
            <div className="md:w-5/12 mx-auto">
              <div className="invoice">
                <div className="header flex items-center justify-between my-7">
                  <div className="flex items-start">
                    <Image
                      src={"/assets/images/client_test.png"}
                      width={40}
                      height={40}
                      alt="brand_logo min-w-[40px] max-h-[40px]"
                      className="mr-2"
                    />
                    <div className="">
                      <h1 className="text-[14px] font-bold">
                        Dyson Electricals
                      </h1>
                      <div className="text-[10px]">
                        <p>63 Temple Way, Witham On The Hill</p>
                        <p>+449030445766</p>
                        <p>Nanowandrack@gmail.com</p>
                      </div>
                    </div>
                  </div>

                  <div className="">
                    <div className="text-[10px] text-right">
                      <p className="font-bold">Date: 11/11/2021</p>
                      <p>Invoice No</p>
                      <p className="font-bold">000001</p>
                      <p>Due Date</p>
                      <p className="font-bold">11/11/2021</p>
                    </div>
                  </div>
                </div>

                <div className="invoiceData">
                  <table className="w-full text-[10px]">
                    <thead>
                      <tr className="border-y-2 text-right">
                        <th className="text-left  py-2 ">DESCRIPTION</th>
                        <th className=" py-2">RATE</th>
                        <th className=" py-2">QTY</th>
                        <th className=" py-2">DISCOUNT</th>
                        <th className=" py-2">TAX</th>
                        <th className=" py-2">AMOUNT</th>
                      </tr>
                    </thead>

                    <tbody className="text-right">
                      <tr className="border-b ">
                        <td className="text-left py-4">Electrical Insulator</td>
                        <td>£10</td>
                        <td>1</td>
                        <td className="">
                          <span>-£5</span> <br />
                          <span>5%</span>
                        </td>

                        <td className="">
                          <span>-£5</span> <br />
                          <span>5%</span>
                        </td>
                        <td>£95</td>
                      </tr>
                      <tr className="border-b ">
                        <td className="text-left py-4">20KVA generator</td>
                        <td>£10</td>
                        <td>1</td>
                        <td className="">
                          <span>-£5</span> <br />
                          <span>5%</span>
                        </td>

                        <td className="">
                          <span>-£5</span> <br />
                          <span>5%</span>
                        </td>
                        <td>£95</td>
                      </tr>
                      <tr className="border-b ">
                        <td className="text-left py-4">Solar Panel</td>
                        <td>£10</td>
                        <td>1</td>
                        <td className="">
                          <span>-£5</span> <br />
                          <span>5%</span>
                        </td>

                        <td className="">
                          <span>-£5</span> <br />
                          <span>5%</span>
                        </td>
                        <td>£95</td>
                      </tr>
                      <tr className="border-b ">
                        <td className="text-left py-4">Service Fee</td>
                        <td>£5,000</td>
                        <td></td>
                        <td className="">
                          <span>-£500</span> <br />
                          <span>5%</span>
                        </td>

                        <td className="">
                          <span>£225</span> <br />
                          <span>5%</span>
                        </td>
                        <td>£5,355</td>
                      </tr>
                      <tr className="text-light">
                        <td className="text-left py-3 mt-10"></td>
                        <td className="text-left font-bold relative left-[65px]">
                          SUBTOTAL
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td className="font-bold">£5,355</td>
                      </tr>
                      <tr className="text-light ">
                        <td className="text-left py-3s"></td>
                        <td className="font-bold text-left relative left-[65px]">
                          DISCOUNT
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td className="font-bold">£545</td>
                      </tr>
                      <tr className="text-light ">
                        <td className="text-left py-3"></td>
                        <td className="text-left font-bold relative left-[65px]">
                          TAX
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td className="font-bold">£268</td>
                      </tr>

                      <tr className="">
                        <td className="text-left"></td>
                        <td className="text-left relative left-[65px] text-green font-bold">
                          TOTAL
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td className="text-green font-bold">£5,355</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {!quoteRequest && (
                  <div className="button mt-9 flex max-md:justify-center md:justify-end">
                    <button
                      className="bg-white text-dark w-[177px] text-[14px] py-[12px] px-5 rounded mr-2"
                      onClick={() => setQuoteRequest("decline")}
                    >
                      Declined
                    </button>

                    <button
                      className="bg-green text-white w-[177px] text-[14px] py-[12px] px-4 rounded"
                      onClick={() => setQuoteRequest("paid")}
                    >
                      Accept
                    </button>
                  </div>
                )}

                {quoteRequest && (
                  <div className="acceptRequest flex mt-9 justify-end ">
                    <button className="bg-[#FDE8E7] text-dark w-7/12 text-[14px] text-[#F02D16] py-[8px] px-4 rounded mt-2 capitalize">
                      {quoteRequest}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
