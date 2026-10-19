import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

let URL;
if (process.env.NODE_ENV === 'production') {
  URL= '/docs/';
} else {
  URL = '/';
}

const config: Config = {
  title: 'OpenInvento',
  tagline: 'Selfhosted inventory manager',
  favicon: 'img/favicon.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',

  // Set the /<baseUrl>/ pathname under which your site is served - For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: URL,

  // GitHub pages deployment config.
  organizationName: 'openinvento', // Usually your GitHub org/user name.
  projectName: 'openinvento', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/openinvento/docs/tree/main/',
        },
        blog: {
          onUntruncatedBlogPosts: 'ignore',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'OpenInvento Docs',
      logo: {
        alt: 'OpenInvento Docs Logo',
        src: 'img/logo.png',
        href: '/docs',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'documentationDefaultSidebar',
          position: 'left',
          label: 'Documentation',
        },
        // Blog is currently not in use
        // {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/openinvento/openinvento',
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
              label: 'Documentation',
              to: 'docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub Discussions',
              href: 'https://github.com/openinvento/openinvento/discussions',
            },
            {
              label: 'GitHub Issues',
              href: 'https://github.com/openinvento/openinvento/issues',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Landing Page',
              href: 'https://openinvento.github.io/landingpage/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/openinvento/openinvento',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} OpenInvento. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
