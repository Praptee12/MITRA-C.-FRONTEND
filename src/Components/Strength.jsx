import React from "react";
import Container from "../shared/Container";

export default function Strengths() {
  return (
   
    <div className="w-full h-[279px] flex justify-center items-center">
      
      <div className="w-[1312px] h-[279px] bg-[rgb(246,246,246)] flex justify-center items-center">
    
        <div className="w-[977px] h-[187px] flex flex-row justify-between items-center">
        
          <div className="relative w-[236px] h-[165px] flex flex-col gap-[22px]">
            <div className="w-[58px] min-h-[50px] bg-white" />
            <img className="w-[30px] h-[30px] absolute left-[14px] top-[10px]" src="/icons/truck.svg" alt="truck icon" />

            <div className="flex flex-col gap-[17px]">
              <h3 className="text-[20px] font-bold leading-[32px] font-[Inter] text-black">
                Fast Delivery on time
              </h3>
              <p className="text-[14px] leading-[22px] font-[Inter] text-black opacity-40 whitespace-pre-line">
                The delivery timeline may vary from{"\n"}3 days to 36 days
              </p>
            </div>
          </div>

         
          <div className="w-[270px] h-[187px] flex flex-col gap-[22px] relative">
            <div className="w-[58px] min-h-[50px] bg-white" />
            <img className="w-[30px] h-[30px] absolute left-[14px] top-[10px]" src="/icons/cast.svg" alt="truck icon" />

            <div className="flex flex-col gap-[17px]">
              <h3 className="text-[20px] font-bold leading-[32px] font-[Inter] text-black">
                Perfect home design studio
              </h3>
              <p className="text-[14px] leading-[22px] font-[Inter] text-black opacity-40 whitespace-pre-line">
                Our experienced assemblers will{"\n"}
                assemble your furniture on site{"\n"}
                within 24 hours
              </p>
            </div>
          </div>

      
          <div className="w-[251px] h-[182px] flex flex-col gap-[17px] relative">
            <div className="w-[58px] min-h-[50px] bg-white" />
            <img className="w-[30px] h-[30px] absolute left-[14px] top-[10px]" src="/icons/box.svg" alt="truck icon" />

            <div className="flex flex-col gap-[17px]">
              <h3 className="text-[20px] font-bold leading-[32px] font-[Inter] text-black">
                Natural polytherine fabric
              </h3>
              <p className="text-[14px] leading-[22px] font-[Inter] text-black opacity-40 whitespace-pre-line">
                We make a deliberate effort to study{"\n"}
                how people use spaces and what{"\n"}
                they do in them
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
   
  );
}
