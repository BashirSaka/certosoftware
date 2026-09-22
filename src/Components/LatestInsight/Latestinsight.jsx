import spying from "../../assets/girl.png"
import samsung from "../../assets/samsung.png"
import camera from "../../assets/camera.png"
import {MoveRight} from "lucide-react"


export default function Latestinsight() {
  return (
    <>
      <section className="pt-8 bg-[#F3F8FF] flex flex-col justify-center min-[769px]:px-20 min-[769px]:pt-16">
        {/* Text */}
        <div className="flex justify-center">
          <h1 className="pb-6 text-[#02033B] font-bold text-4xl min-[769px]:text-5xl min-[769px]:pb-16">
            Latest insights
          </h1>
        </div>

        {/* div to hold the 3 cards */}
        <div className="grid grid-cols-1 justify-center gap-6 relative min-[769px]:grid-cols-3">
          {/* card 1 */}
          <div className="flex flex-col flex-wrap text-center items-center bg-white rounded-md gap-6 py-4 px-4">
            <img
              src={spying}
              className="w-full h-[150px] object-cover min-[769px]:w-[320px] h-[180px]"
              alt="A woman ex spying on her"
            />
            <h2 className="text-[#02033B] font-bold text-2xl">
              Signs Your Ex Is Spying On You
            </h2>
            <p>
              In an ideal world, after a relationship ends both you and your ex
              will move on. But what if they can’t let go, and start spying on
              your...
            </p>
            <button className="absolute top-8 left-2 bg-[#F3F8FF] text-[#02033B] max-w-44  rounded-4xl px-6 py-2 whitespace-nowrap cursor-pointer min-[769px]:top-8 left-8">
              Expertise
            </button>
          </div>
          {/* card 2 */}
          <div className="relative flex flex-col flex-wrap items-center text-center bg-white rounded-md gap-6 py-4 px-4">
            <img
              src={samsung}
              className="w-full h-[150px] min-[769px]:w-[320px] h-[180px]"
              alt="A woman ex spying on her"
            />
            <h2 className="text-[#02033B] font-bold text-2xl">
              How to Remove a Hacker from Your Samsung Phone
            </h2>
            <p>
              In an ideal world, after a relationship ends both you and your ex
              will move on. But what if they can’t let go, and start spying on
              your...
            </p>
            <button className="absolute max-w-44 top-8 left-2 bg-[#F3F8FF] text-[#02033B] rounded-4xl px-6 py-2 whitespace-nowrap cursor-pointer min-[769px]:top-8 left-8">
              Guides
            </button>
          </div>
          {/* card 3 */}
          <div className="relative flex flex-col flex-wrap bg-white items-center text-center rounded-md gap-6 py-4 px-4">
            <img
              src={camera}
              className="w-full h-[150px] min-[769px]:w-[320px] h-[180px]"
              alt="A woman ex spying on her"
            />
            <h2 className="text-[#02033B] font-bold text-2xl">
              Is Your Cell Phone Under Surveillance?
            </h2>
            <p>
              In an ideal world, after a relationship ends both you and your ex
              will move on. But what if they can’t let go, and start spying on
              your...
            </p>
            <button className="absolute  max-w-44 top-8 left-2 bg-[#F3F8FF] text-[#02033B] rounded-4xl px-6 py-2 whitespace-nowrap cursor-pointer min-[769px]:top-8 left-8">
              Expertise
            </button>
          </div>
        </div>
      </section>

      {/* Action button */}
      <div className="bg-[#F3F8FF] flex px-20 justify-center text-center items-center pt-20 z-50 pb-6 min-[769px]:pb-16">
        <button className="cursor-pointer whitespace-nowrap text-[#02033B] font-bold shrink-0 gap-1 flex justify-center items-center rounded-full bg-[#FFC247] font-bold py-2 px-4 max-w-64">
          View all insights
          <MoveRight
            size={18}
          className="text-black z-50"/>
        </button>
      </div>
    </>
  );
}