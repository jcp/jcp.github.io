import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const Footer = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author
          }
        }
      }
    `
  );

  return (
    <footer>
      <p>
        &copy; {new Date().getFullYear()} {data.site.siteMetadata.author}.
      </p>
    </footer>
  );
};

export default Footer;
