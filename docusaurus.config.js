/* eslint-disable @typescript-eslint/no-var-requires */
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const lightCodeTheme = require('prism-react-renderer/themes/github');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(
  module.exports = {
    title: 'MADICES 2022',
    tagline:
      'Machine actionable data for chemical sciences:  Bridging experiments, simulations, and machine learning for spectral data',
    url: 'https://madices.github.io',
    baseUrl: '/',
    favicon: 'img/favicon.ico',
    organizationName: 'MADICES',
    projectName: 'madices.github.io',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    presets: [
      [
        '@docusaurus/preset-classic',
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            path: 'docs',
            sidebarPath: 'sidebars.js',
            editUrl:
              'https://github.com/madices/madices.github.io/edit/master/',
            versions: {
              current: {
                label: 'current',
              },
            },
            lastVersion: 'current',
            showLastUpdateAuthor: false,
            showLastUpdateTime: true,
          },
          theme: {
            customCss: require.resolve('./src/css/custom.css'),
          },
        }),
      ],
    ],
    plugins: [],
    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        navbar: {
          hideOnScroll: true,
          logo: {
            alt: 'MADICES',
            src: 'img/svg/c_no_bg.svg',
            srcDark: 'img/svg/w_no_bg.svg',
          },
          items: [
            // left
            {
              label: 'Workshop objectives',
              to: 'docs/objectives',
              position: 'left',
            },
            {
              label: 'Program',
              to: 'docs/program',
              position: 'left',
            },
            {
              label: 'Speakers',
              to: 'docs/speakers',
              position: 'left',
            },
            {
              label: 'Organizers',
              to: 'docs/organizers',
              position: 'left',
            },
          ],
        },
        colorMode: {
          defaultMode: 'light',
          disableSwitch: false,
          respectPrefersColorScheme: false,
        },
        announcementBar: {
          content:
            '⭐️ Register now on the <a target="_blank" rel="noopener noreferrer" href="https://www.cecam.org/workshop-details/1165">CECAM website</a>! ⭐️',
        },
        footer: {
          links: [
            {
              title: 'Community',
              items: [
                {
                  label: 'Discord',
                  to: 'https://discord.gg/Fjm9v4rmTW',
                },
              ],
            },
            {
              title: 'Social',
              items: [
                {
                  label: 'GitHub',
                  to: 'https://github.com/madices/MADICES-2022',
                },
              ],
            },
          ],
          logo: {
            alt: 'MADICES',
            src: 'img/svg/c_no_bg.svg',
          },
          copyright: 'MADICES 2022',
        },
        image: 'img/svg/c_no_bg.svg',
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
        },
      }),
  }
);
