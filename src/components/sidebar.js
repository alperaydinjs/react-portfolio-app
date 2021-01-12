import React from 'react';

const sidebar = () => {
  return (
    <div>
      <div>
        <nav
          href='#navbar'
          className='js-colorlib-nav-toggle colorlib-nav-toggle'
          data-toggle='collapse'
          data-target='#navbar'
          aria-expanded='false'
          aria-controls='navbar'
        >
          <i />
        </nav>
        <aside id='colorlib-aside' className='border js-fullheight'>
          <div className='text-center'>
            <div
              className='author-img'
              style={{ backgroundImage: 'url(images/alper.jpg)' }}
            />
            <h1 id='colorlib-logo'>
              <a href='index.html'>Alper Aydın</a>
            </h1>
            <span className='email'>
              <i className='icon-mail'></i> alperaydin1303@gmail.com
            </span>
            <span className='email'>
              <i className='icon-map'></i> Kadıköy/İstanbul
            </span>
            <span className='email'>
              <i className='icon-calender'></i> 13 March 1997
            </span>
          </div>
          <nav id='colorlib-main-menu' role='navigation' className='navbar'>
            <div id='navbar' className='collapse'>
              <ul>
                <li>
                  <a href='#about' data-nav-section='about'>
                    About
                  </a>
                </li>
                <li>
                  <a href='#projects' data-nav-section='projects'>
                    Projects
                  </a>
                </li>
                {/* <li><a href="#blog" data-nav-section="blog">Blog</a></li> */}
                <li>
                  <a href='#timeline' data-nav-section='timeline'>
                    Timeline
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <nav id='colorlib-main-menu'>
            <ul className='my-flex my-flex-center'>
              <li>
                <a
                  href='https://www.linkedin.com/in/alperaydin1303/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <i className='icon-linkedin2' />
                </a>
              </li>
              <li>
                <a
                  href='https://github.com/alperaydinjs'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <i className='icon-github'></i>
                </a>
              </li>
            </ul>
          </nav>
        </aside>
      </div>
    </div>
  );
};

export default sidebar;
