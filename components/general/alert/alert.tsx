import Image from "next/image";

const Alert: React.FC<{ setIsSent: any }> = ({ setIsSent }) => {
    return ( 
        <div className="alert absolute -bottom-[25%] center">
            <div className="inline-flex items-center justify-between w-[280px] h-[24px] bg-[#D1FADF] border border-[#92DA6C] py-[14px] px-[20px] rounded">
                <Image src={'/assets/icons/alert_check.png'} width={20} height={20} alt="" />
                <p className="text-red text-[16px]">OTP successfully sent</p>
                <Image src={'/assets/icons/alert_close.svg'} width={24} height={24} alt="" onClick={()=>setIsSent(false)} className="cursor-pointer"/>
            </div>
        </div>
     );
}
 
export default Alert;