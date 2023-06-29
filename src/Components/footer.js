import React from 'react';

const Footer = () => (
        <div>
            <footer className='footer'>
                <section>
                <div className='sec2 mb-3'>
                    <span>Note</span>
                    <span>Book <em>.</em></span>
                    </div>
                    <p className='foot-pa'>Did you come here for something in particular or just general Riker</p>
                </section>
                <section className='footer-list'>
                    <ul>
                    <li><h5>Blogs</h5></li>
                        <li><a href='#'>Travel</a></li>
                        <li><a href='#'>Technology</a></li>
                        <li><a href='#'>Lifestyle</a></li>
                        <li><a href='#'>Fashion</a></li>
                        <li><a href='#'>Health</a></li>
                    </ul>
                    <ul>
                        <li> <h5>Quick links</h5></li>
                        <li><a href='#'>FAQ</a></li>
                        <li><a href='#'>Terms and condition</a></li>
                        <li><a href='#'>Support</a></li>
                        <li><a href='#'>Privacy Policy</a></li>
                    </ul>
                </section>
                <section>
                    <h5 className='mb-3'>Subscribe for newsletter</h5>
                    <div class="input-group mb-3 group">
                     <input type="text" placeholder="Your Email" />
                     <button  type="submit">Subcribe</button>
                      </div>
                      <h5>Follow on:</h5>
                      <ul className='list-unstyled d-flex flex-row gap-2'>
                        <li className='list-item active'>
                         <a href='#'> <i className="fa fa-facebook-square item" aria-hidden="true"></i></a>
                        </li>
                         <li className='list-item'>
                            <a href='#'>
                             <i className="fa fa-twitter-square item" aria-hidden="true"></i>
                             </a>
                            </li>
                            <li className='list-item'>
                            <a href='#'>
                             <i className="fa fa-instagram item" aria-hidden="true"></i>
                            </a>
                             </li>
                         </ul>
                </section>
            </footer>
        </div>
);

export default Footer;
