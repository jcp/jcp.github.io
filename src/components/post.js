import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import Link from '../components/link';

const Post = props => {
  const { id, post } = props;
  const image = post.frontmatter.image.childImageSharp.fluid;

  return (
    <article key={id}>
      <BackgroundImage
        className="post--header"
        backgroundColor={`#fff`}
        fluid={image}
      ></BackgroundImage>
      <div className="post--content">
        <h2>
          <Link to={post.frontmatter.url} target="_blank">
            {post.frontmatter.title}
          </Link>
        </h2>
        <p
          dangerouslySetInnerHTML={{
            __html: post.excerpt
          }}
        />
      </div>
    </article>
  );
};

export default Post;
