import { MoveRight } from "lucide-react";
import figure from "../../assets/figure.png";
import eye from "../../assets/eye.png";
import key from "../../assets/key.png";
import Location from "../../assets/location.png";
import phone2 from "../../assets/phone2.png";
import triangle from "../../assets/triangle.png";
import settings from "../../assets/settings.png";

export default function Hero2() {
  return (
    <>
      <section className="px-6 flex flex-col items-center justify-between min-[769px]:flex-row min-[769px]:px-20 mt-24 mb-16">
        {/* text contents */}
        <div className="flex flex-col items-center justify-center text-center gap-6 min-[769px]:items-start min-[769px]:gap-12 min-[769px]:text-start">
          <h2 className="text-[#02033B] font-bold text-2xl min-[769px]:text-4xl">
            At Certo, mobile security <br /> is not an afterthought, it's <br />{" "}
            what we do.
          </h2>
          <p className="text-[#02033B] text-base">
            With years of experience in mobile security and <br /> spyware
            detection, our products have helped <br /> countless people
            safeguard their devices and find peace of mind.
          </p>
          <div className="flex flex-col gap-4 w-64">
            <button className="cursor-pointer whitespace-nowrap shrink-0 gap-1 flex justify-center items-center rounded-full bg-[#FFC247] text-[#02033B] font-bold py-2 px-4">
              Get Certo for iPhone
              <MoveRight size={18} />
            </button>

            <button className="cursor-pointer whitespace-nowrap shrink-0 bg-[#F3F8FF] border-2 border-[#02033B] text-[#02033B] rounded-full font-bold py-2 px-4">
              Get Certo for Android
            </button>
          </div>
        </div>

        {/* Image */}
        <img
          src={figure}
          className="w-1/3 mt-5 min-[769px]:mt-0"
          alt="woman sitting and browsing Certosoftware"
        />
      </section>

      {/* Section 2 */}
      <section className="flex flex-col items-center bg-[#E7EFFA] text-[#02033B] mt-4 px-6 py-16 min-[769px]:py-32 min-[769px]:px-20">
        <h1 className="text-center text-[#02033B] font-bold text-2xl min-[769px]:text-3xl mb-10 min-[769px]:mb-14">
          Get your freedom back, stop mobile <br />
          spyware today
        </h1>

        {/* bg-white container */}
        <div className="bg-white rounded-2xl shadow-md w-full max-w-5xl px-6 py-10 min-[769px]:px-20 min-[769px]:py-12">
          {/* Row 1 */}
          <div className="grid grid-cols-1 min-[769px]:grid-cols-3 gap-10 min-[769px]:gap-8">
            {/* reason 1 */}
            <div className="flex flex-col items-center text-center gap-3">
              <img src={eye} className="w-8 min-[769px]:w-12" alt="eye-image" />
              <h2 className="font-bold text-lg">Spyware detection</h2>
              <p className="text-sm text-gray-600">
                Our advanced spyware detection engine can identify if a device
                contains spyware or bugging software.
              </p>
            </div>
            {/* reason 2 */}
            <div className="flex flex-col items-center text-center gap-3">
              <img src={key} className="w-8 min-[769px]:w-12" alt="key-image" />
              <h2 className="font-bold text-lg">Keylogger detection</h2>
              <p className="text-sm text-gray-600">
                Find malicious keyboards installed on your device that could
                allow someone to record things you type (e.g. passwords).
              </p>
            </div>
            {/* reason 3 */}
            <div className="flex flex-col items-center text-center gap-3">
              <img
                src={Location}
                className="w-8 min-[769px]:w-12"
                alt="location-image"
              />
              <h2 className="font-bold text-lg">Find tracking apps</h2>
              <p className="text-sm text-gray-600">
                Check which apps can access your location, microphone or camera.
                Get alerted if a known tracking app is installed.
              </p>
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 min-[769px]:grid-cols-3 gap-10 min-[769px]:gap-8 mt-10 min-[769px]:mt-14">
            {/* reason 1 */}
            <div className="flex flex-col items-center text-center gap-3">
              <img
                src={phone2}
                className="w-8 min-[769px]:w-12"
                alt="phone-image"
              />
              <h2 className="font-bold text-lg">OS integrity check</h2>
              <p className="text-sm text-gray-600">
                Analyze your operating system for signs of tampering that could
                compromise security, such as Jailbreaking.
              </p>
            </div>
            {/* reason 2 */}
            <div className="flex flex-col items-center text-center gap-3">
              <img
                src={triangle}
                className="w-8 min-[769px]:w-12"
                alt="triangle-image"
              />
              <h2 className="font-bold text-lg">Threat removal</h2>
              <p className="text-sm text-gray-600">
                Our intelligent scan will either safely remove threats for you
                or provide easy-to-follow instructions.
              </p>
            </div>
            {/* reason 3 */}
            <div className="flex flex-col items-center text-center gap-3">
              <img
                src={settings}
                className="w-8 min-[769px]:w-12"
                alt="settings-image"
              />
              <h2 className="font-bold text-lg">Easy to use</h2>
              <p className="text-sm text-gray-600">
                We create easy to use apps that can check your device for
                vulnerabilities in a matter of minutes.
              </p>
            </div>
          </div>

          {/* Buttons row */}
          <div className="flex flex-col min-[769px]:flex-row justify-center gap-4 mt-10 min-[769px]:mt-14">
            <button className="cursor-pointer whitespace-nowrap shrink-0 gap-1 flex justify-center items-center rounded-full bg-[#FFC247] text-[#02033B] font-bold py-2 px-6">
              Get Certo for iPhone
              <MoveRight size={18} />
            </button>
            <button className="cursor-pointer whitespace-nowrap shrink-0 bg-white border-2 border-[#02033B] text-[#02033B] rounded-full font-bold py-2 px-6">
              Get Certo for Android
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
