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
          'primary-lighten-1': '#c1d6ff',
          secondary: '#21005d',
          'secondary-lighten-1': '#e0e7ff',
          background: '#f3f8ff',
          surface: '#ffffff',
          'surface-variant': '#e0e7ff',
          'on-primary': '#ffffff',
          'on-secondary': '#ffffff',
          'on-surface': '#49454f',
          'on-background': '#49454f',
          error: '#ef4444',
          success: '#10b981',
          info: '#4d96ff',
          accent: '#4d96ff',
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
