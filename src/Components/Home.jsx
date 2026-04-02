import Container from "../shared/Container";


import React from "react";

export default function Home() {
  return (
    
    <div
      className="w-[1440px] h-[613px] flex justify-center items-center gap-[127px] py-[50px]"
    >
      
      <div
        className="w-[632px] h-[400px] flex flex-col items-start justify-start gap-[46px] ml-[64px]"
      >
       
        <div className="w-[535px] h-[144px]">
          <h1 className="text-[64px] leading-[72px] font-bold font-[Inter] text-[rgb(0,0,0)] whitespace-pre-line">
            Refining the tone{"\n"}of your space
          </h1>
        </div>

        <p className="w-[632px] h-[102px] text-[24px] leading-[34px] font-[Inter] text-[rgb(0,0,0)]">
          A chair with a high back will provide optimum comfort. The fashionable
          design of the chair will allow you to decorate any room at home,
          kitchens, restaurants
        </p>

     
        <div
          className="w-[206px] h-[62px] flex flex-row items-center justify-center gap-[10px] px-[28px] py-[15px] bg-[rgb(240,113,113)]">
              
          <span className="text-[20px] leading-[32px] text-white font-[Inter]">
            Explore now

          </span>
          <div className="h-[24px] w-[24px] ">
            <img  src="/icons/arrow-up-right.svg" alt="arrow" className="w-[24px] h-[24px] "/>
          </div>
          

        
        </div>
      </div>

   
      <div
        className="w-[553px] h-[513px]"
        style={{
          backgroundImage: "url('/images/Rectangle 12.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
    </div>
  );
}