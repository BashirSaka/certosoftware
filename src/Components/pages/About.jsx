// src/pages/About.jsx
const stories = [
  {
    id: 1,
    image: "https://placehold.co/400x300/4335DE/ffffff?text=Our+Founding",
    title: "How Certo started",
    text: "Certo began with a simple frustration: there was no easy way for everyday people to check if their phone had been compromised. We set out to build one, and haven't stopped since.",
  },
  {
    id: 2,
    image: "https://placehold.co/400x300/FFC247/02033B?text=1M+Scans",
    title: "1 million scans and counting",
    text: "From a small team to a trusted name in mobile security, our scanning engine has now helped over a million people check their devices for spyware, keyloggers, and hidden threats.",
  },
  {
    id: 3,
    image: "https://placehold.co/400x300/02033B/ffffff?text=Recognition",
    title: "Recognized in the press",
    text: "Certo's spyware detection technology has been featured across major tech and security publications, helping spread awareness of mobile privacy threats worldwide.",
  },
];

function StoryCard({ story }) {
  return (
    <div className="w-full max-w-sm h-[420px] rounded-2xl border border-gray-200 overflow-hidden flex flex-col bg-white shadow-sm">
      <img
        src={story.image}
        alt={story.title}
        className="w-full h-48 object-cover shrink-0"
      />
      <div className="p-5 flex-1 flex flex-col overflow-hidden">
        <h3 className="text-[#02033B] font-bold text-lg mb-2 line-clamp-2">
          {story.title}
        </h3>
        <p className="text-sm text-gray-600 line-clamp-5">{story.text}</p>
      </div>
      <button className="cursor-pointer bg-[#F3F8FF] hover:bg-gray-100 text-[#4335DE] font-semibold py-3 text-center transition-colors shrink-0">
        Read More
      </button>
    </div>
  );
}

export default function About() {
  return (
    <section className="bg-[#F3F8FF] px-6 py-16 min-[769px]:px-20 flex flex-col items-center">
      <h1 className="text-[#02033B] font-bold text-3xl min-[769px]:text-4xl text-center mb-4">
        Our story
      </h1>
      <p className="text-[#02033B] text-center max-w-lg mb-16">
        Find out why thousands trust Certo to secure their mobile world, and how
        we got here.
      </p>

      <div className="flex flex-col min-[769px]:flex-row justify-center gap-6 w-full max-w-6xl">
        {stories.map((story) => (
          <StoryCard key={story.id} story={story} />
        ))}
      </div>
    </section>
  );
}
