import React from 'react'
import './SkillsList.css'
import Skills from '../Skills/Skills'
import { getSkill } from '../../DateSkills'
import { useState, useEffect } from 'react'

const SkillsList = () => {
  const [allSkills, setAllSkills] = useState([]);

  useEffect(() => {
    getSkill().then((skills) => {
      setAllSkills(skills);
    });
  }, []);

  return (
    <div className='SkillsList col-12' id='Skills'>
        <Skills allSkills={allSkills}/>
    </div>
  )
}

export default SkillsList

