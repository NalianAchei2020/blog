import React from 'react';

const Contact = () => (
  <section className="contact-main">
    <h1 className="mb-5 text-center">
      <span className="col-title">Contact</span>
      {' '}
      us
    </h1>
    <article>
      <div className="contact-row1">
        <form>
          <input type="text" name="name" className="name" placeholder="Name" required />
          <input type="emal" name="email" className="email" placeholder="Email" required />
          <input type="text" name="subject" className="subject" placeholder="Subject" required />
          <textarea name="message" className="message" rows={5} cols={50} placeholder="Type your message" />
          <button type="submit" className="btn-contact">Send Message</button>
        </form>
      </div>
      <div className="contact-row2">
        <p className="mb-3">
          Dynamically underwhelm integrated outsourcing
          via timely models. Rapidiously reconceptualize visionary
          imperatives without
        </p>
        <p className="mb-3">blog.notebook@gmail.com</p>
        <p className="mb-3">+886554 654654</p>
        <p className="mb-3">9567 Turner Trace Apt. BC C3G8A4</p>
        <h5 className="mb-3">Follow on:</h5>
        <ul className="list-unstyled d-flex flex-row gap-2">
          <li className="list-item active">
            <a href="#facebook">
              <i className="fa fa-facebook-square item" aria-hidden="true" />
            </a>
          </li>
          <li className="list-item">
            <a href="#twitter">
              <i className="fa fa-twitter-square item" aria-hidden="true" />
            </a>
          </li>
          <li className="list-item">
            <a href="#instagram">
              <i className="fa fa-instagram item" aria-hidden="true" />
            </a>
          </li>
        </ul>
      </div>
    </article>
  </section>
);

export default Contact;
