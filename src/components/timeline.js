import React from 'react';

const timeline = () => {
  return (
    <div>
      <section className='colorlib-experience' data-section='timeline'>
        <div className='colorlib-narrow-content'>
          <div className='row'>
            <div
              className='col-md-6 col-md-offset-3 col-md-pull-3 animate-box'
              data-animate-effect='fadeInLeft'
            >
              <span className='heading-meta'>highlights</span>
              <h2 className='colorlib-heading animate-box'>Timeline</h2>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12'>
              <div className='timeline-centered'>
                <article
                  className='timeline-entry animate-box'
                  data-animate-effect='fadeInLeft'
                >
                  <div className='timeline-entry-inner'>
                    <div className='timeline-icon'>
                      <img
                        src='images/hype.png'
                        alt='hype'
                        className='brand_logo'
                      />
                    </div>
                    <div className='timeline-label'>
                      <h2>
                        Jr. SEO Executive at HYPE{' '}
                        <span> September 2020 - Present</span>
                      </h2>
                      <p></p>
                    </div>
                  </div>
                </article>
                <article
                  className='timeline-entry animate-box'
                  data-animate-effect='fadeInLeft'
                >
                  <div className='timeline-entry-inner'>
                    <div className='timeline-icon'>
                      <img
                        src='images/alpgamer.png'
                        alt='alpgamer'
                        className='brand_logo'
                      />
                    </div>
                    <div className='timeline-label'>
                      <h2>
                        Co-Founder ALPGAMER <span>November 2019 - Present</span>
                      </h2>
                      <p></p>
                    </div>
                  </div>
                </article>
                <article
                  className='timeline-entry animate-box'
                  data-animate-effect='fadeInTop'
                >
                  <div className='timeline-entry-inner'>
                    <div className='timeline-icon '>
                      <img
                        src='images/m2l.png'
                        alt='m2l'
                        className='brand_logo'
                      />
                    </div>
                    <div className='timeline-label'>
                      <h2>
                        SEO and Wordpress Developer at M2L{' '}
                        <span>February 2020 - September 2020 </span>
                      </h2>
                      <p></p>
                    </div>
                  </div>
                </article>
                <article
                  className='timeline-entry animate-box'
                  data-animate-effect='fadeInLeft'
                >
                  <div className='timeline-entry-inner'>
                    <div className='timeline-icon'>
                      <img
                        src='images/bigbang-digital.png'
                        alt='bigbang-digital'
                        className='brand_logo'
                      />
                    </div>
                    <div className='timeline-label'>
                      <h2>
                        SEO Intern at Bigbang Digital{' '}
                        <span>December 2019 - February 2020</span>
                      </h2>
                      <p></p>
                    </div>
                  </div>
                </article>

                <article
                  className='timeline-entry begin animate-box'
                  data-animate-effect='fadeInBottom'
                >
                  <div className='timeline-entry-inner'>
                    <div className='timeline-icon color-none'></div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default timeline;
