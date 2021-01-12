import React from 'react';

const projects = () => {
  return (
    <div>
      <section className='colorlib-work' data-section='projects'>
        <div className='colorlib-narrow-content'>
          <div className='row'>
            <div
              className='col-md-6 col-md-offset-3 col-md-pull-3 animate-box'
              data-animate-effect='fadeInLeft'
            >
              <span className='heading-meta'>My Work</span>
              <h2 className='colorlib-heading animate-box'>Recent Projects</h2>
            </div>
          </div>
          <div className='row'>
            <div className='row animate-box' data-animate-effect='fadeInLeft'>
              <div className='col-md-5'>
                <img
                  className='project'
                  src='images/alpgamer-website.jpg'
                  alt='alpgamer-website'
                />
                <div className='website text-center'>
                  <p>
                    <a
                      className='btn btn-primary btn-learn'
                      href='https://alpgamer.com/'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      View
                    </a>
                  </p>
                </div>
              </div>
              <div className='col-md-7'>
                <div className=''>
                  <div className=''>
                    <div className=''>
                      <h2>Alpgamer Game Blog</h2>
                      <h3>Website</h3>
                      <p>
                        My website where I do SEO experiments and write game
                        blogs.
                      </p>
                      <div className='my-flex tech'>
                        <div className='desc'>
                          <p className='btn btn-primary btn-learn'>WordPress</p>
                        </div>
                        <div className='desc'>
                          <p className='btn btn-primary btn-learn'>SEO</p>
                        </div>
                        <div className='desc'>
                          <p className='btn btn-primary btn-learn'>Website</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='row animate-box' data-animate-effect='fadeInLeft'>
              <div className='col-md-5 '>
                <img
                  className='project'
                  src='images/keywords-website.jpg'
                  alt='keywords-website'
                />
                <div className='website text-center'>
                  <p>
                    <a
                      className='btn btn-primary btn-learn'
                      href='https://keywordsapp.herokuapp.com/'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      View
                    </a>
                  </p>
                </div>
              </div>
              <div className='col-md-7'>
                <div className=''>
                  <div className=''>
                    <div className=''>
                      <h2>Keywords Searchs And Google Trends</h2>
                      <h3>Tool</h3>
                      <p>
                        Google Suggest Tool +290 Autocomplete Keywords. It lists
                        all of Google search terms based on trending.
                      </p>
                      <p>Contact me to try</p>
                      <div className='my-flex tech'>
                        <div className='desc'>
                          <p className='btn btn-primary btn-learn'>React</p>
                        </div>
                        <div className='desc'>
                          <p className='btn btn-primary btn-learn'>MongoDB</p>
                        </div>
                        <div className='desc'>
                          <p className='btn btn-primary btn-learn'>NodeJS</p>
                        </div>
                        <div className='desc'>
                          <p className='btn btn-primary btn-learn'>API</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='row animate-box' data-animate-effect='fadeInLeft'>
              <div className='col-md-5'>
                <img
                  className='project'
                  src='images/content-website.jpg'
                  alt='content-website'
                />
                <div className='website text-center'>
                  <p>
                    <a
                      className='btn btn-primary btn-learn'
                      href='https://hypecontenttrackapp.herokuapp.com/'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      View
                    </a>
                  </p>
                </div>
              </div>
              <div className='col-md-7'>
                <div className=''>
                  <div className=''>
                    <div className=''>
                      <h2>Content Tracker</h2>
                      <h3>Tool</h3>
                      <p>
                        All content of every website you want is tracked, even
                        if there is no RSS. Keep track of all the content of
                        competitor sites.
                      </p>
                      <p>Contact me to try</p>
                      <div className='my-flex tech'>
                        <div className='desc'>
                          <p className='btn btn-primary btn-learn'>React</p>
                        </div>
                        <div className='desc'>
                          <p className='btn btn-primary btn-learn'>MongoDB</p>
                        </div>
                        <div className='desc'>
                          <p className='btn btn-primary btn-learn'>NodeJS</p>
                        </div>
                        <div className='desc'>
                          <p className='btn btn-primary btn-learn'>API</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default projects;
