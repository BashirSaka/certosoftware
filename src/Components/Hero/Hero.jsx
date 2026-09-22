import { MoveRight, Star } from "lucide-react";
import Image from "../../assets/image.png";
import Image2 from "../../assets/phone.png";
import figure2 from "../../assets/figure2.png";
import company from "../../assets/div.png";

const Card = [
  {
    id: 1,
    Icon: Star,
    comment:
      "Does exactly what it says. Clear to read and understand. This is now the second iPhone we've used it on and would certainly recommend this app.",
    username: "colinandmandy94",
  },
  {
    id: 2,
    Icon: Star,
    comment:
      "Love the ease and efficiency. Awesome app. Very informative and insightful if wanting to know more about your device. The added breach check is a great bonus. Check any email if they've ever been named in a data breach from years ago. Sweet tool. Love it, highly recommend.",
    username: "Jennifer Black",
  },
  {
    id: 3,
    Icon: Star,
    comment:
      "This app is good if you need to identify certain vulnerabilities on your iPhone. If you have any issues, their customer service was quite helpful and responsive.",
    username: "Phillip Colligan",
  },
  {
    id: 4,
    Icon: Star,
    comment:
      "I wish they had a VPN, I'd be signing up for that too. Apart from that the app is top notch. I had Certo on my last phone and it was the first app I put on this phone when I got it from the store. The scanner and other parts of the app are really easy and simple to use",
    username: "Leslie Carrillo",
  },
  {
    id: 5,
    Icon: Star,
    comment:
      "My son who works in IT suggested I try this app after I was getting lots of strange messages and things happening on my phone. Since running it once a week I have had no viruses or malware problems. I also got a VPN app so I think with both I'm all set!",
    username: "Leslie Carrillo",
  },
];

export default function Hero() {
  return (
    <>
      {/* Hero section — text + image only */}
      <section className="flex flex-col min-[769px]:flex-row justify-between items-center min-[769px]:items-start gap-10 bg-[#F3F8FF] font-Inter py-8 px-6 min-[769px]:px-20">
        {/* Text section */}
        <div className="flex flex-col text-center min-[769px]:text-left min-[769px]:mt-10">
          <h1 className="text-[#02033B] font-Inter font-bold text-4xl min-[769px]:text-5xl">
            Your mobile privacy <br /> is our mission
          </h1>
          <p className="text-[#02033B] py-6 min-[769px]:py-8">
            Think your phone has been hacked? Our trusted apps make it easy for
            you to scan, detect and remove threats from your iPhone and Android
            devices.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center min-[769px]:justify-start gap-4 min-[769px]:gap-6">
            <button className="cursor-pointer flex whitespace-nowrap shrink-0 gap-1 items-center rounded-full bg-[#FFC247] text-[#02033B] font-bold py-2 px-4 min-[769px]:px-8">
              Get Certo for iPhone
              <MoveRight size={18} />
            </button>

            <button className="cursor-pointer whitespace-nowrap shrink-0 bg-[#F3F8FF] border-2 border-[#02033B] text-[#02033B] rounded-full font-bold py-2 px-4 min-[769px]:px-8">
              Get Certo for Android
            </button>
          </div>
        </div>

        {/* Image section */}
        <div className="relative w-64 h-64 min-[769px]:w-[420px] min-[769px]:h-[420px] shrink-0 mt-6 min-[769px]:mt-8">
          <img
            src={figure2}
            className="absolute -top-3 -left-3 min-[769px]:-top-4 min-[769px]:-left-4 w-[100%] h-[100%] object-cover rounded-md z-0"
            alt="Decorative purple background shape"
          />
          <img
            src={Image}
            className="absolute inset-0 w-full h-full object-cover rounded-2xl z-10"
            alt="A man browsing Certosoftware"
          />
          <img
            src={Image2}
            className="absolute top-6 left-0 min-[769px]:top-10 min-[769px]:left-4 w-20 min-[769px]:w-30 drop-shadow-xl z-20"
            alt="Certosoftware phone mockup"
          />
        </div>
      </section>

      {/* Testimonials section — infinitely scrolling marquee */}
      <section className="bg-[#FFC247] font-Inter py-12 px-6 min-[769px]:px-2 overflow-hidden">
        <h2 className="px-0 text-[#02033B] font-bold text-2xl min-[769px]:text-4xl  mb-8 min-[769px]:max-w-2xl min-[769px]:px-20">
          Loved by thousands of iPhone and Android users alike
        </h2>

        <div className="relative w-full max-w-full min-w-0 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
          <div className="flex gap-6 w-max animate-marquee-cards hover:[animation-play-state:paused]">
            {[...Card, ...Card].map((card, i) => (
              <div
                key={`${card.id}-${i}`}
                className="bg-white rounded-2xl shadow-md p-6 w-72 shrink-0 flex flex-col gap-3"
              >
                <div className="flex gap-1">
                  {[...Array(5)].map((_, index) => (
                    <card.Icon
                      key={index}
                      size={18}
                      className="text-[#FFC247] fill-[#FFC247]"
                    />
                  ))}
                </div>

                <p className="text-sm text-[#02033B]">{card.comment}</p>
                <h6 className="font-bold text-sm text-[#02033B]">
                  {card.username}
                </h6>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-4 min-[800px]:flex-row justify-between max-w-full items-center mt-4 px-4 min-[769px]:px-20 mt-12">
            <h3 className="text-[#02033B] whitespace-nowrap text-2xl font-bold font-Inter min-[769px]:text-3xl">
              Featured in:
            </h3>
            <img
              src={company}
              className="w-96 min-[769px]:w-[750px]"
              alt="List of companies that uses certosoftware"
            />
          </div>
        </div>

        <style>{`
          @keyframes marquee-cards {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          .animate-marquee-cards {
            animation: marquee-cards 80s linear infinite;
          }
        `}</style>
      </section>
    </>
  );
}
