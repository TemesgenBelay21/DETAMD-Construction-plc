import { useState } from 'react'
import Reveal from '../Reveal/Reveal'
import { useLanguage } from '../../context/LanguageContext/useLanguage'

const filters = [
  { value: 'all', key: 'projects.filterAll' },
  { value: 'completed', key: 'projects.filterDone' },
  { value: 'under-construction', key: 'projects.filterBuilding' },
]

const projects = [
  {
    id: 'p1',
    status: 'completed',
    image:
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'p2',
    status: 'under-construction',
    image:
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'p3',
    status: 'completed',
    image:
      'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'p4',
    status: 'under-construction',
    image:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'p5',
    status: 'completed',
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'p6',
    status: 'under-construction',
    image:
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80',
  },
]

export default function Projects() {
  const { t } = useLanguage()
  const [filter, setFilter] = useState('all')

  const visibleProjects = projects.filter(
    (project) => filter === 'all' || project.status === filter,
  )

  return (
    <section id="projects" className="section section-alt">
      <div className="container">
        <Reveal className="section-head">
          <span className="section-tag">{t('projects.tag')}</span>
          <h2>{t('projects.title')}</h2>
          <p>{t('projects.subtitle')}</p>
        </Reveal>

        <Reveal delay={100}>
          <div className="filter-bar" role="tablist" aria-label={t('projects.tag')}>
            {filters.map((item) => (
              <button
                key={item.value}
                type="button"
                className={filter === item.value ? 'filter-btn active' : 'filter-btn'}
                onClick={() => setFilter(item.value)}
                role="tab"
                aria-selected={filter === item.value}
              >
                {t(item.key)}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="projects-grid">
          {visibleProjects.map((project, index) => (
            <Reveal key={project.id} delay={index * 80}>
              <a
                className="project-card"
                href="#contact"
                aria-label={`${t(`projects.${project.id}.title`)} — ${t('projects.statusBuilding')}`}
              >
                <div className="project-image">
                  <img
                    src={project.image}
                    alt={t(`projects.${project.id}.title`)}
                    loading="lazy"
                  />
                  <span
                    className={
                      project.status === 'completed'
                        ? 'project-status completed'
                        : 'project-status building'
                    }
                  >
                    {t(
                      project.status === 'completed'
                        ? 'projects.statusDone'
                        : 'projects.statusBuilding',
                    )}
                  </span>
                </div>
                <div className="project-info">
                  <div>
                    <h3>{t(`projects.${project.id}.title`)}</h3>
                    <span className="project-category">
                      {t(`projects.${project.id}.category`)}
                    </span>
                  </div>
                  <span className="project-more">{t('projects.view')}</span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
