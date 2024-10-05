"use client";
import { RightArrowIcon } from "@/assets/icons/Components/Button";
import Button from "@/components/Button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import React, { useRef } from "react";
import illustration1 from "@/assets/images/Cta/illustration1.svg";
import {
  dogBoneSvg,
  happyPetsIcon,
  positiveReinforcementIcon,
  positiveReviewsIcon,
  qualityAndSafety,
  recoveryHealthIcon,
} from "@/assets/icons/Cta";
import { RightArrowListIcon } from "@/assets/icons/List";
import dogOnLeash from "@/assets/images/Cta/dogOnLeash.svg";
import aggressiveBehaviour from "@/assets/images/Cta/aggressiveBehaviour.svg";
import destructiveBehaviour from "@/assets/images/Cta/destructiveBehaviour.svg";
import puppyProblems from "@/assets/images/Cta/puppyProblems.svg";
const CtaSection = () => {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.fromTo(
      "#cta-section-inner",
      {
        translateX: 0,
      },
      {
        translateX: "-100vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: "#cta",
          start: "top top",
          end: "3000 bottom",
          scrub: 1,
          pin: true,
        },
      }
    );
  }, []);
  return (
    <section id="cta-section-outer" className="cta-section-outer">
      <div id="cta" className="cta">
        <div id="cta-section-inner" className="cta-section-inner">
          <div className="cta-section flex flex-col justify-start items-center py-[20px] px-5 w-1/2 gap-[20px]">
            <div className="flex flex-col justify-start items-center gap-2">
              <h2 className="font-manrope font-medium text-[24px] text-center text-[#222222] uppercase">
                Are you a concerned pet parent?
              </h2>
              <p className="font-manrope font-normal text-[12px] text-[#333333] text-center">
                Caring for a pet is no small task. Your pet is a lovable
                companion for your family, your kids, and you.
              </p>
              <div className="h-0.5 w-full mt-[8px] flex">
                <div className="w-1/2 h-full bg-[#FFCC00]" />
                <div className="w-1/2 h-full bg-[#EDEDED]" />
              </div>
            </div>
            <div className="flex flex-col justify-start items-center  gap-[20px] lg:flex-row">
              <div className="flex flex-row justify-start items-start w-full gap-[22px]">
                <div className="w-1/2 flex flex-col justify-start items-start gap-[22px]">
                  <div className="w-full h-1/2 relative">
                    <p className="absolute top-0 p-2 right-0 text-center w-1/2 font-manrope font-medium text-[12px] leading-[17px] text-white ">
                      Dogs pulls on leash
                    </p>
                    <Image
                      alt="Dog pull leash"
                      src={dogOnLeash}
                      className="object-contain max-w-full h-auto rounded-[5px]"
                    />
                  </div>
                  <div className="w-full h-1/2 relative">
                    <p className="absolute bottom-0 p-2 left-0 text-center w-1/2 font-manrope font-medium text-[12px] leading-[17px] text-white ">
                      Aggressive Behaviour
                    </p>

                    <Image
                      alt="Dog pull leash"
                      src={aggressiveBehaviour}
                      className="object-contain max-w-full h-auto rounded-[5px]"
                    />
                  </div>
                </div>
                <div className="w-1/2 flex flex-col justify-start items-start gap-[22px] my-[22px]">
                  <div className="w-full h-1/2 relative">
                    <p className="absolute top-0 p-2 right-0 text-center w-1/2 font-manrope font-medium text-[12px] leading-[17px] text-white ">
                      Destructive Behaviour
                    </p>

                    <Image
                      alt="Dog pull leash"
                      src={destructiveBehaviour}
                      className="object-contain max-w-full h-auto rounded-[5px]"
                    />
                  </div>
                  <div className="w-full h-1/2 relative">
                    <p className="absolute top-0 p-2 left-0 text-center w-1/2 font-manrope font-medium text-[12px] leading-[17px] text-white ">
                      Puppy Problems
                    </p>

                    <Image
                      alt="Dog pull leash"
                      src={puppyProblems}
                      className="object-contain max-w-full h-auto rounded-[5px]"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full  flex flex-col justify-start items-start gap-6">
                <h3 className="font-manrope font-bold text-color-primary-1 text-[18px]">
                  Grow a happy healthy and obedient companion for you and your
                  kids.
                </h3>
                <ul className="flex flex-col justify-start items-start gap-[12px] list-image-[url(/assets/Icons/ListIcon.svg)] list-inside">
                  <li>
                    70% of the pet parents are unaware of choosing a pet for
                    them.
                  </li>
                  <li>Most of them worried about their pet's health.</li>
                  <li>Many of the pets develop aggression and bad habits.</li>
                </ul>
                <div className="w-full flex flex-row justify-around items-start ">
                  <Button
                    type="primary"
                    label="Get Help Now"
                    textSize={"14px"}
                  />
                  <Button
                    type="secondary"
                    label="Book a call"
                    textSize={"14px"}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="cta-section flex flex-col justify-start items-center py-[60px] px-5 w-1/2 gap-[32px] bg-[#FFFFFF] lg:hidden">
            <div className="flex flex-col justify-start items-center gap-2">
              <h2 className="font-manrope font-medium text-[24px] text-center text-[#222222] uppercase">
                Why Choose Us
              </h2>
              <p className="font-manrope font-normal text-[12px] text-[#999999] text-center">
                Our food does not contain artificial preservatives, so it must
                be kept frozen to avoid expiration ahead of time.
              </p>
              <div className="h-0.5 w-full mt-[14px] flex">
                <div className="w-1/2 h-full bg-[#EDEDED]" />
                <div className="w-1/2 h-full bg-[#FFCC00]" />
              </div>
            </div>
            <ul className="w-full  flex flex-col justify-start items-start gap-[30px]">
              <li className="w-full flex flex-row justify-end items-start gap-6">
                <div className="flex-1 flex flex-col justify-start items-end gap-2">
                  <h3 className="text-right uppercase font-rubik font-medium text-[18px]  text-[#222222]">
                    World-class service:
                  </h3>
                  <p className="text-right font-rubik font-normal text-[14px]  text-[#999999]">
                    We assure you quality services. We have trained & handled
                    100 show winning dogs.
                  </p>
                </div>
                <span>{dogBoneSvg}</span>
              </li>
              <li className="w-full flex flex-row justify-end items-start gap-6">
                <div className="flex-1 flex flex-col justify-start items-end gap-2">
                  <h3 className="text-right uppercase font-rubik font-medium text-[18px]  text-[#222222]">
                    Recovery = Health
                  </h3>
                  <p className="text-right font-rubik font-normal text-[14px]  text-[#999999]">
                    Our focus is not just on foods and treats. Recovery is the
                    key.
                  </p>
                </div>
                <span>{recoveryHealthIcon}</span>
              </li>
              <li className="w-full flex flex-row justify-end items-start gap-6">
                <div className="flex-1 flex flex-col justify-start items-end gap-2">
                  <h3 className="text-right uppercase font-rubik font-medium text-[18px]  text-[#222222]">
                    Postive Reinforcement Training:
                  </h3>
                  <p className="text-right font-rubik font-normal text-[14px]  text-[#999999]">
                    We find the the strength of your dog. We use no shock
                    collars and clickers.
                  </p>
                </div>
                <span>{positiveReinforcementIcon}</span>
              </li>
              <li className="w-full flex flex-row justify-end items-start gap-6">
                <div className="flex-1 flex flex-col justify-start items-end gap-2">
                  <h3 className="text-right uppercase font-rubik font-medium text-[18px]  text-[#222222]">
                    Quality & Safety
                  </h3>
                  <p className="text-right font-rubik font-normal text-[14px]  text-[#999999]">
                    We assure you quality services. We have trained & handled
                    100 show winning dogs.
                  </p>
                </div>
                <span>{qualityAndSafety}</span>
              </li>
              <li className="w-full flex flex-row justify-end items-start gap-6">
                <div className="flex-1 flex flex-col justify-start items-end gap-2">
                  <h3 className="text-right uppercase font-rubik font-medium text-[18px]  text-[#222222]">
                    Happy Pets
                  </h3>
                  <p className="text-right font-rubik font-normal text-[14px]  text-[#999999]">
                    We helped more than 1000+ pet parents to grow happy pets.
                  </p>
                </div>
                <span>{happyPetsIcon}</span>
              </li>
              <li className="w-full flex flex-row justify-end items-start gap-6">
                <div className="flex-1 flex flex-col justify-start items-end gap-2">
                  <h3 className="text-right uppercase font-rubik font-medium text-[18px]  text-[#222222]">
                    Positive Reviews
                  </h3>
                  <p className="text-right font-rubik font-normal text-[14px]  text-[#999999]">
                    We have excellent reviews from 2000+ customers.
                  </p>
                </div>
                <span>{positiveReviewsIcon}</span>
              </li>
            </ul>
          </div>
          <div className="cta-section max-lg:hidden">
            <div className="w-full flex flex-col justify-start items-center gap-6">
               <h2 className="font-rubik font-medium text-[34px] uppercase text-[#222222]">
                 Why Choose Us
             </h2>
             <p className="font-rubik font-normal text-[14px] text-[#999999]">
               Our food does not contain artificial preservatives, so it must
               be kept frozen to avoid expiration ahead of time.
             </p>
             <div className="h-0.5 w-3/5 flex"><div className="w-1/2 h-full  bg-[#FFCC00]"/><div className="bg-[#EDEDED] w-1/2 h-full"/></div>
           </div>
           <div className="w-full h-full flex flex-row justify-start items-center relative">
             <ul className="flex flex-col justify-start items-start gap-[50px] z-10 w-1/3">
               <li className="ml-[80px] w-full  flex flex-row justify-end items-center gap-6">
                 <div className="flex-1 flex flex-col justify-start items-end">
                   <h3 className="text-right uppercase font-rubik font-medium text-[20px]  text-[#222222] w-full whitespace-nowrap">
                     World-class service:
                   </h3>
                   <p className="text-right font-rubik font-normal text-[14px]  text-[#999999] w-4/5">
                     Our team is well trained and been serving globally
                   </p>
                 </div>
                 <span>{dogBoneSvg}</span>
               </li>
               <li className="ml-[45px] w-full flex flex-row justify-end items-center gap-6 ">
                 <div className="flex-1 flex flex-col justify-start items-end">
                   <h3 className="text-right uppercase font-rubik font-medium text-[20px]  text-[#222222] w-full whitespace-nowrap ">
                     Recovery = Health
                  </h3>
                   <p className="text-right font-rubik font-normal text-[14px]  text-[#999999] w-4/5">
                     Our focus is not just on foods and treats. Recovery is the
                     key.
                   </p>
                 </div>
                 <span>{recoveryHealthIcon}</span>
               </li>
               <li className="ml-[80px] w-full flex flex-row justify-end items-center gap-6 ">
                 <div className="flex-1 flex flex-col justify-start items-end">
                   <h3 className="text-right uppercase font-rubik font-medium text-[20px]  text-[#222222] w-full whitespace-nowrap">
                     Postive Reinforcement Training:
                   </h3>
                   <p className="text-right font-rubik font-normal text-[14px]  text-[#999999] w-4/5">
                     We find the the strength of your dog. We use no shock
                     collars and clickers.
                   </p>
                 </div>
                 <span>{positiveReinforcementIcon}</span>
               </li>
             </ul>
             <div className="w-1/3">
               <Image src={illustration1} alt="illustration" className="" />
             </div>
             <ul className="flex flex-col justify-start items-start gap-[50px] w-1/3">
               <li className="-ml-[80px] w-full flex flex-row justify-start items-center gap-6">
                 <span>{qualityAndSafety}</span>
                 <div className="flex-1 flex flex-col justify-start items-start">
                   <h3 className="text-left uppercase font-rubik font-medium text-[20px]  text-[#222222] w-full whitespace-nowrap">
                     Quality and Safety:
                   </h3>
                  <p className="text-left font-rubik font-normal text-[14px]  text-[#999999] w-4/5">
                     We assure you quality services. We have trained & handled
                     100 show winning dogs.
                   </p>
                 </div>
               </li>
               <li className="-ml-[45px] w-full flex flex-row justify-start items-center gap-6 ">
                 <span>{happyPetsIcon}</span>
                 <div className="flex-1 flex flex-col justify-start items-start">
                   <h3 className="text-left uppercase font-rubik font-medium text-[20px]  text-[#222222] w-full whitespace-nowrap">
                     Happy Pets
                   </h3>
                   <p className="text-left font-rubik font-normal text-[14px]  text-[#999999] w-4/5">
                     We helped more than 1000+ pet parents to grow happy pets.
                   </p>
                 </div>
               </li>
               <li className="-ml-[80px] w-full flex flex-row justify-start items-center gap-6 ">
                 <span>{positiveReviewsIcon}</span>
                 <div className="flex-1 flex flex-col justify-start items-start">
                   <h3 className="text-left uppercase font-rubik font-medium text-[20px]  text-[#222222] w-full whitespace-nowrap">
                     Positive Reviews
                   </h3>
                   <p className="text-left font-rubik font-normal text-[14px]  text-[#999999] w-4/5">
                     We have excellent reviews from 2000+ customers.
                   </p>
                 </div>
               </li>
             </ul>
           </div>
         </div>
         
        </div>
      </div>
    </section>
    // <section id="cta-section-outer" className="cta-section-outer">
    //   <div id="cta" className="cta">
    //     <div id="cta-section-inner" className="cta-section-inner">
    //       <div className="cta-section">
    //         <div className="w-full flex flex-col justify-start items-center gap-6">
    //           <h2 className="font-rubik font-medium text-[34px] uppercase text-[#222222]">
    //             Why Choose Us
    //           </h2>
    //           <p className="font-rubik font-normal text-[14px] text-[#999999]">
    //             Our food does not contain artificial preservatives, so it must
    //             be kept frozen to avoid expiration ahead of time.
    //           </p>
    //           <div className="h-0.5 w-3/5 flex"><div className="w-1/2 h-full  bg-[#FFCC00]"/><div className="bg-[#EDEDED] w-1/2 h-full"/></div>
    //         </div>
    //         <div className="w-full h-full flex flex-row justify-start items-center relative">
    //           <ul className="flex flex-col justify-start items-start gap-[50px] z-10 w-1/3">
    //             <li className="ml-[80px] w-full  flex flex-row justify-end items-center gap-6">
    //               <div className="flex-1 flex flex-col justify-start items-end">
    //                 <h3 className="text-right uppercase font-rubik font-medium text-[20px]  text-[#222222] w-full whitespace-nowrap">
    //                   World-class service:
    //                 </h3>
    //                 <p className="text-right font-rubik font-normal text-[14px]  text-[#999999] w-4/5">
    //                   Our team is well trained and been serving globally
    //                 </p>
    //               </div>
    //               <span>{dogBoneSvg}</span>
    //             </li>
    //             <li className="ml-[45px] w-full flex flex-row justify-end items-center gap-6 ">
    //               <div className="flex-1 flex flex-col justify-start items-end">
    //                 <h3 className="text-right uppercase font-rubik font-medium text-[20px]  text-[#222222] w-full whitespace-nowrap ">
    //                   Recovery = Health
    //                 </h3>
    //                 <p className="text-right font-rubik font-normal text-[14px]  text-[#999999] w-4/5">
    //                   Our focus is not just on foods and treats. Recovery is the
    //                   key.
    //                 </p>
    //               </div>
    //               <span>{dogBoneSvg}</span>
    //             </li>
    //             <li className="ml-[80px] w-full flex flex-row justify-end items-center gap-6 ">
    //               <div className="flex-1 flex flex-col justify-start items-end">
    //                 <h3 className="text-right uppercase font-rubik font-medium text-[20px]  text-[#222222] w-full whitespace-nowrap">
    //                   Postive Reinforcement Training:
    //                 </h3>
    //                 <p className="text-right font-rubik font-normal text-[14px]  text-[#999999] w-4/5">
    //                   We find the the strength of your dog. We use no shock
    //                   collars and clickers.
    //                 </p>
    //               </div>
    //               <span>{dogBoneSvg}</span>
    //             </li>
    //           </ul>
    //           <div className="w-1/3">
    //             <Image src={illustration1} alt="illustration" className="" />
    //           </div>
    //           <ul className="flex flex-col justify-start items-start gap-[50px] w-1/3">
    //             <li className="-ml-[80px] w-full flex flex-row justify-start items-center gap-6">
    //               <span>{dogBoneSvg}</span>
    //               <div className="flex-1 flex flex-col justify-start items-start">
    //                 <h3 className="text-left uppercase font-rubik font-medium text-[20px]  text-[#222222] w-full whitespace-nowrap">
    //                   Quality and Safety:
    //                 </h3>
    //                 <p className="text-left font-rubik font-normal text-[14px]  text-[#999999] w-4/5">
    //                   We assure you quality services. We have trained & handled
    //                   100 show winning dogs.
    //                 </p>
    //               </div>
    //             </li>
    //             <li className="-ml-[45px] w-full flex flex-row justify-start items-center gap-6 ">
    //               <span>{dogBoneSvg}</span>
    //               <div className="flex-1 flex flex-col justify-start items-start">
    //                 <h3 className="text-left uppercase font-rubik font-medium text-[20px]  text-[#222222] w-full whitespace-nowrap">
    //                   Happy Pets
    //                 </h3>
    //                 <p className="text-left font-rubik font-normal text-[14px]  text-[#999999] w-4/5">
    //                   We helped more than 1000+ pet parents to grow happy pets.
    //                 </p>
    //               </div>
    //             </li>
    //             <li className="-ml-[80px] w-full flex flex-row justify-start items-center gap-6 ">
    //               <span>{dogBoneSvg}</span>
    //               <div className="flex-1 flex flex-col justify-start items-start">
    //                 <h3 className="text-left uppercase font-rubik font-medium text-[20px]  text-[#222222] w-full whitespace-nowrap">
    //                   Positive Reviews
    //                 </h3>
    //                 <p className="text-left font-rubik font-normal text-[14px]  text-[#999999] w-4/5">
    //                   We have excellent reviews from 2000+ customers.
    //                 </p>
    //               </div>
    //             </li>
    //           </ul>
    //         </div>
    //       </div>
    //       {/* <div className="cta-section">
    //         <div className="w-full flex flex-col justify-start items-center gap-6">
    //           <h2 className="font-manrope font-medium text-[34px] text-[#222222] uppercase">
    //             Are you a concerned pet parent?
    //           </h2>
    //           <p className="font-manrope font-normal text-[18px] text-[#999999]">
    //             Caring for a pet is no small task. Your pet is a lovable
    //             companion for your family, your kids, and you.
    //           </p>
    //           <div className="h-0.5 w-3/5 bg-gradient-to-r from-[#EDEDED] via-[#EDEDED] to-[#FFCC00]" />
    //         </div>
    //         <div className="flex-1 w-full flex flex-row justify-between items-center gap-12">
    //           <div className="min-w-[649px] h-full grid grid-cols-2 grid-rows-12 gap-10">
    //             <div className="col-start-1 w-[304px] h-[243px] bg-color-primary-1/20 overflow-clip ">
    //               <Image
    //                 alt="dog on leash"
    //                 src={dogOnLeash}
    //                 className="object-contain"
    //               />
    //             </div>
    //             <div className="col-start-1 w-[305px] h-[286px] bg-color-primary-1/20">
    //               <Image
    //                 alt="dog on leash"
    //                 src={aggressiveBehaviour}
    //                 className="object-fill"
    //               />
    //             </div>
    //             <div className="col-start-2 row-start-2 bg-color-primary-1/20 w-[304px] h-[280px]">
    //               <Image
    //                 alt="dog on leash"
    //                 src={destructiveBehaviour}
    //                 className="object-fill"
    //               />
    //             </div>
    //             <div className="col-start-2  bg-color-primary-1/20 w-[304.75px] h-[203.16px]">
    //             <Image
    //                 alt="dog on leash"
    //                 src={destructiveBehaviour}
    //                 className="object-fill"
    //               />
    //             </div>
    //           </div>

    //           <div className="w-1/2 pl-[90px] flex flex-col justify-start items-start gap-6">
    //             <h3 className="font-manrope font-bold text-color-primary-1 text-[24px]">
    //               Grow a happy healthy and obedient companion for you and your
    //               kids.
    //             </h3>
    //             <ul className="flex flex-col justify-start items-start gap-[14px] list-image-[url(/assets/Icons/ListIcon.svg)] list-outside">
    //               <li className="ml-5">
    //                 70% of the pet parents are unaware of choosing a pet for
    //                 them.
    //               </li>
    //               <li className="ml-5">
    //                 Most of them worried about their pet's health.
    //               </li>
    //               <li className="ml-5">
    //                 Many of the pets develop aggression and bad habits.
    //               </li>
    //             </ul>
    //             <div className="w-full flex flex-row justify-start items-start gap-[18px]">
    //               <Button type="primary" label="Get Help Now" />
    //               <Button type="secondary" label="Book a call" />
    //             </div>
    //           </div>
    //         </div>
    //       </div> */}
    //     </div>
    //   </div>
    // </section>
  );
};

export default CtaSection;
