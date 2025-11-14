import React from "react";
import { Link } from "react-router-dom";

const New = ({ title, image, videoUrl, type, id, summary }) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg bg-white group hover:shadow-xl transition">
      {type === "video" ? (
        <video
          src={videoUrl}
          controls
          className="w-full h-[250px] object-cover"
        />
      ) : (
        <img
          src={image}
          alt={title}
          className="w-full h-[250px] object-cover group-hover:scale-105 transition-transform duration-500"
        />
      )}
      <div className="p-4">
        <h3 className="font-semibold text-lg text-royal-blue mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-3">{summary}</p>
        <Link
          to={`/noticias/${id}`}
          className="inline-block px-4 py-2 bg-royal-blue text-white rounded-lg text-sm hover:bg-royal-blue/90"
        >
          Ler Mais
        </Link>
      </div>
    </div>
  );
};

export default New;
