import React, { useEffect, useState } from "react";
import New from "../Components/New";
import { data } from "../Constants";
import { useParams } from "react-router-dom";
const SearchResults = () => {
  const { searched } = useParams();
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    let results = data.News.filter((data) =>
      data.title.toLowerCase().includes(searched.toLowerCase())
    );
    setSearchResults(results);
  };

  useEffect(() => {
    document.title = `${searched} | BAC`;

    handleSearch();
  }, [searched]);
  return (
    <div className="px-[20px] py-[120px] md:p-[120px]  bg-bg1 flex justify-start items-center min-h-screen flex-col">
      <h3 className=" capitalize font-orbitron text-royal-blue text-3xl my-[20px] font-light">
        {searchResults.length === 0 ? "No Search Results" : "Search Results"}
      </h3>

      <div className=" container w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {searchResults.map((news, id) => (
          <New
            key={id}
            title={news.title}
            image={news.image}
            id={news.id}
            content={news.content}
            summary={news.summary}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
