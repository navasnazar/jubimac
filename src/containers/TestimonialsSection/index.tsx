import { apostrophe } from "@/assets/icons/Testimonials";
import Image from "next/image";
import React from "react";

const TestimonialsSection = () => {
  return (
    <section className="py-[30px] px-5  bg-[#F4765B] flex flex-col justify-start gap-[15px] lg:py-[50px] lg:px-[50px]">
      <h2 className="font-medium text-[14px] text-white text-center lg:text-[34px] lg:leading-[33px]">
        Hear our customers have to say
      </h2>
      <p className="text-white text-[12px] leading-loose text-center lg:text-[16px] lg:leading-[24px]">
        See why our customers rave about us! Explore real reviews from pet
        lovers just like you. Join the conversation and share your experience
        with our top-rated products!
      </p>
      <div className="pt-10 lg:hidden">
        <video
          className="w-full h-full object-contain aspect-square rounded-[20px]"
          controls
          poster="/assets/Images/videoPoster.svg"
        >
          <source src="https://www.youtube.com/watch?v=n7Spn1KUC38" />
        </video>
      </div>
      <div className="w-full flex flex-row gap-4 justify-start overflow-x-scroll lg:hidden">
        <div
          className="min-w-[85%]  pl-6 pr-4 py-4 rounded-[5px] bg-white border-l-[10px] border-[#0071BC] flex flex-row justify-start items-start gap-2
         [box-shadow:0px_4px_4px_0px_rgba(0,0,0,0.25),0px_8px_16px_0px_rgba(0,0,0,0.08),0px_0px_4px_0px_rgba(0,0,0,0.04)]"
        >
          <Image
            width={40}
            height={40}
            className="rounded-full"
            alt="user"
            src={"https://i.pravatar.cc/40"}
          />
          <div className="relative flex-1 flex flex-col justify-start items-start gap-2">
            <span className="absolute right-0 top-0">{apostrophe}</span>

            <h3 className="text-[20px] text-[#3F3B57] font-bold">
              Theresa Webb
            </h3>
            <p className="line-clamp-[7] text-[16px] text-[#767676]">
              “I can't thank Pet Paradise enough! Their products have truly
              transformed my pet's life. From their delicious treats to their
              cozy beds, everything is top-notch quality.”
            </p>
          </div>
        </div>
        <div className="min-w-[85%]  pl-6 pr-4 py-4 rounded-[5px] bg-white border-l-[10px] border-[#E2E2E2] flex flex-row justify-start items-start gap-2">
          <Image
            width={40}
            height={40}
            className="rounded-full"
            alt="user"
            src={"https://i.pravatar.cc/40"}
          />
          <div className="relative flex-1 flex flex-col justify-start items-start gap-2">
            <span className="absolute right-0 top-0">{apostrophe}</span>

            <h3 className="text-[20px] text-[#3F3B57] font-bold">
              Theresa Webb
            </h3>
            <p className="line-clamp-[7] text-[16px] text-[#767676]">
              “I can't thank Pet Paradise enough! Their products have truly
              transformed my pet's life. From their delicious treats to their
              cozy beds, everything is top-notch quality.”
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center gap-1 lg:hidden">
        <div className="w-1.5 h-1.5 rounded-full border-[0.5px] border-white bg-[#D4D4D4]" />
        <div className="w-1.5 h-1.5 rounded-full border-[0.5px] border-white " />
        <div className="w-1.5 h-1.5 rounded-full border-[0.5px] border-white " />
      </div>
      <div className="flex flex-row gap-[140px] max-lg:hidden">
        <video
          className="w-1/2 h-full object-contain aspect-square rounded-[20px]"
          controls
          poster="/assets/Images/videoPoster.svg"
        >
          <source src="https://www.youtube.com/watch?v=n7Spn1KUC38" />
        </video>
        <div className="flex flex-col justify-around items-start">
          <div
            className="min-w-[85%]  pl-6 pr-4 py-4 rounded-[5px] bg-white border-l-[10px] border-[#0071BC] flex flex-row justify-start items-start gap-2
         [box-shadow:0px_4px_4px_0px_rgba(0,0,0,0.25),0px_8px_16px_0px_rgba(0,0,0,0.08),0px_0px_4px_0px_rgba(0,0,0,0.04)]"
          >
            <Image
              width={40}
              height={40}
              className="rounded-full"
              alt="user"
              src={"https://i.pravatar.cc/40"}
            />
            <div className="relative flex-1 flex flex-col justify-start items-start gap-2">
              <span className="absolute right-0 top-0">{apostrophe}</span>

              <h3 className="text-[20px] text-[#3F3B57] font-bold">
                Theresa Webb
              </h3>
              <p className="line-clamp-[7] text-[16px] text-[#767676]">
                “I can't thank Pet Paradise enough! Their products have truly
                transformed my pet's life. From their delicious treats to their
                cozy beds, everything is top-notch quality.”
              </p>
            </div>
          </div>
          <div
            className="min-w-[85%]  pl-6 pr-4 py-4 rounded-[5px] bg-white border-l-[10px] border-[#0071BC] flex flex-row justify-start items-start gap-2
         [box-shadow:0px_4px_4px_0px_rgba(0,0,0,0.25),0px_8px_16px_0px_rgba(0,0,0,0.08),0px_0px_4px_0px_rgba(0,0,0,0.04)] -translate-x-16"
          >
            <Image
              width={40}
              height={40}
              className="rounded-full"
              alt="user"
              src={"https://i.pravatar.cc/40"}
            />
            <div className="relative flex-1 flex flex-col justify-start items-start gap-2">
              <span className="absolute right-0 top-0">{apostrophe}</span>

              <h3 className="text-[20px] text-[#3F3B57] font-bold">
                Theresa Webb
              </h3>
              <p className="line-clamp-[7] text-[16px] text-[#767676]">
                “I can't thank Pet Paradise enough! Their products have truly
                transformed my pet's life. From their delicious treats to their
                cozy beds, everything is top-notch quality.”
              </p>
            </div>
          </div>
          <div
            className="min-w-[85%]  pl-6 pr-4 py-4 rounded-[5px] bg-white border-l-[10px] border-[#0071BC] flex flex-row justify-start items-start gap-2
         [box-shadow:0px_4px_4px_0px_rgba(0,0,0,0.25),0px_8px_16px_0px_rgba(0,0,0,0.08),0px_0px_4px_0px_rgba(0,0,0,0.04)]"
          >
            <Image
              width={40}
              height={40}
              className="rounded-full"
              alt="user"
              src={"https://i.pravatar.cc/40"}
            />
            <div className="relative flex-1 flex flex-col justify-start items-start gap-2">
              <span className="absolute right-0 top-0">{apostrophe}</span>

              <h3 className="text-[20px] text-[#3F3B57] font-bold">
                Theresa Webb
              </h3>
              <p className="line-clamp-[7] text-[16px] text-[#767676]">
                “I can't thank Pet Paradise enough! Their products have truly
                transformed my pet's life. From their delicious treats to their
                cozy beds, everything is top-notch quality.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
