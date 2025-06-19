import React from "react";
import polygon from "../../assets/polygon.png";

const SkillsCard = ({ skillImage, skillName }) => {
  return (
    <div className="h-full w-full relative flex flex-col items-center justify-center">
      <img src={polygon} className="h-[5.5rem]" />
      <div className="absolute top-5 text-5xl">{skillImage}</div>
      <h3 className="mt-2 text-start text-[#517293]">{skillName}</h3>
    </div>
  );
};

export default SkillsCard;
