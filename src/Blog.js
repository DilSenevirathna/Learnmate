// Blog.js
import React from 'react';
import { motion } from "framer-motion";
import "./Blog.css";

const Blog = () => {
  const posts = [
    {
      title: "Mastering Frontend Performance Optimization",
      date: "March 6, 2025",
      excerpt: "Discover key techniques like code splitting, lazy loading, and efficient rendering to optimize frontend performance.",
      link: "#"
    },
    {
      title: "React Best Practices for Scalable Applications",
      date: "February 20, 2025",
      excerpt: "Learn how to structure your React projects for scalability and maintainability.",
      link: "#"
    },
    {
      title: "CSS-in-JS vs Traditional CSS: Which One to Choose?",
      date: "January 15, 2025",
      excerpt: "Explore the pros and cons of CSS-in-JS and traditional CSS approaches for styling web applications.",
      link: "#"
    },
    {
      title: "State Management in React: Redux vs Context API",
      date: "March 1, 2025",
      excerpt: "A deep dive into Redux and Context API to understand which one suits your project better.",
      link: "#"
    },
    {
      title: "Building Accessible Web Applications",
      date: "February 10, 2025",
      excerpt: "Tips and best practices for making web applications accessible to all users.",
      link: "#"
    },
    {
      title: "Next.js vs React: When to Choose Each?",
      date: "January 25, 2025",
      excerpt: "Comparing Next.js and React to help you decide which framework fits your project needs.",
      link: "#"
    }
  ];

  return (
    <div className="blog-container">
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }} 
        className="blog-content">
        <h1 className="blog-title">Latest Blog Posts</h1>
        <div className="blog-grid">
          {posts.map((post, index) => (
            <div key={index} className="blog-card">
              <h2 className="post-title">{post.title}</h2>
              <p className="post-date">{post.date}</p>
              <p className="post-excerpt">{post.excerpt}</p>
              <a href={post.link} className="read-more">Read More →</a>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Blog;
