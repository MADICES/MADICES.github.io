import React from "react";
import { Card } from "react-bootstrap";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout>
      <header className="hero">
        <div className="container">
          <img className="homepage-img" src="img/svg/c_no_bg.svg" />
          <h1 className="hero__title">
            Machine-Actionable Data Interoperability for the Chemical Sciences
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
              <div className="col-md-4 mb-2">
                <a href="/docs/2022">
                  <Card className="btn btn-brand">
                    <Card.Body>
                      <Card.Title>MADICES 2022</Card.Title>
                      <Card.Text>February 7-9, 2022 (virtual)</Card.Text>
                    </Card.Body>
                  </Card>
                </a>
              </div>
              <div className="col-md-4 mb-2">
                <a href="/docs/2024">
                  <Card className="btn btn-brand">
                    <Card.Body>
                      <Card.Title>MADICES 2024</Card.Title>
                      <Card.Text>April 22-25, 2024 (Berlin)</Card.Text>
                    </Card.Body>
                  </Card>
                </a>
              </div>
              <div className="col-md-4 mb-2">
                <a href="/docs/2025">
                  <Card className="btn btn-brand">
                    <Card.Body>
                      <Card.Title>MADICES 2025</Card.Title>
                      <Card.Text>October 20-24, 2025 (Switzerland)</Card.Text>
                    </Card.Body>
                  </Card>
                </a>
              </div>
            </div>
          </div>
        </section>
        <hr />
        <section>
          <div className="container">
            <p className="acknowledgements">
              MADICES is supported by the Open Research Data Program of the ETH
              Board through the{" "}
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
