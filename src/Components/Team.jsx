import React from "react";

const Team = ({ team }) => {
  return (
    <div
      className={`${
        team.id % 2 === 1 ? "justify-start" : "justify-end"
      } flex w-full items-center `}
    >
      <div
        className={`${
          team.id % 2 === 1
            ? "justify-start md:flex-row bg-yellow/20"
            : "justify-start md:flex-row-reverse"
        } flex w-full flex-col items-center px-[20px] md:px-[100px] gap-[20px] min-h-[400px] md:min-h-[500px] transition-all duration-300`}
      >
        <img
          src={team.picture}
          className="w-full md:w-1/2 rounded-xl object-contain h-[400px]"
        />
        <div className=" w-full md:w-1/2 flex flex-col gap-2 items-start py-5 md:py-0">
          <h2 className="font-sans font-bold  text-[30px]">{team.name}</h2>

          <p className="font-sans font-light ">{team.quote}</p>

          <p className="font-sans font-light text-royal-blue/70">
            {team.position}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Team;
