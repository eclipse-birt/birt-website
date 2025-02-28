/// Compex Systemhaus GmbH, Heidelberg, Germany
/// Loetz GmbH & Co KG, Heidelberg, Germany

import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

function Hello() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout title="Hello">

      <header className={clsx('hero hero--secondary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">BIRT - Download Page</h1>
          <p className="hero__subtitle">{siteConfig.tagline}
          </p>
        </div>
      </header>

      <div
        style={{
          margin: '50px',
        }}>         
          <div
            style={{
            margin: '0px',
            fontSize: '20px',
            }}>
                      
            <strong>
            <center>Please read the following instructions before downloading the templates and examples.
            </center>
            </strong>
            <br/><br/>
            </div>
      
          < ul>
              <li>Use your browser to download the reports. </li>
              <li>Unzip the templates and save the file into an Eclipse project directory. 
                (See the next page if you don't yet have a project.)</li>
              <li>Within Eclipse, select your project in the Navigator view and choose Refresh from the right-click context menu.</li>
              <li>Double-click the report to open it in the BIRT report designer.</li>
            </ul>
            <br/><br/>

          <div class="alert alert--primary" role="alert">
            <center>
              <button class="button button--lg button--primary">
                <a href="https://github.com/eclipse-birt/birt/tree/master/UI/org.eclipse.birt.report.designer.samplereports/samplereports/Reporting%20Feature%20Examples" download>Click to Download Templates and Examples</a>
              </button> 
            </center>
          </div>

          <br/><br/>

        <div class="margen--vert--lg">
            <nav class="pagination-nav">
              <div class="pagination-nav__item">
                <a class="pagination-nav__link" href="/docs/template-introduction">
                  <div class="pagination-nav__sublabel">Previous</div>
                  <div class="pagination-nav__label">« Templates and Examples</div>
                </a>
              </div>
              <div class="pagination-nav__item pagination-nav__item--next">
                <a class="pagination-nav__link" href="/docs/template-sample-database">
                  <div class="pagination-nav__sublabel">Next</div>
                  <div class="pagination-nav__label">Sample Database »</div>
                </a>
              </div>
            </nav>
        </div>
      </div>
  </Layout>
  );
}

export default Hello;

