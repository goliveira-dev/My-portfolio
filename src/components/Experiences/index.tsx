import { useState } from 'react';
import './styles.css'
import { experiencesContents } from './experiences';
import { experiencesButtonStyle, experiencesContainerStyle, experiencesContentStyle, experiencesMenuStyle, experiencesSectionStyle } from './styles';

function ExperiencesSection() {

  const [ExperienceShow, setExperienceShow] = useState('teste')

  return (
    <section className={`${experiencesSectionStyle}`}>
      <h1>Minhas experiências</h1>
      <div className={experiencesContainerStyle}>
        <div className={experiencesMenuStyle}>
          {experiencesContents.map((experience, index) => (
            <button
              onClick={() => setExperienceShow(experience.content)}
              key={index}
              className={`${experiencesButtonStyle} test-button`}>
              {experience.title}
            </button>
          ))}
        </div>
        <div className={experiencesContentStyle}>
          <p className='w-100'>{ExperienceShow}</p>
        </div>
      </div>
    </section>
  )
}

export default ExperiencesSection;
// This file is part of the My Portfolio project.