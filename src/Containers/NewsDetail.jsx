import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { data } from "../Constants";

const NewsDetail = () => {
  const { news_id } = useParams();
  const [searchResults, setSearchResults] = useState();

  const handleSearch = () => {
    let results = data.News.filter((data) => `${data.id}` === news_id);
    setSearchResults(results[0]);
  };

  useEffect(() => {
    document.title = `Bola Ao Cesto | Notícias`;
    handleSearch();
  }, [news_id]);

  return (
    <div className="bg-white min-h-screen w-full pt-[100px]">
      {!searchResults ? (
        <div className="flex justify-center items-center h-[60vh]">
          <h3 className="capitalize font-orbitron text-royal-blue text-3xl font-light">
            Notícia não encontrada!
          </h3>
        </div>
      ) : (
        <div className="max-w-[1200px] mx-auto px-5 md:px-10">
          {/* Hero Image */}
          <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg">
            <img
              src={searchResults?.image}
              alt="news"
              className="w-full h-full object-cover transform hover:scale-105 transition duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
            <h1 className="absolute bottom-6 left-6 text-white font-bold text-3xl md:text-5xl max-w-[90%] drop-shadow-lg">
              {searchResults?.title}
            </h1>
          </div>

          {/* Content */}
          <div className="mt-10 flex flex-col gap-6">
            <p className="text-lg font-medium text-gray-600 border-l-4 border-royal-blue pl-4 italic">
              {searchResults?.summary}
            </p>

            <p className="font-sans text-lg leading-relaxed text-gray-800 whitespace-pre-line">
              {searchResults?.content}
            </p>
          </div>

          {/* Author + Date */}
          <div className="flex justify-between items-center mt-12 border-t border-gray-200 pt-6 text-sm text-gray-600">
            <p className="font-semibold text-royal-blue">
              ✍️ Johnatan Evangelo Smith
            </p>
            <p className="italic">{new Date().toDateString()}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsDetail;
