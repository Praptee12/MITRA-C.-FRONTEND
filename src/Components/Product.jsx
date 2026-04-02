import React from "react";

const ProductCard = ({ title, imagePath }) => {
  return (
    <div className="w-[429px] h-[595px] flex flex-col items-center gap-[24px]">
     
      <img src={imagePath} alt="Product Image" className="w-[429px] h-[419px]" />

     
      <div className="w-full flex flex-col items-center gap-[24px]">
        <h3 className="text-[32px] leading-[40px] font-bold font-[Inter] text-black text-center">
          {title}
        </h3>

       
        <div className="flex gap-[5px]">
          {[...Array(5)].map((_, i) => (
            // <div key={i} className="w-[24px] h-[24px]" />
            <img key={i} src="/icons/star.svg" alt="star icon" className="w-[24px] h-[24px]"/>
          ))}
        </div>

       
        <p className="text-[32px] leading-[40px] font-bold font-[Inter] text-black">
          $35.20
        </p>
      </div>
    </div>
  );
};

export default function Products() {
  return (
    <div className="w-[1440px] h-[1532px] flex flex-col items-center py-[60px] gap-[77px]">
      
   
      <h2 className="text-[48px] leading-[68px] font-bold font-[Inter] text-black text-center">
        Top Sale Products
      </h2>

   
      <div className="w-[1312px] flex flex-wrap justify-between gap-y-[77px]">
        
        <ProductCard title="New Trendy Armchari"  imagePath={"/images/Rectangle 19.png"}/>
        <ProductCard imagePath={"/images/Rectangle 20.png"} title="New Matchspel Armchari" />
        <ProductCard imagePath={"/images/Rectangle 21.png"} title="New Utespelare Armchari" />

        <ProductCard imagePath={"/images/Rectangle 22.png"} title="New Trotten Armchari" />
        <ProductCard imagePath={"/images/Rectangle 23.png"} title="New Markus Armchari" />
        <ProductCard imagePath={"/images/Rectangle 24.png"} title="New Loberget Armchari" />

      </div>
    </div>
  );
}