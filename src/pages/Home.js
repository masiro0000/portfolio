import React from 'react';
import { Link } from 'react-router-dom';
import { AboutDigestSection } from './About/AboutDigestSection';
import { WorksDigestSection } from './Works/WorksDigestSection';
import { workList } from '../data/workList';
import { aboutList } from '../data/aboutList';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { FadeInSection } from '../components/FadeInSection';

export const Home = () => {  
  return (
    <>
    <div className="viewport">
      <div className="viewport_innner">
        <Splide options={{ 
          arrows: false,
          pauseOnHover: false,
          autoplay: true,
          interval: 9000,
          speed: 1000,
          pauseOnFocus: false,
          type: 'loop',
          rewind: true,
          pagination: false,
          }}>
          {workList.map((image, index) => (
            <SplideSlide key={index}>
              <img src={`${process.env.PUBLIC_URL}/images/${image.imageName01}`} alt={image.title} />
            </SplideSlide>
          ))}
        </Splide>
      </div>
      <div id="home_section" className="home_section">
        <p className="home_text">mashita aya</p>
        <h2 aria-hidden="true" translate="no" className="home_title text-wrap">
          {"portfolio site".split("").map((char, i) => (
            <span
              className="parts"
              style={{ "--index": i }}
              key={i}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h2>
        <div className="left_decoration">Web Site Design</div>
        <div className="right_decoration">Application Design</div>
      </div>
    </div>

    <FadeInSection>
    <div className="about_section">
      <h2 className="about_title contact_title">about</h2>
      {aboutList.map((about, index) => (
        <AboutDigestSection
          key={index}
          title={about.title}
          subTitle={about.subTitle}
          moreLink={about.link}
        >
            {about.summary}
        </AboutDigestSection>
      ))}
      <div className="about_button">
        <Link
          to="/about/content"
          className="about_link normal_btn"
        >
          more
        </Link>
      </div>
    </div>
		</FadeInSection>

    <FadeInSection>
      <div id="works_section" className="works_section">
        <h2 className="works_title contact_title">works</h2>
        <div className="works_inner">
          {workList.map((work, index) => (
            <WorksDigestSection
              key={index}
              id={work.id}
              title={work.title}
              tag={work.tag}
              imageName={work.imageName01}
              detail={work.detail}
            >
              {work.summary}
            </WorksDigestSection>
          ))}
        </div>
        <div className="works_button">
          <Link
            to="/works/content"
            className="works_link normal_btn"
          >
            more
          </Link>
        </div>
      </div>
    </FadeInSection>
  </>
  );
};