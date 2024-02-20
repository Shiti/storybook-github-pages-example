import { DEFAULT_VIEWPORT, INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

import '../src/index.css'
import * as path from "path";


const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: DEFAULT_VIEWPORT,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export const webpackFinal = async (config) => {
  config.module.rules.push({
    test: /\.css$/,
    use: ['style-loader', 'css-loader'],
    include: path.resolve(__dirname, '../'),
  })

  return config
}

export default preview
