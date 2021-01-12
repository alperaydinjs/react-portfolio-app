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
                        SEO Account Executive at HYPE{' '}
                        <span> September 2020 - Present</span>
                      </h2>
                      <p>
                        I recently have joined the Juniper Networs as a Software
                        Developer-Intern in the DevOps team. My major part of
                        the work has been into the field of creating sustainable
                        and flexible CI/CD (Continuous Integration & Continuous
                        Development) pipelines which enables developers at
                        Juniper to do rapid development. I am also exploring the
                        role of container technology like Docker and
                        container-orchrastation technologies like K8s, Swarm to
                        create industry standard production environments.
                      </p>
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
                      <p>
                        I have completed my higher secondary education with
                        major subjects as Physics,Chemistry & Maths with 91
                        merit. During my time at school, I have developed
                        interest in solving complex problems of the fundamental
                        physics which helped me to improve my understanding of
                        any problem and also my mathematical skills to actually
                        solve the problems.
                      </p>
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
                      <p>
                        I am pursuing my under-graduation studies with major in
                        I.C.T.(Information & Communication Technology). I have
                        taken courses like DSA, OOPs, Computer Networks, IOT,
                        Web-Data Management over the years and have better
                        understanding of these subjects.I have also been part of
                        S.B.G.(Student Body Govenance) scince my first year of
                        college.
                      </p>
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
                      <p>
                        I have completed my higher secondary education with
                        major subjects as Physics,Chemistry & Maths with 91
                        merit. During my time at school, I have developed
                        interest in solving complex problems of the fundamental
                        physics which helped me to improve my understanding of
                        any problem and also my mathematical skills to actually
                        solve the problems.
                      </p>
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
