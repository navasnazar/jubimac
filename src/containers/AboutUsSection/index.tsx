import Image from "next/image";
import React from "react";
import aboutUs from "@/assets/images/aboutUs/aboutUs.svg";
import { listIcon, rightArrowWhiteIcon } from "@/assets/icons/aboutUs";
import Button from "@/components/Button";
import Link from "next/link";
import { externalLinkIcon } from "@/assets/icons/FeaturedProducts";

const AboutUsSection = () => {
  return (
    <section className="w-full py-[30px] px-5 flex flex-col justify-start items-start gap-[18px] lg:flex-row lg:gap-[60px] lg:py-[50px] lg:px-[50px]">
      <div className="w-full h-full rounded-[10px] flex justify-center items-center">
        <Image
          alt="about us image"
          className="lg:w-[85%] w-full h-full object-cover aspect-square rounded-[10px]"
          src={aboutUs}
        />
      </div>
      <div  className="w-full flex flex-col justify-start items-start gap-[18px]">
        <p className="hidden font-manrope font-medium text-[14px] leading-[50px] lg:inline-block">About Us</p>
      <h2 className="text-[22px] font-medium text-[#3F3B57] lg:text-[34px] lg:leading-[50px]">
        Are you a new pet parent looking for the{" "} 
        <span className="relative">
          best world class care{" "}
        
        </span>
        for your pets?
      </h2>
      <p className="text-[16px] font-medium text-[#333333]">
        Our journey began with a simple idea to create a place where pet{" "}
        <span className="font-bold"> owners could find everything</span> they
        need to care for their furry companions, all in one convenient location.
        Its been more than 10 years we are providing
        <span className="font-bold"> best in class solutions</span> for pets and
        pet parents.
      </p>
      <ul className="w-full flex flex-col justify-start   items-start gap-3 list-inside list-image-[url(/assets/Icons/listIcon2.svg)] lg:flex-row lg:justify-around lg:flex-wrap">
        <li className="text-[16px] text-[#333333] font-medium w-full flex flex-row justify-start items-center gap-6 lg:w-1/3 ">
          <span>{listIcon}</span>
          Pet care services
        </li>
        <li className="text-[16px] text-[#333333] font-medium w-full flex flex-row justify-start items-center gap-6 lg:w-1/3">
          <span>{listIcon}</span>
          Breeding
        </li>
        <li className="text-[16px] text-[#333333] font-medium w-full flex flex-row justify-start items-center gap-6 lg:w-1/3">
          <span>{listIcon}</span>
          Boarding services
        </li>
        <li className="text-[16px] text-[#333333] font-medium w-full flex flex-row justify-start items-center gap-6 lg:w-1/3">
          <span>{listIcon}</span> 
          Breed/pet selection
        </li>
        <li className="text-[16px] text-[#333333] font-medium w-full flex flex-row justify-start items-center gap-6 lg:w-1/3">
          <span>{listIcon}</span>
          Premium products only
        </li>
        <li className="text-[16px] text-[#333333] font-medium w-full flex flex-row justify-start items-center gap-6 lg:w-1/3">
          <span>{listIcon}</span>
          Pet relocation & transportation
        </li>
      </ul>
      <h2 className="font-manrope text-[14px] text-[#333333] font-medium lg:hidden">
        About Us
      </h2>
      <Link href={""} className="hidden font-manrope text-[14px] text-[#333333] font-medium lg:inline-block underline">
        About Us {externalLinkIcon}
      </Link>
      <div className="bg-white rounded-[5px] w-full py-4 px-[14px] flex flex-row justify-between items-center gap-7">
        <div className="flex-1 h-full flex flex-row justify-between gap-1 items-center">
          <div className="flex flex-col justify-start items-start gap-1">
            <p className="font-manrope font-medium text-[22px] lg:font-bold lg:text-[33px] leading-[40px]">₹2M</p>
            <p className="font-manrope font-medium text-[10px] text-[#333333] lg:text-[14px]">
              Pet products & services sold.
            </p>
          </div>
          <div className="h-[40px] w-0.5 bg-black/20 " />
          <div className="flex flex-col justify-start items-start gap-1">
            <p className="font-manrope font-medium text-[22px] lg:font-bold lg:text-[33px] leading-[40px]">4.5</p>
            <p className="font-manrope font-medium text-[10px] text-[#333333] lg:text-[14px]">
              Our score rating
            </p>
          </div>
        </div>
        <Link href="" className="bg-[#F4765B] p-3  rounded-[5px]">
          <span>{rightArrowWhiteIcon}</span>
        </Link>
      </div>
      </div>
    
    </section>
  );
};

export default AboutUsSection;
