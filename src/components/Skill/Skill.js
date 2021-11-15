import React from 'react'
import SkillCard from './SkillCard'

const Skill = () => {
  return (
    <React.Fragment>
      <div className="skill">
        <SkillCard item="Vuejs" percent="90" />
        <SkillCard item="Reactjs" percent="90" />
        <SkillCard item="React Native" percent="80" />
        <SkillCard item="Angularjs" percent="50" />
        <SkillCard item="Redux" percent="50" />
        <SkillCard item="HTML" percent="90" />
        <SkillCard item="CSS" percent="90" />
        <SkillCard item="SCSS" percent="70" />
        <SkillCard item="Typescript" percent="90" />
        <SkillCard item="Javascript" percent="90" />
        <SkillCard item="PostgreSQL" percent="40" />
        <SkillCard item="Nginx" percent="30" />
        {/* <SkillCard item="Agile" percent="90" />
        <SkillCard item="Testing" percent="90" />
        <SkillCard item="Regex" percent="65" /> */}
      </div>

      {/* --- STYLES --- */}
      <style jsx>{`
        .skill {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: center;
          border-radius: 10px;
          padding-bottom: 20px;
        }
      `}</style>
    </React.Fragment>
  )
}

export default Skill
