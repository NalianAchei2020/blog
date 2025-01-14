import React from 'react';
import { useParams } from 'react-router-dom';
import { Data } from '../data';
import '../Sass/index.scss';

const Blog = () => {
  const { title } = useParams();
  const decodedTitle = decodeURIComponent(title);
  const blog = Data.find((item) => item.title === decodedTitle);

  if (!blog) {
    return (
      <div className="container min-vh-100 d-flex align-items-center justify-content-center">
        <div className="text-center p-4 bg-white rounded shadow">
          <h2 className="h4 mb-2">Blog Not Found</h2>
          <p className="text-muted">
            The blog post you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <article className="container py-5 lg:mt-5">
      {/* Hero Image */}
      <div className="mb-4 lg:mt-5">
        <img
          src={blog.image}
          alt={blog.title}
          className="img-fluid rounded shadow-sm w-100"
          style={{ maxHeight: '500px', objectFit: 'cover' }}
        />
      </div>

      {/* Article Header */}
      <header className="mb-4">
        <div className="d-flex flex-column md:flex-row align-items-center gap-3 mb-3">
          <span className="badge bg-primary rounded-pill px-3 py-2">
            {blog.category}
          </span>
          <small className="text-muted">{blog.date}</small>
        </div>
        <h1 className="display-4 fw-bold mb-4">{blog.title}</h1>
      </header>

      {/* Author Info */}
      <div className="d-flex align-items-center gap-3 p-3 bg-light rounded mb-4">
        <img
          src={blog.authorPicture}
          alt={blog.authorName}
          className="rounded-circle"
          width="48"
          height="48"
          style={{ objectFit: 'cover' }}
        />
        <div>
          <p className="fw-medium mb-0">Written by</p>
          <p className="text-muted mb-0">{blog.authorName}</p>
        </div>
      </div>

      {/* Article Content */}
      <div className="row justify-content-center">
        <div className="col-12 col-lg-10">
          <p className="lead mb-4" style={{ lineHeight: '1.8' }}>
            {blog.fullDescription}
          </p>
        </div>
      </div>

      {/* Social Share */}
      <div className="mt-5 pt-4 border-top">
        <h3 className="h5 mb-4">Share this article</h3>
        <div className="d-flex gap-2 flex-wrap">
          <button className="btn btn-primary">
            <i className="bi bi-twitter me-2"></i>Share on Twitter
          </button>
          <button className="btn btn-facebook">
            <i className="bi bi-facebook me-2"></i>Share on Facebook
          </button>
          <button className="btn btn-success">
            <i className="bi bi-whatsapp me-2"></i>Share on WhatsApp
          </button>
        </div>
      </div>
    </article>
  );
};

export default Blog;
