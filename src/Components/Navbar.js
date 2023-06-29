import React from 'react';
const Navbar = () => (
        <div>
            <header>
            <section className='hamberger'>
              <div><i class="fa fa-bars" aria-hidden="true" id='menu'></i></div>
              <div><i class="fa fa-window-close" aria-hidden="true" id='close'></i></div>
              </section>
              <section>
              <div className='mobile-head'>
              <div><i class="fa fa-search icons" aria-hidden="true"></i></div>
               <div><a href="/signin">Login</a></div>
                <div className="dropdown">
                <span className="dropdown-toggle" type="button"
                  data-bs-toggle="dropdown" aria-expanded="true">
                   En
                  </span>
                    <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">FR</a></li>

                   </ul>
                   </div>
                   <div><i class="fa fa-toggle-on icons" aria-hidden="true"></i></div>
                    </div>
              </section>
            </header>
                <nav className='nav'>
                    <div className='sec1'>
                  <div className='nav-items'><a href='./'>Home</a></div>
                  <div className='nav-items'><a href='./contact'>Contact</a></div>
                  <div className="dropdown nav-items">
                <span className="dropdown-toggle" type="button"
              data-bs-toggle="dropdown" aria-expanded="false">
              Categories
            </span>
            <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/technology">Technology</a></li>
           <li><a className="dropdown-item" href="/travel">Travel</a></li>
              <li><a className="dropdown-item" href="/Fashion">Fashion</a></li>
            </ul>
             </div>
             <div className="dropdown nav-items">
                <span className="dropdown-toggle" type="button"
              data-bs-toggle="dropdown" aria-expanded="false">
             pages
            </span>
            <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/author">Author</a></li>
           <li><a className="dropdown-item" href="/page">Blog</a></li>
              <li><a className="dropdown-item" href="/c">Contact</a></li>
            </ul>
             </div>
                    </div>
                    <div className='sec2'>
                    <span>Note</span>
                    <span>Book <em>.</em></span>
                    </div>
                    <div className='sec3'>
                        <div><i class="fa fa-search icons" aria-hidden="true"></i></div>
                        <div><a href="/signin">Login</a></div>
                        <div className="dropdown">
                       <span className="dropdown-toggle" type="button"
                       data-bs-toggle="dropdown" aria-expanded="true">
                      En
                    </span>
                        <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">FR</a></li>

                   </ul>
                   </div>
                   <div><i class="fa fa-toggle-on icons" aria-hidden="true"></i></div>
                    </div>
                </nav>
        </div>
);

export default Navbar;
