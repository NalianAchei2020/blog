import React from 'react';

const Navbar = () => {
    return (
        <div>
            <header>
                <div className='nav'>
                    <div className='sec1'>
                  <div><a href='/'>Home</a></div>
                  <div><a href='/contact'>Contact</a></div>
                  <div className="dropdown">
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
             <div className="dropdown">
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
                        <div>icon</div>
                        <div>icon2</div>
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
                        <div>

                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Navbar;
