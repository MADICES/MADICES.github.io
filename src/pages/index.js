import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';
import Index from '../../docs/index.mdx';

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      >
      <header className={clsx('hero', styles.heroBanner)}>
        <div className="container">
          <img style={{backgroundColor: 'none', borderRadius: "5px", padding: "10px", paddingLeft: "25px", paddingRight: "25px"}} className="homepage-img" src="img/png/madiices.png"/>
          <h1 className="hero__title">CECAM workshop April 22-25 2024</h1>
          <h2><a href="https://www.zib.de/">Zuse Institute Berlin</a></h2>
        </div>
      </header>
      <main className="main-container">
      <section className={styles.features}>
        <div className="container">
        <Index />
        </div>
      </section>
      </main>
    </Layout>
  );
}

export default Home;
