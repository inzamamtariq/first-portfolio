import React from "react";
import Skill from "./Skill";

const SkillList = () => {
  return (
    <div className="skill-list">
      <Skill skill={"JavaScript"} emoji="💪" color="gray" />
      <Skill skill={"Java"} emoji="💪" color="red" />
      <Skill skill={"Springboot"} emoji="💪" color="green" />
      <Skill skill={"MySQL"} emoji="💪" color="navy" />
      <Skill skill={"KAFKA"} emoji="💪" color="magenta" />
      <Skill skill={"React"} emoji="💪" color="cyan" />
      <Skill skill={"Javascript"} emoji="💪" color="yellow" />
      <Skill skill={"OOP"} emoji="💪" color="orange" />
      <Skill skill={"MongoDb"} emoji="💪" color="purple" />
    </div>
  );
};

export default SkillList;
