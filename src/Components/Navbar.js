import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const navStyle = {
    visibility: isOpen ? 'visible' : 'hidden',
  };
  return (
    <div>
      <header>
        <section className="hamberger">
          <button
            className="mobile-nav-toggle"
            onClick={toggleNav}
            type="button"
          >
            <i className={isOpen ? 'fa fa-window-close' : 'fa fa-bars'} />
          </button>
        </section>
        <section>
          <div className="mobile-head">
            <div>
              <i className="fa fa-search icons" aria-hidden="true" />
            </div>
            <div>
              <a href="/signin">Write a book</a>
            </div>
            <div className="dropdown">
              <span
                className="dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="true"
              >
                En
              </span>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#fench">
                    FR
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <i className="fa fa-toggle-on icons" aria-hidden="true" />
            </div>
          </div>
        </section>
      </header>
      <nav className="nav" style={navStyle}>
        <div className="sec1">
          <div className="nav-items">
            <a href="./">Home</a>
          </div>
          <div className="nav-items">
            <a href="./contact">Contact</a>
          </div>
          <div className="dropdown nav-items">
            <span
              className="dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Categories
            </span>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="/technology">
                  Technology
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/travel">
                  Travel
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/Fashion">
                  Fashion
                </a>
              </li>
            </ul>
          </div>
          <div className="dropdown nav-items">
            <span
              className="dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              pages
            </span>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="/author">
                  Author
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/page">
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="sec2">
          <span>Note</span>
          <span>
            Book <em>.</em>
          </span>
        </div>
        <div className="sec3">
          <div>
            <i className="fa fa-search icons" aria-hidden="true" />
          </div>
          <div>
            <a href="/signin">Login</a>
          </div>
          <div className="dropdown">
            <span
              className="dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="true"
            >
              En
            </span>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#french">
                  FR
                </a>
              </li>
            </ul>
          </div>
          <div>
            <i className="fa fa-toggle-on icons" aria-hidden="true" />
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
