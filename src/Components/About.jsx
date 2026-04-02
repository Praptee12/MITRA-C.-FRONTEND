import React from "react";

export default function About() {
  return (
    <div className="w-full h-[627px] flex justify-center items-center py-[60px]">
      
     
      <div className="w-[1312px] flex flex-row items-center justify-between gap-[46px]">
        
    
        <div
          className="w-[553px] h-[507px]"
          style={{
            backgroundImage: "url('/images/Rectangle 17.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

       
        <div className="w-[713px] h-[361px] flex flex-col gap-[48px]">
          
         
          <h2 className="text-[48px] leading-[68px] font-bold font-[Inter] text-black">
            Cozy is a minimalist
          </h2>

        
          <p className="text-[20px] leading-[32px] font-[Inter] text-black">
            For create z cozy room, of course, the overall feel of the room must
            be warm. Therefore, the use of beige, pastel or brown colors will
            really help to create this
          </p>

      
          <div className="w-[504px] flex flex-row justify-between">
            
           
            <div className="w-[118px] flex flex-col gap-[17px]">
              <h3 className="text-[32px] leading-[40px] font-bold font-[Inter] text-black">
                750+
              </h3>
              <p className="text-[14px] leading-[22px] font-[Inter] text-black opacity-40 whitespace-pre-line">
                Furniture or home{"\n"}equipment
              </p>
            </div>

          
            <div className="w-[91px] flex flex-col gap-[17px]">
              <h3 className="text-[32px] leading-[40px] font-bold font-[Inter] text-black">
                150+
              </h3>
              <p className="text-[14px] leading-[22px] font-[Inter] text-black opacity-40 whitespace-pre-line">
                Fresh interior{"\n"}design theme
              </p>
            </div>

        
            <div className="w-[121px] flex flex-col gap-[17px]">
              <h3 className="text-[32px] leading-[40px] font-bold font-[Inter] text-black">
                850+
              </h3>
              <p className="text-[14px] leading-[22px] font-[Inter] text-black opacity-40 whitespace-pre-line">
                Happy client more{"\n"}for this
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}