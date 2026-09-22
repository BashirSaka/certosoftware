import { Link } from "react-router-dom";
import { MoveRight } from "lucide-react";
import { insights } from "../data/insights";

export default function Latestinsight() {
  return (
    <>
      <section className="pt-8 bg-[#F3F8FF] flex flex-col justify-center min-[769px]:px-20 min-[769px]:pt-16">
        <div className="flex justify-center">
          <h1 className="pb-6 text-[#02033B] font-bold text-4xl min-[769px]:text-5xl min-[769px]:pb-16">
            Latest insights
          </h1>
        </div>

        <div className="grid grid-cols-1 justify-center gap-6 relative min-[769px]:grid-cols-3">
          {insights.map((item) => (
            <Link
              key={item.slug}
              to={`/insights/${item.slug}`}
              className="relative flex flex-col flex-wrap text-center items-center bg-white rounded-md gap-6 py-4 px-4"
            >
              <img
                src={item.image}
                className="w-full h-[150px] object-cover min-[769px]:w-[320px]"
                alt={item.title}
              />
              <h2 className="text-[#02033B] font-bold text-2xl">
                {item.title}
              </h2>
              <p>{item.excerpt}</p>
              <span className="absolute top-8 left-2 bg-[#F3F8FF] text-[#02033B] max-w-44 rounded-4xl px-6 py-2 whitespace-nowrap min-[769px]:top-8 min-[769px]:left-8">
                {item.tag}
              </span>
            </Link>
          ))}
        </div>
      </section>

      <div className="bg-[#F3F8FF] flex px-20 justify-center text-center items-center pt-20 z-50 pb-6 min-[769px]:pb-16">
        <Link
          to="/insights"
          className="cursor-pointer whitespace-nowrap text-[#02033B] font-bold shrink-0 gap-1 flex justify-center items-center rounded-full bg-[#FFC247] font-bold py-2 px-4 max-w-64"
        >
          View all insights
          <MoveRight size={18} className="text-black z-50" />
        </Link>
      </div>
    </>
  );
}
