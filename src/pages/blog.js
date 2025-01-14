import React from 'react';
import { useParams } from 'react-router-dom';
import { Data } from '../data';
//import './Blog.css'; // Import any additional custom styles if needed

const Blog = () => {
  const { title } = useParams(); // Get the title from the URL
  const decodedTitle = decodeURIComponent(title); // Decode the title

  const blog = Data(decodedTitle); // Fetch the blog data based on the decoded title
  // Check if the blog exists
  console.log(decodedTitle);
  if (!blog) {
    return <div className="container my-4">Blog not found.</div>;
  }

  return (
    <div className="container my-4">
      <div className="text-center mb-4">
        <img
          className="img-fluid rounded"
          src={blog.image}
          alt={blog.category}
        />
      </div>
      <h1 className="display-4">{blog.title}</h1>
      <p className="lead">{blog.fullDescription}</p>
      <div className="d-flex justify-content-between mt-4">
        <ul className="list-inline">
          <li className="list-inline-item">
            <strong>Written by</strong>
          </li>
          <li className="list-inline-item">{blog.authorName}</li>
          <li className="list-inline-item">
            <img
              src={blog.authorPicture}
              alt={blog.authorName}
              className="rounded-circle"
              width="40"
              height="40"
            />
          </li>
        </ul>
        <ul className="list-inline">
          <li className="list-inline-item">
            <strong>Published on</strong>
          </li>
          <li className="list-inline-item">{blog.date}</li>
        </ul>
      </div>
    </div>
  );
};

export default Blog;
