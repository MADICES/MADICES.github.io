/* eslint-disable @typescript-eslint/no-var-requires */
import { themes } from "prism-react-renderer";

const darkCodeTheme = themes.dracula;
const lightCodeTheme = themes.github;

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(
  module.exports = {
    title: "MADICES",
    tagline:
      "Machine actionable data for chemical sciences: Bridging experiments, simulations, and machine learning",
    url: "https://madices.github.io",
    baseUrl: "/",
    favicon: "img/favicon.ico",
    organizationName: "MADICES",
    projectName: "madices.github.io",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    presets: [
      [
        "@docusaurus/preset-classic",
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            path: "docs",
            sidebarPath: "./sidebars.js",
            editUrl: "https://github.com/madices/madices.github.io/edit/main/",
            versions: {
              current: {
                label: "current",
              },
            },
            lastVersion: "current",
            showLastUpdateAuthor: false,
            showLastUpdateTime: true,
          },
          theme: {
            customCss: require.resolve("./src/css/custom.css"),
          },
        }),
      ],
    ],

    plugins: [
      [
        "docusaurus-plugin-remote-content",
        {
          name: "resources",
          sourceBaseUrl:
            "https://raw.githubusercontent.com/MADICES/MADICES-2022/main/", // the base url for the markdown (gets prepended to all of the documents when fetching)
          outDir: "docs", // the base directory to output to.
          documents: [], // the file names to download
        },
      ],
      // ["docusaurus2-dotenv", {systemvars: true}],
    ],
    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        navbar: {
          hideOnScroll: false,
          logo: {
            alt: "MADICES",
            src: "img/svg/c_no_bg.svg",
            srcDark: "img/svg/w_no_bg.svg",
          },
          items: [
            // left
            {
              type: "dropdown",
              label: "Workshops",
              position: "left",
              items: [
                {
                  label: "MADICES 2022 (virtual)",
                  to: "docs/2022",
                },
                {
                  label: "MADIICES 2024 (Berlin)",
                  to: "docs/2024",
                },
              ],
            },
            {
              type: "dropdown",
              label: "Resources",
              position: "left",
              items: [
                {
                  label: "Glossary",
                  to: "docs/glossary",
                },
                {
                  label: "Awesome list",
                  to: "docs/awesome_interoperability",
                },
              ],
            },
          ],
        },
        colorMode: {
          defaultMode: "light",
          disableSwitch: true,
          respectPrefersColorScheme: false,
        },
        footer: {
          links: [
            {
              title: "Community",
              items: [
                {
                  label: "Discord",
                  to: "https://discord.gg/r9kSbrRs9H",
                },
                {
                  label: "Code of Conduct",
                  to: "docs/coc",
                },
                {
                  label: "GitHub",
                  to: "https://github.com/madices",
                },
              ],
            },
            {
              title: "Contact",
              items: [{ label: "Email", to: "https://mailhide.io/e/TurK9QvA" }],
            },
          ],
          copyright: "MADICES Organization Team",
        },
        image: "img/svg/c_no_bg.svg",
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
        },
      }),
  }
);
