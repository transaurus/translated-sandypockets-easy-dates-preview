// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
import { themes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  themes: ['@docusaurus/theme-live-codeblock'],
  title: 'easy-dates',
  tagline: 'A tiny JavaScript library for working with dates.',
  url: 'https://easy-dates.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'sandypockets', // Usually your GitHub org/user name.
  projectName: 'easy-dates', // Usually your repo name.

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-CN'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */

      ({
        gtag: {
          trackingID: 'G-SZJ1XTR56D',
          anonymizeIP: true,
        },
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/sandypockets/easy-dates/tree/main/docs/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:

    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/calendar.svg",
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true
      },
      navbar: {
        title: 'easy-dates',
        hideOnScroll: true,
        logo: {
          alt: 'My Site Logo',
          src: 'img/calendar.svg',
          srcDark: 'img/calendar-dark.svg'
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'docs',
          },
          {
            href: 'https://github.com/sandypockets/easy-dates',
            label: 'github',
            position: 'right',
          },
          {
            href: 'https://npmjs.com/package/easy-dates',
            label: 'npm',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'docs',
            items: [
              {
                label: 'installation',
                to: '/docs/introduction/',
              },
              {
                label: 'usage',
                to: '/docs/introduction/usage',
              },
              {
                label: 'functions',
                to: '/docs/functions/',
              },
              {
                label: 'playground',
                to: '/docs/introduction/playground',
              },
              {
                label: 'contributing',
                to: '/docs/contributing',
              },
            ],
          },
          {
            title: 'where to get easy-dates',
            items: [
              {
                label: 'npm',
                href: 'https://www.npmjs.com/package/easy-dates',
              },
              {
                label: 'yarn',
                href: 'https://yarnpkg.com/package/easy-dates',
              },
              {
                label: 'unpkg',
                href: 'https://unpkg.com/easy-dates/dist/index.js',
              },
              {
                label: 'jsdeliver',
                href: 'https://cdn.jsdelivr.net/npm/easy-dates/dist/index.js',
              },
            ],
          },
          {
            title: 'more',
            items: [
              {
                label: 'github',
                href: 'https://github.com/sandypockets/easy-dates',
              },
              {
                label: 'blog',
                href: 'https://sandypockets/dev',
              },
              {
                label: 'buy me a coffee',
                href: 'https://buymeacoffee.com/sandypockets',
              },
            ],
          },
        ],
        copyright: `copyright © ${new Date().getFullYear()} easy-dates docs.`,
      },
      prism: {
        theme: themes.github,
        darkTheme: themes.dracula,
      },
    }),
};

module.exports = config;