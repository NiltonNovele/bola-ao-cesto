import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { data } from "../Constants";

const NewsDetail = () => {
  const { news_id } = useParams();
  const [newsItem, setNewsItem] = useState(null);

  useEffect(() => {
    const result = data.News.find((item) => `${item.id}` === news_id);
    setNewsItem(result);
    document.title = result
      ? `Bola Ao Cesto | ${result.title}`
      : "Bola Ao Cesto | Notícias";
  }, [news_id]);

  if (!newsItem) {
    return (
      <div className="flex justify-center items-center h-[60vh] bg-white min-h-screen">
        <h3 className="capitalize font-orbitron text-royal-blue text-3xl font-light">
          Notícia não encontrada!
        </h3>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen w-full pt-[100px]">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg">
          {newsItem.type === "video" ? (
            <video
              src={newsItem.videoUrl}
              controls
              className="w-full h-full object-cover"
            />
          ) : (
            <img
              src={newsItem.image}
              alt={newsItem.title}
              className="w-full h-full object-cover transform hover:scale-105 transition duration-700"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
          <h1 className="absolute bottom-6 left-6 text-white font-bold text-3xl md:text-5xl max-w-[90%] drop-shadow-lg">
            {newsItem.title}
          </h1>
        </div>

        <div className="mt-10 flex flex-col gap-6">
          <p className="text-lg font-medium text-gray-600 border-l-4 border-royal-blue pl-4 italic">
            {newsItem.summary}
          </p>

          <p className="font-sans text-lg leading-relaxed text-gray-800 whitespace-pre-line">
            {newsItem.content}
          </p>
        </div>

        <div className="flex justify-between items-center mt-12 border-t border-gray-200 pt-6 text-sm text-gray-600">
          <p className="font-semibold text-royal-blue">✍️ Johnatan Evangelo Smith</p>
          <p className="italic">{new Date().toDateString()}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
