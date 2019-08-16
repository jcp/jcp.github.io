import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function SEO(meta) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author
            description
            url
          }
        }
      }
    `
  );

  const { author, description, image, url } = data.site.siteMetadata;

  return (
    <Helmet
      htmlAttributes={{
        lang: `en`
      }}
      title={author}
      description={description}
      meta={[
        {
          name: `description`,
          content: description
        },
        {
          property: `og:title`,
          content: author
        },
        {
          property: `og:description`,
          content: description
        },
        {
          property: `og:image`,
          content: image
        },
        {
          property: `og:url`,
          content: url
        },
        {
          property: `og:type`,
          content: `website`
        }
      ].concat(meta)}
    />
  );
}

SEO.defaultProps = {
  meta: []
};

SEO.propTypes = {
  description: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired
};

export default SEO;
