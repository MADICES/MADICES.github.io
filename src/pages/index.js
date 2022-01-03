import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

// const features = [
//   {
//     title: 'Program',
//     link: "\docs\program",
//   },
// ];

// function Feature({ title, link}) {
//   return (
//     <div className={clsx('col col--4', styles.feature)}>
//       <a href={link}><h3>{title}</h3></a>
//     </div>
//   );
// }

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      >
      <header className={clsx('hero', styles.heroBanner)}>
        <div className="container">
          <img className="homepage-img" src="img/svg/c_no_bg.svg"/>
          <h1 className="hero__title">CECAM workshop February 7-9 2022</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
        </div>
      </header>
      <main className="main-container">
        {/* {features && features.length > 0 && ( */}
          <section className={styles.features}>
            <div className="container">
              {/* <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div> */}

              <h2> Description </h2>
              <p>
              Recent advances in the computational sciences allow us to simulate many spectra (e.g., X-ray absorption, infrared/Raman, NMR) in silico. In principle, this could open up unprecedented possibilities for the interpretation of experimental data. 
              </p>
              <p>
              Experimental data, however, comes in various, often undocumented or proprietary formats. In recent efforts, this experimental data is being recorded in electronic lab notebooks and archived with open data formats, aiding and automating crucial metadata capture. However, most of these lab notebooks have no mechanisms to exchange data between each other and even less so with our simulation tools, and typically, exporting data from such notebooks again requires lossy conversion to a chosen file format.
              </p>
              
              <p>
              Standardization is an arduous process, and for a wide enough domain, it is infeasible. Nevertheless, without significant effort, there is a danger that we will not escape the local minima of <a href="https://www.w3.org/DesignIssues/LinkedData.html">“★★★/★★★★★” linked open data</a> (as defined by Tim Berners-Lee).
              </p>

              <p>
              In the case of the interoperability between experimental and computational data, there is the additional difficulty that computational systems are completely described, idealized systems with implicit assumptions, whereas for experimental systems parameters are ill-defined, unknown, or uncertain.  Moreover, we also often miss a link between spectra data and the (meta) data contextualising the sample and its history.
              </p>

              <p>
              How and where can we be interoperable in this setting? How can we make sure that experimental data can readily be consumed by computational tools,  and vice versa, from the bottom-up? How can we share, contextualise and disseminate analysis (e.g., post-processing, peak assignment) in a reproducible way (on platforms such as <a href="https://www.materialscloud.org/">MaterialsCloud</a> or the <a href="https://www.chemotion-repository.net/welcome">Chemotion repository</a>)? What new paradigms could such interoperability enable?
              </p>
              <p>
              At the CECAM MADICES workshop, we will bring together developers, scientists, and data specialists to discuss the hurdles and opportunities of data interoperability in the context of the chemical and materials sciences.  We will strive for general technical recommendations,  with  X-ray absorption spectroscopy as the first prototype use case.
              </p>
            </div>
          </section>
        {/* // )} */}
      </main>
    </Layout>
  );
}

export default Home;
