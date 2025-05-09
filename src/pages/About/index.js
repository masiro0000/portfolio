import React from 'react';
import { AboutDigestSection } from './AboutDigestSection';
import { aboutList } from '../../data/aboutList';
import { FadeInSection } from '../../components/FadeInSection';

export const AboutContent = () => {
  return (
    <FadeInSection>
      <div className="about_section section">
        <div className="about_header">
          <h2 className="contact_title tracking-in-expand">about</h2>
        </div>

        {aboutList.map((about, index) => (
          <React.Fragment key={index}>
            <AboutDigestSection
              title={about.title}
              subTitle={about.subTitle}
              moreLink={about.link}
            >
                {about.summary}
            </AboutDigestSection>

            <div className="about_second_content">
              <h3 className="about_title">biography</h3>
              {about.biography?.map((bio, i) => (
                <dl key={i} className="about_biography_list">
                  <dd>{bio.year}</dd>
                  <dt>{bio.summary}</dt>
                </dl>
              ))}
            </div>
            <div className="about_third_content">
              <h3 className="about_title">skill</h3>
              <ul className="about_skill_list">
                {about.skill.map((skill, _index) => (
                <li key={_index}>
                  <div className="about_skill_lists">
                    <h4 className="about_skill_title">{skill.name}</h4>
                    <p className="about_skill_category">{skill.category}</p>
                  </div>
                    <p className="about_skill_summary">{skill.summary}</p>
                </li>
                ))}
              </ul>
            </div>
          </React.Fragment>
        ))}
      </div>
    </FadeInSection>
  );
};