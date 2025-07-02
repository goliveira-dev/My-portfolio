import { useState } from 'react';
import './styles.css'

function ExperiencesSection() {
  const experiencesContents = [
    { title: 'Experiência 1', content: 'Conteúdo da Experiência 1' },
    { title: 'Experiência 2', content: 'Conteúdo da Experiência 2' },
    { title: 'Experiência 3', content: 'Conteúdo da Experiência 3' },
    { title: 'Experiência 4', content: 'Conteúdo da Experiência 4' },
    { title: 'Experiência 5', content: 'Conteúdo da Experiência 5' }
  ]

  const [ExperienceShow, setExperienceShow] = useState('')

  return (
    <section className="experiences-section">
      <div className="experiences-container">
        <div className="experiences-menu">
          {experiencesContents.map((experience, index) => (
            <button
              onClick={() => setExperienceShow(experience.content)}
              key={index}
              className="experiences-menu-button">
              {experience.title}
            </button>
          ))}
        </div>
        <div className="experiences-content">
          <p>{ExperienceShow}</p>
        </div>
      </div>
    </section>
  )
}

export default ExperiencesSection;
// This file is part of the My Portfolio project.