import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Link from '../components/link';
import Github from '../static/img/github.svg';
import Instagram from '../static/img/instagram.svg';
import LinkedIn from '../static/img/linkedin.svg';

const Header = () => {
  const data = useStaticQuery(
    graphql`
      query {
        image: file(relativePath: { eq: "img/profile.jpg" }) {
          childImageSharp {
            fixed(width: 125, height: 125) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        site {
          siteMetadata {
            author
            description
            github
            instagram
            linkedin
          }
        }
      }
    `
  );

  return (
    <header>
      <Img fixed={data.image.childImageSharp.fixed} title={data.site.siteMetadata.author} />
      <h1>{data.site.siteMetadata.author}</h1>
      <p>{data.site.siteMetadata.description}</p>
      <nav>
        <Link to={data.site.siteMetadata.github} target="_blank">
          <img src={Github} height="42" width="42" />
        </Link>
        <Link to={data.site.siteMetadata.instagram} target="_blank">
          <img src={Instagram} height="42" width="42" />
        </Link>
        <Link to={data.site.siteMetadata.linkedin} target="_blank">
          <img src={LinkedIn} height="42" width="42" />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
