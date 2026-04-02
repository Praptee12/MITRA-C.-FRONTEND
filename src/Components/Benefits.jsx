import React from "react";

export default function Benefits() {
  return (
    <div className="w-[1440px] h-[814px] bg-[rgb(246,246,246)] flex justify-center items-center">
      
     
      <div className="w-[1312px] flex flex-row justify-between items-center">
        
       
        <div className="w-[695px] flex flex-col gap-[46px]">
          
      
          <h2 className="text-[48px] leading-[68px] font-bold font-[Inter] text-black">
            Our Services & Benefits
          </h2>

          
          <p className="text-[24px] leading-[34px] font-[Inter] text-black whitespace-pre-line">
            We are working on this connercial service since 2000. Almost{"\n"}
            21 of out business service. And we almost works with 100k+{"\n"}
            organisations and top related furniture and event service{"\n"}
            in USA.
          </p>

         
          <div className="w-[591px] flex flex-row justify-between">
            
            <ul className="text-[24px] list-disc leading-[34px] font-[Inter] text-black whitespace-pre-line">
             <li>
              Interior Startegy
             </li>
             <li>
              Update Designs
             </li>
             <li>
              Event Decoration
             </li>
             
            </ul>

            <ul className="text-[24px] list-disc leading-[34px] font-[Inter] text-black whitespace-pre-line">
            <li>  21 Years Experience</li>
            <li>Creative Designer</li>
             <li> Interior Architecture</li>
            </ul>

          </div>

         
          <div className="w-[199px] h-[62px] flex items-center justify-center gap-[10px] px-[28px] py-[15px] bg-[rgb(240,113,113)]">
              <img  src="/icons/play.svg" alt="star icon" className="w-[24px] h-[24px]"/>
            <span className="text-[20px] leading-[32px] font-[Inter] text-white">
             Watch Intro
              
            </span>
          </div>

        </div>

        <div
          className="w-[559px] h-[647px] bg-[rgb(217,217,217)]"
          style={{
            backgroundImage: "url('/images/Rectangle 26.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

      </div>
    </div>
  );
}