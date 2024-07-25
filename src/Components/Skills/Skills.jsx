import React from 'react';
import './Skills.css'


const Skills = ({allSkills}) => {
  
  const renderSkills = (category) => {
    return allSkills
      .filter(skill => skill.category === category)
      .map((skill, index) => (
        <div key={index} className='SkillIcon'>
          {skill.icon}
        </div>
      ));
  };


  return (
    <div className='Skills col-9'>
      <div className='SkillsBlock'>
        <h3>Lenguajes de programación</h3>
        <div className='SkillIcons'>
          {renderSkills('lenguaje')}
        </div>
      </div>
      <div className='SkillsBlock'>
        <h3>Herramientas de desarrollo</h3>
        <div className='SkillIcons'>
          {renderSkills('tools')}
        </div>
      </div>
      <div className='SkillsBlock'>
        <h3>Herramientas de auditoria</h3>
        <div className='SkillIcons'>
          {renderSkills('auditory')}
        </div>
      </div>
      <div className='SkillsBlock'>
        <h3>Skills developer</h3>
        <div className='SkillIcons'>
          {renderSkills('developer')}
        </div>
      </div>
    </div>
  )
}

export default Skills
