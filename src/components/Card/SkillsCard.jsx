import React from 'react'
import polygon from "../../assets/polygon.png"


const SkillsCard = ({
  skillImage,
  skillName
}) => {
  return (
    <div className='h-full w-full relative'>
      <img src={polygon} className='h-[5.5rem]'/>
      <div className='text-[3rem] absolute left-5 top-5'>{skillImage}</div>
      <h3 className='text-center mr-29 mt-2'>{skillName}</h3>
    </div>
  )
}

export default SkillsCard
