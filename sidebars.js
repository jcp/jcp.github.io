// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    {
      type: 'category',
      label: 'Introduction',
      link: {
        type: 'doc',
        id: 'index',
      },
      collapsible: false,
      collapsed: false,
      items: [
        'dotfiles',
        {
          type: 'category',
          label: 'Linux',
          link: {
            type: 'generated-index',
          },
          collapsed: false,
          items: [
            'linux/configure-ubuntu',
            'linux/commands',
            'linux/shortcuts',
          ],
        },
      ],
    },
  ],
};

module.exports = sidebars;
