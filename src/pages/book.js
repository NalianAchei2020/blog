import React from 'react';

const Book = () => {
  return (
    <section className="write-book  text-center ">
      <div className="sec2 mt-5">
        <span className="mx-2">Write on</span>
        <span className="noteword">
          Notebook <em>.</em>
        </span>
      </div>
      <div className="book-tex">
        <p className="my-2">
          <b>Write on notebook is very simple</b>
        </p>
        <p>
          Go to your mail and start typing your article with title & categories,
          attached your image/video file (if have).
        </p>
        <p>
          type your personal information. (Name, Occupation, Address, Social
          media links)
        </p>
        <p className="my-2">
          Send it on: <b>blog.notebook@gmail.com</b>
        </p>
      </div>
    </section>
  );
};

export default Book;
