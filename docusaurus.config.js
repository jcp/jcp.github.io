// @ts-check

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/vsDark');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'James C. Palmer',
  tagline: 'Entrepreneur, technologist and explorer.',
  url: 'https://jcp.io',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'jcp',
  projectName: 'jcp.github.io',
  deploymentBranch: 'gh-pages',
  trailingSlash: true,
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  plugins: ['docusaurus-plugin-sass', '@docusaurus/theme-live-codeblock'],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        blog: false,
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          breadcrumbs: true,
          lastVersion: 'current',
          versions: {
            current: {
              badge: true,
              label: '1.0.0',
              path: '/',
            },
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        respectPrefersColorScheme: true,
      },
      sidebar: {
        hideable: true,
      },
      navbar: {
        title: 'James C. Palmer',
        items: [
          {
            type: 'doc',
            docId: 'index',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://github.com/jcp',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      footer: {
        style: 'light',
        copyright: `Copyright © ${new Date().getFullYear()} James C. Palmer.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      liveCodeBlock: {
        playgroundPosition: 'bottom',
      },
    }),
};

module.exports = config;
