import { externalLinkIcon } from "@/assets/icons/FeaturedProducts";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import petFood from "@/assets/images/FeaturedProducts/petFoods.svg";
import trainingCourse from "@/assets/images/FeaturedProducts/trainingCourse.svg";
import basicObedienceTraining from "@/assets/images/FeaturedProducts/basicObedienceTraining.svg";
import healthyFood from "@/assets/images/FeaturedProducts/healthuFood.svg";
const FeaturedProducts = () => {
  return (
    <section className="py-[30px] px-5 flex flex-col justify-start items-start gap-[30px]">
      <p className="font-medium text-[20px]  text-[#3F3B57] w-full text-center">
        Featured Products
      </p>
      <div className="w-full grid grid-cols-1 gap-6 lg:grid-cols-4 lg:grid-rows-2">
        <div className="w-full px-5 rounded-[5px] bg-[#F45B5B] flex flex-row justify-start lg:col-span-2 lg:row-span-2">
          <div className="flex-1 py-[35px]  flex flex-col justify-between gap-8 lg:justify-center">
            <div className="w-full  flex flex-col justify-start items-start gap-2.5">
              <p className="font-bold text-white text-[16px]">
                The Best Pet Food
                <span className="text-[12px] font-normal ">
                  <br />
                  Imported from Germany
                </span>
              </p>
              <p className="text-[12px] text-white font-medium font-manrope">
                Use code: FREE2024
              </p>
            </div>
            <div className="flex flex-col justify-end items-start gap-2">
              <Link
                href={""}
                className="border-[0.8px] border-white py-2 px-5 text-[12px] text-white rounded-[20px] font-medium flex gap-2"
              >
                Buy now!<span>{externalLinkIcon}</span>
              </Link>
              <p className="font-manrope font-medium text-[10px] text-white">
                100+ purchase in last 7 days
              </p>
            </div>
          </div>
          <div className="w-5/12 flex items-end justify-end lg:justify-center lg:items-center">
            <Image alt="pet food" src={petFood} />
          </div>
        </div>
        <div className="w-full px-5 rounded-[5px] bg-[#F4AE5B] flex flex-row justify-start">
          <div className="flex-1 pt-[46px] pb-6 flex flex-col justify-between gap-20">
            <p className="font-bold text-white text-[16px]">Training Course</p>

            <Link
              href={""}
              className=" text-[12px] text-white  font-medium flex gap-2"
            >
              Enroll Now<span>{externalLinkIcon}</span>
            </Link>
          </div>
          <div className="w-5/12 flex items-end justify-end">
            <Image alt="pet food" src={trainingCourse} />
          </div>
        </div>
        <div className="w-full px-5 rounded-[5px] bg-[#5BC6F4] flex flex-row justify-start lg:row-span-2">
          <div className="flex-1 pt-[46px] pb-6 flex flex-col justify-between gap-20">
            <p className="font-bold text-white text-[16px]">
              Basic Obedience Training
            </p>

            <Link
              href={""}
              className=" text-[12px] text-white  font-medium flex gap-2"
            >
              Explore More<span>{externalLinkIcon}</span>
            </Link>
          </div>
          <div className="w-5/12 flex items-end justify-end">
            <Image alt="pet food" src={basicObedienceTraining} />
          </div>
        </div>
        <div className="w-full px-5 rounded-[5px] bg-[#9E5BF4] flex flex-row justify-start">
          <div className="flex-1 py-[35px]  flex flex-col justify-between gap-8">
            <div className="w-full  flex flex-col justify-start items-start gap-2.5">
              <p className="font-manrope font-medium text-[12px] text-white">
                ON SALE
              </p>
              <p className="font-bold text-white text-[16px]">
                A Complete Healthy
                <span className="text-[12px] font-normal ">
                  <br />
                  Recovery Food
                </span>
              </p>
              <p className="text-[10px] text-white font-medium font-manrope">
                Supplement recommended by doctors
              </p>
            </div>
            <div className="flex flex-col justify-end items-start gap-2">
              <Link
                href={""}
                className=" text-[12px] text-white font-medium flex gap-2"
              >
                Shop Now<span>{externalLinkIcon}</span>
              </Link>
            </div>
          </div>
          <div className="w-5/12 flex items-end justify-end">
            <Image alt="pet food" src={healthyFood} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
