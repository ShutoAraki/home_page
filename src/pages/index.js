import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
// import Birds from './components/NetworkAnimation';

const features = [
  {
    title: <>Passionate</>,
    description: (
      <>
        I am passionate about mathematics and technology! I believe mathematics can help us understand 
        the complex structures of the universe(s) and technology can turn our creative ideas into reality.
      </>
    ),
  },
  {
    title: <>Curious</>,
    description: (
      <>
        I am a very curious and self-driven individual. In my free time, I love reading books to travel through different
        minds.
      </>
    ),
  },
  {
    title: <>Biased for Action</>,
    description: (
      <>
        I strongly believe in the idea of "bias for action." We need to take action and learn as we move rather than
        sit and think too much before doing anything.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  const [textIndex, setIndex] = useState(0);
  const texts = ["Mathematician",
                 "Computer Scientist",
                 "Data Scientist",
                 "Machine Learning Engineer",
                 "DevOps Engineer",
                 "MLOps Engineer",
                 "AWS Solutions Architect",
                 "Quantum Computing Enthusiast"];

  // Timing for the subtitle
  useEffect(() => {
    const timer = setInterval(() => {
        setIndex(t => (t + 1) % texts.length);
    }, 1000);
    // Clear timeout if the component is unmounted
    return () => clearInterval(timer);
  }, []);

  // useScript
  // useEffect(() => {
  //   const script = document.createElement('script');
  
  //   script.src = "three.r119.min.js";
  //   script.async = true;
  
  //   document.body.appendChild(script);
  
  //   return () => {
  //     document.body.removeChild(script);
  //   }
  // }, []);

  return (
    <Layout
      title={siteConfig.title}
      description="Description will go into a meta tag in <head />">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <script src="three.r119.min.js"></script>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">Solutions Architect at Amazon Web Services</p>
          <p className="hero__subtitle">I am a {texts[textIndex]}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to="http://d115g589pva9pr.cloudfront.net/ShutoArakiResume_Oct2019.pdf">
              Check out my resume!
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
