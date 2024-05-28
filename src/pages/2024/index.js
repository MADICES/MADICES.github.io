import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Index from "../../../docs/2024/index.mdx";

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout>
      <header className="hero">
        <div className="container">
          <img className="homepage-img" src="img/png/madiices.png" />
          <h1 className="hero__title">
            Machine actionable data for chemical sciences
          </h1>
          <h2 className="hero__subtitle">CECAM workshop April 22-25 2024</h2>
          <h3>
            <a href="https://www.zib.de/" target="_blank">
              Zuse Institute Berlin
            </a>
          </h3>
        </div>
      </header>
      <main className="main-container">
        <section className="features">
          <div className="container">
            <Index />
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
