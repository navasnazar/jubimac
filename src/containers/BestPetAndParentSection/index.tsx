import Image from "next/image";
import React from "react";
import illustration1 from "@/assets/images/BestPetAndParent/illustration1.svg";
import illustration2 from "@/assets/images/BestPetAndParent/illustration2.svg";
import Button from "@/components/Button";
import { crownIllusIcon } from "@/assets/icons/BestPetAndParent";
const BestPetAndParentSection = () => {
  return (
    <section className="py-[30px] px-5 flex flex-col justify-start items-start gap-[30px] lg:flex-row lg:justify-center lg:items-center lg:px-[50px] lg:py-[50px]">
      <div className="relative flex flex-col justify-start items-start lg:w-1/2 lg:items-center">
        <div className="border-x-[6px] border-t-[6px] border-b-[24px] border-[#D5EDFD] shadow-xl lg:w-4/12 lg:-translate-x-16 lg:translate-y-5">
          <Image
            alt="best pet of the month"
            className="max-w-full h-auto aspect-square object-cover lg:w-full lg:h-full"
            src={illustration1}
          />
        </div>
        <div className="border-x-[6px] border-t-[6px] border-b-[24px] border-[#D5EDFD] shadow-xl translate-x-16 rotate-[-10deg] -translate-y-12 lg:w-6/12 ">
          <Image
            alt="best pet of the month"
            className="max-w-full h-auto aspect-square object-cover lg:w-full lg:h-full"
            src={illustration2}
          />
        </div>
      </div>
      <div className="flex flex-col justify-start items-start gap-4 relative lg:w-1/2 lg:gap-6">
        <span className="absolute -top-10 -left-5">{crownIllusIcon}</span>
        <h2 className="text-[70px] leading-[56.62px] font-bold text-[#ECECEC] lg:text-[134px] lg:leading-[107px]">
          BEST PET OF THE <span className="text-[#F4765B]">MONTH</span>
        </h2>
        <p className="font-medium text-[12px] leading-[12.74px] text-[#333333] lg:text-[18px] lg:leading-[24px]">
          See why our customers rave about us! Explore real reviews from pet
          lovers just like you. Join the conversation and share your experience
          with our top-rated products!
        </p>
        <div className="flex flex-row justify-start items-center gap-2">
<Button type="primary" label="Share Now"/>
<Button type="secondary" label="Know More"/>
        </div>
      </div>
    </section>
  );
};

export default BestPetAndParentSection;
