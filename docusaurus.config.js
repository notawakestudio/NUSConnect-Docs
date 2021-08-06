/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'NUS Connect',
  tagline: 'Jump in the learning loop today!',
  url: 'https://notawakestudio.github.io',
  baseUrl: '/NUSConnect-Docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'notawakestudio', // Usually your GitHub org/user name.
  projectName: 'NUSConnect-Docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'NUS Connect',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'index',
          position: 'left',
          label: 'Home',
        },
        {
          href: 'https://github.com/notawakestudio/NUSConnect',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Home',
              to: '/',
            },
          ],
        },
        {
          title: 'Publicity',
          items: [
            {
              label: 'Youtube',
              href: 'https://www.youtube.com/watch?v=lYMwwFo2hoU',
            },
            {
              label: 'Poster',
              href: 'https://github.com/notawakestudio/NUSConnect/blob/main/public/2653.png',
            },
            {
              label: 'Proposal',
              href: 'https://docs.google.com/document/d/1gVK1er13XGxM9K4T8hWutoqQm9WUkyBN_oKn4uAAlRk/edit',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/notawakestudio/NUSConnect',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} NUS Connect Docs, NotAwake Studio. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/notawakestudio/NUSConnect-Docs/blob/master/',
          routeBasePath: '/'
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/notawakestudio/NUSConnect-Docs/blob/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
