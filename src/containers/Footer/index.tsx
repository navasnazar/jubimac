import React from "react";
import logo from "@/assets/images/Footer/logo.svg";
import Image from "next/image";
import Link from "next/link";
import {
  facebookIcon,
  instagramIcon,
  twitterIcon,
  youtubeIcon,
} from "@/assets/icons/Footer";
import Button from "@/components/Button";
import { rightArrowWhiteIcon } from "@/assets/icons/aboutUs";
const Footer = () => {
  return (
    <>
      <section className="mx-5 py-[30px]  flex flex-col justify-start items-center gap-[15px] inset-5 border-b  border-[#9B8064]/20">
        <div>
          <Image src={logo} alt="logo" />
        </div>
        <p className="font-manrope text-[12px] font-medium text-[#333333]">
          Tailored solutions for every furry friend.
        </p>
        <div className="mt-2.5 flex flex-row justify-start items-center gap-2.5">
          <Link href={""}>{twitterIcon}</Link>
          <Link href={""}>{facebookIcon}</Link>
          <Link href={""}>{youtubeIcon}</Link>
          <Link href={""}>{instagramIcon}</Link>
        </div>
      </section>
      <section className="w-full py-[30px] px-5 flex flex-col justify-start items-start gap-[15px]">
        <h6 className="font-medium text-[14px] text-black uppercase">
          Quick links
        </h6>
        <div className="w-full flex flex-row justify-between items-start gap-y-[30px] flex-wrap">
          <ul className="w-1/2 flex flex-col justify-start items-start">
            <li>
              <Link
                href={""}
                className="text-[12px] font-medium text-[#333333]"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href={""}
                className="text-[12px] font-medium text-[#333333]"
              >
                Categories
              </Link>
            </li>
            <li>
              <Link
                href={""}
                className="text-[12px] font-medium text-[#333333]"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                href={""}
                className="text-[12px] font-medium text-[#333333]"
              >
                Blogs
              </Link>
            </li>
          </ul>
          <ul className="w-1/2 flex flex-col justify-start items-start">
            <li>
              <Link
                href={""}
                className="text-[14px] font-medium text-[#333333]"
              >
                Reviews
              </Link>
            </li>
            <li>
              <Link
                href={""}
                className="text-[14px] font-medium text-[#333333]"
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                href={""}
                className="text-[14px] font-medium text-[#333333]"
              >
                Contact us
              </Link>
            </li>
          </ul>
          <ul className="w-1/2 flex flex-col justify-start items-start">
            <li>
              <Link
                href={""}
                className="text-[12px] font-medium text-[#333333]"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href={""}
                className="text-[12px] font-medium text-[#333333]"
              >
                Return Policy
              </Link>
            </li>
            <li>
              <Link
                href={""}
                className="text-[12px] font-medium text-[#333333]"
              >
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link
                href={""}
                className="text-[12px] font-medium text-[#333333]"
              >
                License
              </Link>
            </li>
          </ul>
        </div>
      </section>
      <section className="py-[30px] mx-5 border-t  border-[#9B8064]/20 flex flex-col justify-start items-start gap-[30px]">
        <div className="w-full flex flex-col justify-start items-start gap-[15px]">
          <h6 className="text-[14px] text-black font-medium uppercase">
            Subscribe newsletter
          </h6>
          <form className="w-full rounded-full bg-white flex flex-row justify-start items-center">
            <input
              placeholder="Email address"
              className="px-3 py-2 rounded-full flex-1 focus:outline-none"
              type="email"
            />
            <button
              className="bg-[#F4765B] p-[14px] rounded-full"
              type="submit"
            >
              {rightArrowWhiteIcon}
            </button>
          </form>
        </div>
        <div className="flex flex-col justify-start items-start gap-[15px]">
          <p className="font-manrope font-medium text-[14px] text-black">
            Email:{" "}
            <span className="text-[#333333]">{"  "}info@example.com</span>
          </p>
          <p className="font-manrope font-medium text-[14px] text-black">
            Contact: <span className="text-[#333333]"></span>{"  (229)555-0109"}
          </p>
        </div>
      </section>

      <section className="p-5 border-t  border-[#9B8064]/20">
        <div className="font-manrope font-medium text-[12px] text-[#8E8989] text-center">
          © 2024 PetPals. Designed by{" "}<Link href={""}>AZ Product Studio.</Link>
        </div>
      </section>
    </>
  );
};

export default Footer;
