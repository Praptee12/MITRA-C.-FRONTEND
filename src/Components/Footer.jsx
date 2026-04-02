import React from "react";

export default function Footer() {
  return (
    
    <div className="w-[1440px] h-[390px] bg-[rgb(246,246,246)] flex justify-center items-center">
      
      <div className="w-[1312px] flex justify-between items-start">
        
       
        <div className="flex flex-col gap-[38px]">
          <h3 className="text-[32px] leading-[40px] font-bold font-[Inter]">
            COMPANY
          </h3>
          <div className="flex flex-col gap-[13px] text-[16px] leading-[24px] font-[Inter]">
            <p>About</p>
            <p>Press</p>
            <p>Careers</p>
            <p>Contact</p>
          </div>
        </div>

       
        <div className="flex flex-col gap-[38px]">
          <h3 className="text-[32px] leading-[40px] font-bold font-[Inter]">
            DEVELOPERS
          </h3>
          <div className="flex flex-col gap-[13px] text-[16px] leading-[24px] font-[Inter]">
            <p>Documentation</p>
            <p>API Reference</p>
            <p>Changelog</p>
            <p>Status</p>
          </div>
        </div>

       
        <div className="flex flex-col gap-[38px]">
          <h3 className="text-[32px] leading-[40px] font-bold font-[Inter]">
            CONNECT
          </h3>
          <div className="flex flex-col gap-[13px] text-[16px] leading-[24px] font-[Inter]">
            <p>Instagram</p>
            <p>Likedin</p>
            <p>Twitter</p>
          </div>
        </div>

     
        <div className="w-[472px] flex flex-col items-end gap-[31px] text-right">
         
          <div className="flex items-center gap-[10px]">
            <div className="w-[22px] h-[22px] bg-[rgb(240,113,113)]" />
            <span className="text-[24px] font-[Inter]">Cakls</span>
          </div>

         
          <p className="text-[16px] leading-[24px] text-[rgb(150,150,150)] font-[Inter]">
            They key difference between ordinary and special. No matter the
            season, our spaces are as nuanced as the lifestyles they reflect,
            don’t just dream it
          </p>

        </div>

      </div>
    </div>
  );
}