import { Link } from "react-router-dom";
import { MoveRight } from "lucide-react";

export default function Aboutus() {
  return (
    <>
      <section className="bg-white py-12 flex flex-col px-2 min-[769px]:px-24 min-[769px]:py-16 min-[769px]:flex-row justify-between gap-4 min-[769px]:px-20">
        <div className="flex flex-col gap-12 bg-gradient-to-b from-[#FDB235] to-[#F7C95F] p-24 rounded-4xl min-[769px]:p-20">
          <h2 className="text-[#02033B] font-bold text-2xl min-[769px]:text-3xl">
            Read our story
          </h2>
          <p className="text-[#02033B]">
            Find out why thousands trust Certo to secure their mobile world.
          </p>
          <Link
            to="/about"
            className="cursor-pointer whitespace-nowrap shrink-0 gap-1 flex justify-center items-center rounded-full bg-[#4335DE] text-white font-bold py-[16px] pl-[20px] pr-[44px] max-w-44"
          >
            About Us
            <MoveRight size={18} />
          </Link>
        </div>

        <div className="flex flex-col text-center justify-center items-center gap-12 bg-white p-10 rounded-4xl min-[769px]:p-20 min-[769px]:items-start min-[769px]:text-start">
          <h2 className="text-[#02033B] font-bold text-2xl min-[769px]:text-3xl">
            Help Center
          </h2>
          <p className="text-[#02033B]">
            Help topics, getting started guides and FAQs.
          </p>
          <Link
            to="/help"
            className="cursor-pointer border-2 whitespace-nowrap shrink-0 gap-1 flex justify-center items-center rounded-full text-[#02033B] font-bold py-[10px] px-[16px] max-w-44"
          >
            Visit help center
          </Link>
        </div>
      </section>

      <section className="bg-gradient-to-b from-[#2925CC] to-[#4B48E5] py-14 flex flex-col items-center text-center justify-center gap-7">
        <h1 className="text-2xl min-[769px]:text-3xl font-bold text-white">
          Is someone spying on your phone?
        </h1>
        <p className="text-white">Find out with Certo</p>
        <div className="flex flex-col gap-4 min-[769px]:flex-row gap-6">
          <a
            href="/#get-app"
            className="cursor-pointer whitespace-nowrap shrink-0 gap-1 flex justify-center items-center rounded-full bg-[#FFC247] text-[#02033B] font-bold py-2 px-6"
          >
            Get Certo for iPhone
            <MoveRight size={18} />
          </a>

          <a
            href="/#get-app"
            className="cursor-pointer whitespace-nowrap shrink-0 border-2 border-white text-white rounded-full font-bold py-2 px-6"
          >
            Get Certo for Android
          </a>
        </div>
      </section>
    </>
  );
}