

// src/pages/Insights.jsx
import { Link } from "react-router-dom";
import { insights } from "../../Components/data/insights";

export default function Insights() {
  return (
    <section className="bg-[#F3F8FF] px-6 py-16 min-[769px]:px-20">
      <h1 className="text-[#02033B] font-bold text-4xl mb-10 text-center">
        All insights
      </h1>
      <div className="grid grid-cols-1 min-[769px]:grid-cols-3 gap-6">
        {insights.map((item) => (
          <Link
            key={item.slug}
            to={`/insights/${item.slug}`}
            className="flex flex-col text-center items-center bg-white rounded-md gap-4 py-4 px-4"
          >
            <img
              src={item.image}
              className="w-full h-[180px] object-cover"
              alt={item.title}
            />
            <span className="text-xs font-bold text-[#4335DE]">
              {item.tag}
            </span>
            <h2 className="text-[#02033B] font-bold text-xl">{item.title}</h2>
            <p className="text-sm text-gray-600">{item.excerpt}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}