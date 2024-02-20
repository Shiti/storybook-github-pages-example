/** @type { import('@storybook/react-webpack5').StorybookConfig } */

const config = {
  stories: ['../src/**/*.stories.@(tsx)'],
  addons: [
    '@storybook/addon-controls',
    '@storybook/addon-docs',
    '@storybook/addon-toolbars',
    '@storybook/addon-viewport',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {
      builder: {
        useSWC: true,
      },
    },
  },
  docs: {
    autodocs: 'tag',
  },
  typescript: {
    // Overrides the default Typescript configuration to allow multi-package components to be documented via Autodocs.
    reactDocgen: 'react-docgen',
    check: false,
  },
  core: {
    disableTelemetry: true, // 👈 Disables telemetry
  },
}
export default config
