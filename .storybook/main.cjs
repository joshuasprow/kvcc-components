/** @type {import("@storybook/builder-vite").StorybookViteConfig}*/
const config = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/vue3",
  core: {
    builder: "@storybook/builder-vite",
  },
  features: {
    storyStoreV7: true,
  },
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    },
  },
  viteFinal: (config, { configType }) => {
    console.log(JSON.stringify({ config }));
    console.log(JSON.stringify({ configType }));
    // if (configType === "PRODUCTION") {
    //   // fixes absolute path to iframe.html, allowing successful deployment to github pages
    //   config.base = "./";
    // }

    return config;
  },
};

module.exports = config;
