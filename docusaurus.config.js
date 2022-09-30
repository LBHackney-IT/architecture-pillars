module.exports = {
  title: "Hackney Architecture Pillars",
  tagline:
    "A guide on Hackney's development practices, and how to follow them",
  url: "https://github.com/LBHackney-IT/architecture-pillars",
  baseUrl: "/architecture-pillars/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",
  organizationName: "lbhackney-it",
  projectName: "architecture-pillars",
  themeConfig: {
    prism: {
      additionalLanguages: ["csharp"],
    },
    navbar: {
      title: "Architecture Pillars",
      logo: {
        alt: "Architecture Pillars",
        src: "img/logo-long.svg",
      },
      items: [
        {
          href: "https://github.com/LBHackney-IT/architecture-pillars",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    algolia: {
      apiKey: '4a83a5c4eb60fa0e4dae66ff84553e02',
      indexName: 'hackney',
      placeholder: 'Search architecture-pillars'
    },
    footer: {
      style: "dark",
      links: [],
      copyright: `Made by HackIT.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/LBHackney-IT/architecture-pillars/edit/master/",
        },
        theme: {
          customCss: [require.resolve("./src/docs.scss")],
        },
      },
    ],
  ],
  clientModules: [require.resolve("./src/docs.js")],
  plugins: ["docusaurus-plugin-sass"],
};
