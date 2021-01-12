import React from 'react';

const about = () => {
  return (
    <div>
      <section className='colorlib-about' data-section='about'>
        <div className='colorlib-narrow-content'>
          <div className='row'>
            <div className='col-md-12'>
              <div
                className='row row-bottom-padded-sm animate-box'
                data-animate-effect='fadeInLeft'
              >
                <div className='col-md-12'>
                  <div className='about-desc'>
                    <span className='heading-meta'>About Us</span>
                    <h2 className='colorlib-heading'>Who Am I?</h2>
                    <p>I am a gamer, a developer and a self-learner. </p>
                    <p>
                      Professional SEO Analyst with 2+ years of experience in
                      digital marketing. as SEO Analyst, I have managed more
                      than 30 different websites. I have reached 400k monthly
                      clicks in 5 months with my new opened website. I take an
                      in-depth look at SEO and follow the trends constantly.
                    </p>
                  </div>
                  <div className='my-flex'>
                    <div className='desc'>
                      <p>
                        <a
                          className='btn btn-primary btn-learn'
                          href='https://drive.google.com/file/d/1A5Sy09dInhqF28fu6dLEEbeKzFzjW3D0/view?usp=sharing'
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          View CV <i className='icon-download4' />
                        </a>
                      </p>
                    </div>
                    <div className='desc'>
                      <p>
                        <a
                          className='btn btn-primary btn-learn'
                          href='https://github.com/alperaydinjs'
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          View Projects <i className='icon-target3' />
                        </a>
                      </p>
                    </div>
                    <div className='desc'>
                      <p>
                        <a
                          className='btn btn-primary btn-learn'
                          href='https://alpgamer.com/'
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          Game Blog <i className='icon-steam' />
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='colorlib-about'>
        <div className='colorlib-narrow-content'>
          <div className='row'>
            <div
              className='col-md-6 col-md-offset-3 col-md-pull-3 animate-box'
              data-animate-effect='fadeInLeft'
            >
              <span className='heading-meta'>What I do?</span>
              <h2 className='colorlib-heading'>
                Here are some of my expertise
              </h2>
            </div>
          </div>
          <div className='row row-pt-md'>
            <div className='col-md-4 text-center animate-box'>
              <div className='services color-1'>
                <span className='icon'>
                  <i className='icon-code' />
                </span>
                <div className='desc'>
                  <h3>Web Development </h3>
                  <p>I have experience building websites using Wordpress</p>
                  <p>I have 3 Wordpress site I developed myself</p>
                </div>
              </div>
            </div>
            <div className='col-md-4 text-center animate-box'>
              <div className='services color-3'>
                <span className='icon'>
                  <i className='icon-spanner' />
                </span>
                <div className='desc'>
                  <h3>TOOLS</h3>
                  <p>
                    I have experience building scraping tools using JavaScript,
                    React, Nodejs, Express, MongoDB
                  </p>
                  <p>I have 2 scraping tools I developed myself</p>
                </div>
              </div>
            </div>
            <div className='col-md-4 text-center animate-box'>
              <div className='services color-5'>
                <span className='icon'>
                  <i className='icon-zoom-outline' />
                </span>
                <div className='desc'>
                  <h3>SEO</h3>
                  <p>
                    I have experience at Technical SEO, Content SEO and Backlink
                  </p>
                  <p>I have experience at more than 30 different Websites</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default about;
