import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import { Card } from "react-bootstrap";

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout>
      <header className="hero">
        <div className="container">
          <img className="homepage-img" src="img/svg/c_no_bg.svg" />
          <h1 className="hero__title">
            Machine actionable data for chemical sciences
          </h1>
          <h2 className="hero__subtitle">
            Bridging experiments, simulations, and machine learning
          </h2>
        </div>
      </header>
      <main className="main-container">
        <section className="features">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <Card>
                  <Card.Body>
                    <Card.Title>
                      <a href="/docs/2022">2022 virtual workshop</a>
                    </Card.Title>
                    <Card.Text>
                      The first MADICES workshop was held virtually in February
                      2022. Click here to learn more about the workshop.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-6">
                <Card>
                  <Card.Body>
                    <Card.Title>
                      <a href="/docs/2024">2024 workshop in Berlin</a>
                    </Card.Title>
                    <Card.Text>
                      The second MADICES workshop was held in Berlin in April
                      2024. Click here to learn more about the workshop.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <hr />
        <section>
          <div className="container">
            <h2>Acknowledgements</h2>
            <p>
              MADICES is partly supported by the Open Research Data Program of
              the ETH Board through the{" "}
              <a href="https://ord-premise.org" target="_blank">
                PREMISE Establish project
              </a>
              .
            </p>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
