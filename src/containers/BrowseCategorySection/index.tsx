import React from "react";
import petGrooming from "@/assets/images/BrowseByCategory/petGrooming.svg";
import boarding from "@/assets/images/BrowseByCategory/boarding.svg";
import dogTraining from "@/assets/images/BrowseByCategory/dogTraining.svg";
import petParentsCourses from "@/assets/images/BrowseByCategory/petParentsCourses.svg";
import products from "@/assets/images/BrowseByCategory/products.svg";
import trainersTrainingCourse from "@/assets/images/BrowseByCategory/trainersTrainingCourse.svg";
import Image from "next/image";
import { rightArrowIcon } from "@/assets/icons/BrowseByCategory";
const BrowseCategorySection = () => {
  return (
    <section className="w-full  px-5 py-[30px] flex flex-col  gap-8 lg:py-[50px] lg:px-[52px]">
      <h2 className="font-manrope text-[20px] text-black lg:text-[34px] lg:leading-[50px] lg:font-medium" >
        Browse by Category
      </h2>
      <ul className="w-full flex flex-col justify-start gap-6 lg:gap-[30px] lg:flex-row lg:flex-wrap lg:min-w-full">
        <li className=" bg-white rounded-[60px] shadow-md flex flex-row justify-between items-center lg:min-w-[30%]">
          <div className="">
            <Image
              alt="pet grooming"
              className="object-fill w-full h-full"
              src={petGrooming}
            />
          </div>
          <div className="w-2/3 py-6 pr-8 flex flex-row justify-between items-center">
            <div className="flex flex-col gap-2">
              <h3 className="text-[14px] text-[#3F3B57] font-medium">
                Grooming
              </h3>
              <p className="text-[12px] text-[#8E8989] font-medium">
                Dog & Cat
              </p>
            </div>
            <div>{rightArrowIcon}</div>
          </div>
        </li>
        <li className="lg:min-w-[30%] bg-white rounded-[60px] shadow-md flex flex-row justify-between items-center">
          <div className="w-1/3">
            <Image
              alt="pet grooming"
              className="object-fill w-full h-full lg:w-[60%]"
              src={boarding}
            />
          </div>
          <div className="w-2/3 py-6 pr-8 flex flex-row justify-between items-center">
            <div className="flex flex-col gap-2">
              <h3 className="text-[14px] text-[#3F3B57] font-medium">
                Boarding
              </h3>
              <p className="text-[12px] text-[#8E8989] font-medium">
                Dog & Cat
              </p>
            </div>
            <div>{rightArrowIcon}</div>
          </div>
        </li>
        <li className=" bg-white rounded-[60px] shadow-md flex flex-row justify-between items-center lg:min-w-[30%]">
          <div className="">
            <Image
              alt="pet grooming"
              className="object-fill w-full h-full"
              src={dogTraining}
            />
          </div>
          <div className="w-2/3 py-6 pr-8 flex flex-row justify-between items-center">
            <div className="flex flex-col gap-2">
              <h3 className="text-[14px] text-[#3F3B57] font-medium">
                Dog Training
              </h3>
              <p className="text-[12px] text-[#8E8989] font-medium">
                Dog & Cat
              </p>
            </div>
            <div>{rightArrowIcon}</div>
          </div>
        </li>
        <li className="lg:min-w-[30%] bg-white rounded-[60px] shadow-md flex flex-row justify-between items-center">
          <div className="">
            <Image
              alt="pet grooming"
              className="object-fill w-full h-full"
              src={products}
            />
          </div>
          <div className="w-2/3 py-6 pr-8 flex flex-row justify-between items-center">
            <div className="flex flex-col gap-2">
              <h3 className="text-[14px] text-[#3F3B57] font-medium">
                Products
              </h3>
              <p className="text-[12px] text-[#8E8989] font-medium">
                Dog & Cat
              </p>
            </div>
            <div>{rightArrowIcon}</div>
          </div>
        </li>
        <li className=" bg-white rounded-[60px] shadow-md flex flex-row justify-between items-center lg:min-w-[30%]">
          <div className="">
            <Image
              alt="pet grooming"
              className="object-fill w-full h-full"
              src={petParentsCourses}
            />
          </div>
          <div className="w-2/3 py-6 pr-8 flex flex-row justify-between items-center">
            <div className="flex flex-col gap-2">
              <h3 className="text-[14px] text-[#3F3B57] font-medium">
                Pet Parent Courses
              </h3>
              <p className="text-[12px] text-[#8E8989] font-medium">
                Dog & Cat
              </p>
            </div>
            <div>{rightArrowIcon}</div>
          </div>
        </li>
        <li className=" bg-white rounded-[60px] shadow-md flex flex-row justify-between items-center lg:min-w-[30%]">
          <div className="">
            <Image
              alt="pet grooming"
              className="-scale-x-[-1] object-fill w-full h-full "
              src={trainersTrainingCourse}
            />
          </div>
          <div className="w-2/3 py-6 pr-8 flex flex-row justify-between items-center">
            <div className="flex flex-col gap-2">
              <h3 className="text-[14px] text-[#3F3B57] font-medium">
                Trainers Training Course
              </h3>
              <p className="text-[12px] text-[#8E8989] font-medium">
                Dog & Cat
              </p>
            </div>
            <div>{rightArrowIcon}</div>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default BrowseCategorySection;
