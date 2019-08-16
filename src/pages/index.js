import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Post from '../components/post';
import SEO from '../components/seo';

export default ({ data }) => (
  <Layout>
    <SEO title="James C. Palmer" />
    {data.allMarkdownRemark.edges.map(({ node }) => {
      return <Post key={node.id} post={node} />;
    })}
  </Layout>
);

export const data = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: fileAbsolutePath }) {
      edges {
        node {
          frontmatter {
            alt
            title
            url
            image {
              childImageSharp {
                fluid(maxWidth: 500, quality: 90) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          id
          excerpt
        }
      }
    }
  }
`;
