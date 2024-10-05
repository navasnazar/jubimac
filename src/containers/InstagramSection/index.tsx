import Image from "next/image";
import Link from "next/link";
import React from "react";
import instaIllus1 from "@/assets/images/Instagram/instaIllus1.svg";
import instaIllus2 from "@/assets/images/Instagram/instaIllus2.svg";
import instaIllus3 from "@/assets/images/Instagram/instaIllus3.svg";
const InstagramSection = () => {
  return (
    <section className="flex flex-col justify-start gap-1">
      <h5 className="font-manrope text-[18px] text-center font-medium text-black">
        CarePlus on instagram
      </h5>
      <Link
        href={""}
        className="text-[14px] font-manrope font-medium text-center text-[#333333]"
      >
        @careplus_
      </Link>
      <div className="mt-3 w-full flex flex-row">
        <div className="w-1/3">
          <Image src={instaIllus1} alt="instagram" className="object-cover w-full h-full" />
        </div>
        <div className="w-1/3">
          <Image src={instaIllus2} alt="instagram" className="object-cover w-full h-full" />
        </div>
        <div className="w-1/3">
          <Image src={instaIllus3} alt="instagram" className="object-cover w-full h-full" />
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
