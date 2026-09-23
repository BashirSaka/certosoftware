import { Link } from "react-router-dom";
import { MoveRight } from "lucide-react";
import { insights } from "../data/insights";

export default function Latestinsight() {
  return (
    <>
      <section className="pt-8 bg-[#F3F8FF] flex flex-col justify-center px-6 min-[769px]:px-20 min-[769px]:pt-16">
        <div className="max-w-6xl mx-auto w-full">
          <div className="flex justify-center">
            <h1 className="pb-6 text-[#02033B] font-bold text-4xl min-[769px]:text-5xl min-[769px]:pb-16 text-center">
              Latest insights
            </h1>
          </div>

          <div className="grid grid-cols-1 justify-center gap-6 min-[769px]:grid-cols-3">
            {insights.map((item) => (
              <Link
                key={item.slug}
                to={`/insights/${item.slug}`}
                className="flex flex-col text-center items-center bg-white rounded-xl gap-6 p-4 shadow-xs hover:shadow-md transition-all duration-200"
              >
                <div className="relative w-full h-[180px] min-[769px]:h-[200px] rounded-lg overflow-hidden shrink-0">
                  <img
                    src={item.image}
                    className="w-full h-full object-cover"
                    alt={item.title}
                  />
                  <span className="absolute top-3 left-3 min-[769px]:top-4 min-[769px]:left-4 bg-[#F3F8FF] text-[#02033B] text-sm font-semibold rounded-full px-5 py-1.5 shadow-xs whitespace-nowrap">
                    {item.tag}
                  </span>
                </div>
                <h2 className="text-[#02033B] font-bold text-2xl">
                  {item.title}
                </h2>
                <p className="text-gray-600 leading-relaxed">{item.excerpt}</p>
              </Link>
            ))}
          </div>

          <div className="flex justify-center text-center items-center pt-14 pb-8 min-[769px]:pt-20 min-[769px]:pb-16">
            <Link
              to="/insights"
              className="cursor-pointer whitespace-nowrap text-[#02033B] font-bold shrink-0 gap-2 flex justify-center items-center rounded-full bg-[#FFC247] hover:bg-[#eab03d] transition-colors py-2.5 px-6 max-w-64"
            >
              View all insights
              <MoveRight size={18} className="text-black" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
