// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Knowledge",
  tagline: "Knowledge",
  url: "https://knowledge.ocarmo.dev",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "https://github.com/otaviosc/knowledge", // Usually your GitHub org/user name.
  projectName: "Knowledge", // Usually your repo name
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
          editUrl: "https://github.com/otaviosc/knowledge/tree/master",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Knowledge",
        logo: {
          alt: "Knowledge",
          src: "img/logo.svg",
        },
        items: [
          {
            href: "https://github.com/otaviosc",
            label: "GitHub",
            position: "right",
          },
          {
            href: "https://ocarmo.dev",
            label: "Website",
            position: "right",
          },
          {
            href: "https://twitter.com/otascar",
            label: "Twitter",
            position: "right",
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
