/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com
 */

import { createVuetify } from 'vuetify'
import { md3 } from 'vuetify/blueprints'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

export default createVuetify({
  blueprint: md3,
  theme: {
    defaultTheme: 'anitheme',
    themes: {
      anitheme: {
        dark: false,
        colors: {
          primary: '#2c5cc5',
          'primary-darken-1': '#1e3a8a',
          'primary-lighten-1': '#5b84d6',
          secondary: '#2c5cc5',
          background: '#dce8ff',
          surface: '#ffffff',
          'surface-variant': '#eef3ff',
          'on-primary': '#ffffff',
          'on-secondary': '#ffffff',
          'on-surface': '#1a1c2e',
          'on-background': '#1a1c2e',
          error: '#ef4444',
          success: '#10b981',
          info: '#4d96ff',
          accent: '#2c5cc5',
          navigation: '#2c5cc5',
          'on-navigation': '#ffffff',
        },
      },
    },
  },
  display: {
    mobileBreakpoint: 'md',
    thresholds: {
      xs: 0,
      sm: 600,
      md: 840,
      lg: 1145,
      xl: 1545,
      xxl: 2138,
    },
  },
})
