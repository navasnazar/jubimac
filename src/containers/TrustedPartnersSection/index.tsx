import Image from "next/image";
import React from "react";
import luminousLogo from "@/assets/images/TrustedPartners/luminous.svg";
import capsule from "@/assets/images/TrustedPartners/capsule.svg";
import hourGlass from "@/assets/images/TrustedPartners/hourGlass.svg";
import lightBox from "@/assets/images/TrustedPartners/lightBox.svg";
import spherule from "@/assets/images/TrustedPartners/spherule.svg";
import commandR from "@/assets/images/TrustedPartners/commandR.svg";
const TrustedPartnersSection = () => {
  return (
    <section className="py-[30px] px-5 flex flex-col justify-start items-start gap-5">
      <h5 className="text-[20px] text-black font-manrope font-medium">
        Trusted By Companies
      </h5>
      <div className="w-full flex flex-row justify-between items-start flex-wrap gap-6">
        <div>
          <Image alt="luminous logo" src={luminousLogo} />
        </div>
        <div>
          <Image alt="hour glass logo" src={hourGlass} />
        </div>
        <div>
          <Image alt="capsule logo" src={capsule} />
        </div>
        <div>
          <Image alt="lightbox logo" src={lightBox} />
        </div>
        <div>
          <Image alt="shperule logo" src={spherule} />
        </div>
        <div>
          <Image alt="command logo" src={commandR} />
        </div>
      </div>
    </section>
  );
};

export default TrustedPartnersSection;
