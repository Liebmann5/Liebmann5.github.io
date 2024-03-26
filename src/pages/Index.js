import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import GithubInfo from '../components/GithubInfo';
import cautionTapeImage from '../static/images/NicePng_caution-tape.png';  // Import the image
import nicksSourceImage from '../static/images/parents_nicks_source.jpg';

const Index = () => (
  <Main
    description={"Nick's personal website. Soon to be the API thing gateway."}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2>Nicks Website...  for now!</h2>
          {/* <h2><Link to="/">Under Construction</Link></h2> */}
          <p>Nick's personal website. Soon to be the API apply program thing gateway</p>
        </div>
        <GithubInfo />
      </header>
      <div className="webpage-contents">
        <p> Welcome to my website. Please feel free to read more <Link to="/about">about me</Link>,
          or you can check out my suggested {' '}
          <Link to="/resources">Resources</Link>!
          {/*<Link to="/resume">resume</Link>, {' '}
          <Link to="/projects">projects</Link>, {' '}
          view <Link to="/stats">site statistics</Link>, {' '}
  or <Link to="/contact">contact</Link> me.*/}
        </p>
        <p> Source available <img src={nicksSourceImage} alt="Nick's Life Source (aka. Picture of my parents)">here</img>.</p>
        <div className="construction">
          <img src={cautionTapeImage} alt="First banner" className="first-banner" />
          {/* <img src="path/to/your/second-banner-image.jpg" alt="Second banner" className="second-banner" />
          <span className="construction-sign">Under Construction</span> */}
        </div>
      </div>
    </article>
  </Main>
);

export default Index;
