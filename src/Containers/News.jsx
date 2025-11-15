import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PiArrowRightLight } from "react-icons/pi";
import { data } from "../Constants";
import New from "../Components/New";

const News = () => {
  useEffect(() => {
    document.title = "Bola Ao Cesto | Notícias";
  }, []);

  const [featured, setFeatured] = useState(data.News[0]);
  const [moreNews, setMoreNews] = useState(data.News.slice(1));

  return (
    <div className="bg-bg1 min-h-screen">
      <div className="px-[20px] py-[120px] md:p-[120px] max-w-[1350px] mx-auto">
        <h3 className="capitalize font-orbitron text-royal-blue text-3xl my-[20px] font-light">
          Notícias & Reels
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-[60px] items-center">
          <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
            {featured.type === "video" ? (
              <video
                src={featured.videoUrl}
                controls
                className="w-full h-full object-cover"
              />
            ) : (
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover"
              />
            )}
            <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h2 className="font-bold text-2xl md:text-3xl">{featured.title}</h2>
              <p className="text-sm mt-2 max-w-[80%]">{featured.summary}</p>
              <Link
                to={`#`}
                className="mt-4 inline-flex items-center gap-2 px-6 py-2 rounded-lg bg-yellow font-semibold text-royal-blue hover:bg-yellow/80"
              >
                Ler Mais <PiArrowRightLight />
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <span className="uppercase text-red-600 text-sm font-semibold">
              Destaque
            </span>
            <h1 className="font-bold text-3xl md:text-4xl">{featured.title}</h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              {featured.content?.substring(0, 250)}...
            </p>
            <Link
              to={`#`}
              className="w-[160px] px-6 py-3 rounded-lg bg-royal-blue text-white font-semibold hover:bg-royal-blue/90 text-center"
            >
              Ler Mais
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {moreNews.map((item) => (
            <New
              key={item.id}
              title={item.title}
              image={item.image}
              videoUrl={item.videoUrl}
              type={item.type} 
              id={item.id}
              content={item.content}
              summary={item.summary}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
