import React from "react";
import { Link } from "react-router-dom";
const PageNotFound = () => {
  React.useEffect(() => {
    document.title = "Page Not Found | On Court";
  }, []);

  return (
    <div
      className="pt-[100px] bg-white flex justify-center items-center h-screen flex-col relative"
      style={{
        backgroundImage: "url('/404bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>{" "}
      <div className="relative p-[40px] bg-slate-100/80 rounded-xl">
        <h1 className="text-[120px] text-royal-blue/90 font-bold flex items-baseline">
          404,{" "}
          <span className="text-[30px] font-extralight text-green">
            Página não encontrada!
          </span>
        </h1>
      </div>
      <Link
        to="/"
        className="relative w-[150px] mt-5 text-white bg-gradient-to-br from-blue-100 to-yellow hover:bg-gradient-to-bl font-semibold rounded-lg text-sm px-5 py-3 text-center me-2 mb-2 text-royal-blue"
      >
        Voltar
      </Link>
    </div>
  );
};

export default PageNotFound;
