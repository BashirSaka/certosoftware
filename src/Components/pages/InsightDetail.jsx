

// src/pages/InsightDetail.jsx
import { useParams, Link } from "react-router-dom";
import { insights } from "../data/insights";

export default function InsightDetail() {
  const { slug } = useParams();
  const article = insights.find((item) => item.slug === slug);

  if (!article) {
    return (
      <section className="min-h-[60vh] flex flex-col items-center justify-center gap-4 bg-[#F3F8FF]">
        <p className="text-[#02033B]">Article not found.</p>
        <Link to="/insights" className="text-[#4335DE] underline">
          Back to all insights
        </Link>
      </section>
    );
  }

  return (
    <section className="bg-[#F3F8FF] px-6 py-16 min-[769px]:px-20 flex flex-col items-center">
      <img
        src={article.image}
        className="w-full max-w-2xl h-[300px] object-cover rounded-md mb-8"
        alt={article.title}
      />
      <span className="text-xs font-bold text-[#4335DE] mb-2">
        {article.tag}
      </span>
      <h1 className="text-[#02033B] font-bold text-3xl max-w-2xl text-center mb-6">
        {article.title}
      </h1>
      <p className="text-[#02033B] max-w-2xl">{article.body}</p>
    </section>
  );
}