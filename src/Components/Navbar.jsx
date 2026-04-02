const Navbar = () => {

  return (
    
    <nav className="flex w-[1440px] h-[84px] justify-center items-center gap-[257px] self-stretch bg-white shadow-[0_4px_4px_0_rgba(217,217,217,0.25)]">
      <div className="flex items-center gap-[10px]">
        <div className="w-[22px] h-[22px] bg-[#f07171]"></div>
        <p className="text-black font-Inter text-[24px] font-[400] leading-[34px] not-italic ">Cakls</p>
      </div>
      <ul className="flex gap-[51px] items-start">
        <li className="text-black font-inter text-sm font-normal leading-[22px]">Products</li>
        <li className="text-black font-inter text-sm font-normal leading-[22px]">Why Us</li>
        <li className="text-black font-inter text-sm font-normal leading-[22px]">Features</li>
        <li className="text-black font-inter text-sm font-normal leading-[22px]">Blog</li>
        <li className="text-black font-inter text-sm font-normal leading-[22px]">Pricing</li>
        <li className="text-black font-inter text-sm font-normal leading-[22px]">Gallery</li>
      </ul> 
      <div  className="flex items-center gap-[33px]">
        <p className="text-black font-inter text-sm font-normal leading-[22px]">Log In</p>
        <div className="flex py-[10px] px-[14px] justify-center items-center gap-[10px] bg-[#f07171]">
          <p className="text-white font-Inter text-[14px]font-[400] leading-[22px] not-italic">Register</p>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;