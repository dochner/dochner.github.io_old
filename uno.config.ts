import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss';

const baseSize = {
  'col-1': '8.333333333333334%',
  'col-2': '16.666666666666668%',
  'col-3': '25%',
  'col-4': '33.33333333333333%',
  'col-5': '41.66666666666667%',
  'col-6': '50%',
  'col-7': '58.333333333333336%',
  'col-8': '66.66666666666667%',
  'col-9': '75%',
  'col-10': '83.33333333333334%',
  'col-11': '91.66666666666667%',
  'col-12': '100%',
  prose: '65ch',
};

export default defineConfig({
  shortcuts: [
    { row: 'flex flex-wrap flex-row w-auto min-w-0 max-w-full' },
    { column: 'flex flex-wrap flex-col h-auto min-h-0 max-h-full' },
    { 'no-wrap': 'flex-nowrap' },
    [/^offset-(.*)$/, ([, d]) => {
      // check value is between 1 and 12
      if (Number(d) >= 1 && Number(d) <= 12) {
        return `m-l-${(100 / 12) * Number(d)}%`;
      }
      return '';
    }],
  ],

  theme: {
    breakpoints: {
      xs: '320px',
      sm: '640px',
      md: '1240px',
      lg: '1440px',
      xl: '1920px',
      '2xl': '2560px',
    },

    fontSize: {
      xs: ['0.75rem', '1rem'],
      sm: ['0.8125rem', '1.25rem'],
      base: ['1rem', '1.5rem'],
      lg: ['1.125rem', '1.75rem'],
      xl: ['1.25rem', '1.75rem'],
      '2xl': ['1.5rem', '2rem'],
      '3xl': ['1.875rem', '2.25rem'],
      '4xl': ['2.25rem', '2.5rem'],
      '5xl': ['3rem', '1'],
      '6xl': ['3.75rem', '1'],
      '7xl': ['4.5rem', '1'],
      '8xl': ['6rem', '1'],
      '9xl': ['8rem', '1'],
    },

    colors: {
      inherit: 'inherit',
      current: 'currentColor',
      transparent: 'transparent',
      black: '#000',
      white: '#fff',

      primary: '#00c7ff',
      secondary: '#ffbf00',
      accent: 'linear-gradient(180deg, #00c7ff 0%, #ffbf00 100%)',

      dark: {
        DEFAULT: '#1D1D20',
        page: '#121212',
        title: '#010D33',
      },

      positive: '#6eff51',
      negative: '#ff2d2d',
      info: '#51abff',
      warning: '#ffe251',

      whatsapp: '#25D366',

      grey: {
        DEFAULT: '#6e6e75',
        100: '#e2e2e3',
        200: '#c5c5c8',
        300: '#a8a8ac',
        400: '#8b8b91',
        500: '#6e6e75',
        600: '#58585e',
        700: '#424246',
        800: '#2c2c2f',
        900: '#161617',
      },
    },

    spacing: {
      DEFAULT: '1rem',
      0: '0px',
      none: '0px',
      auto: 'auto',
      xs: '0.25rem',
      sm: '0.5rem',
      md: '1rem',
      lg: '1.5rem',
      xl: '2rem',
      '2xl': '3rem',
      '3xl': '4rem',
    },

    width: {
      ...baseSize,
    },

    height: {
      ...baseSize,
    },

    // https://github.com/quasarframework/quasar/blob/dev/ui/src/css/core/elevation.sass
    zIndex: {
      auto: 'auto',
      0: '0',
      inherit: 'inherit',
      marginals: '2000',
      fullscreen: '6000',
      notify: '9500',
      max: '9998',
    },

    blur: {
      DEFAULT: '4px',
      none: '0',
      sm: '4px',
      md: '8px',
      lg: '16px',
      xl: '24px',
      '2xl': '48px',
    },

    // https://github.com/quasarframework/quasar/blob/dev/ui/src/css/core/elevation.sass
    dropShadow: {
      DEFAULT: '0 1px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12)',
      0: '0 0 0 rgba(0, 0, 0, 0.2), 0 0 0 rgba(0, 0, 0, 0.14), 0 0 0 rgba(0, 0, 0, 0.12)',
      1: '0 1px 3px rgba(0, 0, 0, 0.2), 0 1px 1px rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12)',
      2: '0 1px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12)',
      3: '0 1px 8px rgba(0, 0, 0, 0.2), 0 3px 4px rgba(0, 0, 0, 0.14), 0 3px 3px -2px rgba(0, 0, 0, 0.12)',
      4: '0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px rgba(0, 0, 0, 0.14), 0 1px 10px rgba(0, 0, 0, 0.12)',
      5: '0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 5px 8px rgba(0, 0, 0, 0.14), 0 1px 14px rgba(0, 0, 0, 0.12)',
      6: '0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px rgba(0, 0, 0, 0.14), 0 1px 18px rgba(0, 0, 0, 0.12)',
      7: '0 4px 5px -2px rgba(0, 0, 0, 0.2), 0 7px 10px 1px rgba(0, 0, 0, 0.14), 0 2px 16px 1px rgba(0, 0, 0, 0.12)',
      8: '0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12)',
      9: '0 5px 6px -3px rgba(0, 0, 0, 0.2), 0 9px 12px 1px rgba(0, 0, 0, 0.14), 0 3px 16px 2px rgba(0, 0, 0, 0.12)',
      10: '0 6px 6px -3px rgba(0, 0, 0, 0.2), 0 10px 14px 1px rgba(0, 0, 0, 0.14), 0 4px 18px 3px rgba(0, 0, 0, 0.12)',
      11: '0 6px 7px -4px rgba(0, 0, 0, 0.2), 0 11px 15px 1px rgba(0, 0, 0, 0.14), 0 4px 20px 3px rgba(0, 0, 0, 0.12)',
      12: '0 7px 8px -4px rgba(0, 0, 0, 0.2), 0 12px 17px 2px rgba(0, 0, 0, 0.14), 0 5px 22px 4px rgba(0, 0, 0, 0.12)',
      13: '0 7px 8px -4px rgba(0, 0, 0, 0.2), 0 13px 19px 2px rgba(0, 0, 0, 0.14), 0 5px 24px 4px rgba(0, 0, 0, 0.12)',
      14: '0 7px 9px -4px rgba(0, 0, 0, 0.2), 0 14px 21px 2px rgba(0, 0, 0, 0.14), 0 5px 26px 4px rgba(0, 0, 0, 0.12)',
      15: '0 8px 9px -5px rgba(0, 0, 0, 0.2), 0 15px 22px 2px rgba(0, 0, 0, 0.14), 0 6px 28px 5px rgba(0, 0, 0, 0.12)',
      16: '0 8px 10px -5px rgba(0, 0, 0, 0.2), 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12)',
      17: '0 8px 11px -5px rgba(0, 0, 0, 0.2), 0 17px 26px 2px rgba(0, 0, 0, 0.14), 0 6px 32px 5px rgba(0, 0, 0, 0.12)',
      18: '0 9px 11px -5px rgba(0, 0, 0, 0.2), 0 18px 28px 2px rgba(0, 0, 0, 0.14), 0 7px 34px 6px rgba(0, 0, 0, 0.12)',
      19: '0 9px 12px -6px rgba(0, 0, 0, 0.2), 0 19px 29px 2px rgba(0, 0, 0, 0.14), 0 7px 36px 6px rgba(0, 0, 0, 0.12)',
      20: '0 10px 13px -6px rgba(0, 0, 0, 0.2), 0 20px 31px 3px rgba(0, 0, 0, 0.14), 0 8px 38px 7px rgba(0, 0, 0, 0.12)',
      21: '0 10px 13px -6px rgba(0, 0, 0, 0.2), 0 21px 33px 3px rgba(0, 0, 0, 0.14), 0 8px 40px 7px rgba(0, 0, 0, 0.12)',
      22: '0 10px 14px -6px rgba(0, 0, 0, 0.2), 0 22px 35px 3px rgba(0, 0, 0, 0.14), 0 8px 42px 7px rgba(0, 0, 0, 0.12)',
      23: '0 11px 14px -7px rgba(0, 0, 0, 0.2), 0 23px 36px 3px rgba(0, 0, 0, 0.14), 0 9px 44px 8px rgba(0, 0, 0, 0.12)',
      24: '0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12)',
    },

    // https://github.com/quasarframework/quasar/blob/dev/ui/src/css/core/elevation.sass
    boxShadow: {
      none: 'none',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      DEFAULT: '0 1px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12)',
      0: '0 0 0 rgba(0, 0, 0, 0.2), 0 0 0 rgba(0, 0, 0, 0.14), 0 0 0 rgba(0, 0, 0, 0.12)',
      1: '0 1px 3px rgba(0, 0, 0, 0.2), 0 1px 1px rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12)',
      2: '0 1px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12)',
      3: '0 1px 8px rgba(0, 0, 0, 0.2), 0 3px 4px rgba(0, 0, 0, 0.14), 0 3px 3px -2px rgba(0, 0, 0, 0.12)',
      4: '0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px rgba(0, 0, 0, 0.14), 0 1px 10px rgba(0, 0, 0, 0.12)',
      5: '0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 5px 8px rgba(0, 0, 0, 0.14), 0 1px 14px rgba(0, 0, 0, 0.12)',
      6: '0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px rgba(0, 0, 0, 0.14), 0 1px 18px rgba(0, 0, 0, 0.12)',
      7: '0 4px 5px -2px rgba(0, 0, 0, 0.2), 0 7px 10px 1px rgba(0, 0, 0, 0.14), 0 2px 16px 1px rgba(0, 0, 0, 0.12)',
      8: '0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12)',
      9: '0 5px 6px -3px rgba(0, 0, 0, 0.2), 0 9px 12px 1px rgba(0, 0, 0, 0.14), 0 3px 16px 2px rgba(0, 0, 0, 0.12)',
      10: '0 6px 6px -3px rgba(0, 0, 0, 0.2), 0 10px 14px 1px rgba(0, 0, 0, 0.14), 0 4px 18px 3px rgba(0, 0, 0, 0.12)',
      11: '0 6px 7px -4px rgba(0, 0, 0, 0.2), 0 11px 15px 1px rgba(0, 0, 0, 0.14), 0 4px 20px 3px rgba(0, 0, 0, 0.12)',
      12: '0 7px 8px -4px rgba(0, 0, 0, 0.2), 0 12px 17px 2px rgba(0, 0, 0, 0.14), 0 5px 22px 4px rgba(0, 0, 0, 0.12)',
      13: '0 7px 8px -4px rgba(0, 0, 0, 0.2), 0 13px 19px 2px rgba(0, 0, 0, 0.14), 0 5px 24px 4px rgba(0, 0, 0, 0.12)',
      14: '0 7px 9px -4px rgba(0, 0, 0, 0.2), 0 14px 21px 2px rgba(0, 0, 0, 0.14), 0 5px 26px 4px rgba(0, 0, 0, 0.12)',
      15: '0 8px 9px -5px rgba(0, 0, 0, 0.2), 0 15px 22px 2px rgba(0, 0, 0, 0.14), 0 6px 28px 5px rgba(0, 0, 0, 0.12)',
      16: '0 8px 10px -5px rgba(0, 0, 0, 0.2), 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12)',
      17: '0 8px 11px -5px rgba(0, 0, 0, 0.2), 0 17px 26px 2px rgba(0, 0, 0, 0.14), 0 6px 32px 5px rgba(0, 0, 0, 0.12)',
      18: '0 9px 11px -5px rgba(0, 0, 0, 0.2), 0 18px 28px 2px rgba(0, 0, 0, 0.14), 0 7px 34px 6px rgba(0, 0, 0, 0.12)',
      19: '0 9px 12px -6px rgba(0, 0, 0, 0.2), 0 19px 29px 2px rgba(0, 0, 0, 0.14), 0 7px 36px 6px rgba(0, 0, 0, 0.12)',
      20: '0 10px 13px -6px rgba(0, 0, 0, 0.2), 0 20px 31px 3px rgba(0, 0, 0, 0.14), 0 8px 38px 7px rgba(0, 0, 0, 0.12)',
      21: '0 10px 13px -6px rgba(0, 0, 0, 0.2), 0 21px 33px 3px rgba(0, 0, 0, 0.14), 0 8px 40px 7px rgba(0, 0, 0, 0.12)',
      22: '0 10px 14px -6px rgba(0, 0, 0, 0.2), 0 22px 35px 3px rgba(0, 0, 0, 0.14), 0 8px 42px 7px rgba(0, 0, 0, 0.12)',
      23: '0 11px 14px -7px rgba(0, 0, 0, 0.2), 0 23px 36px 3px rgba(0, 0, 0, 0.14), 0 9px 44px 8px rgba(0, 0, 0, 0.12)',
      24: '0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12)',
      'up-0': '0 0 0 rgba(0, 0, 0, 0.2), 0 0 0 rgba(0, 0, 0, 0.14), 0 0 0 rgba(0, 0, 0, 0.12)',
      'up-1': '0 -1px 3px rgba(0, 0, 0, 0.2), 0 -1px 1px rgba(0, 0, 0, 0.14), 0 -2px 1px -1px rgba(0, 0, 0, 0.12)',
      'up-2': '0 -1px 5px rgba(0, 0, 0, 0.2), 0 -2px 2px rgba(0, 0, 0, 0.14), 0 -3px 1px -2px rgba(0, 0, 0, 0.12)',
      'up-3': '0 -1px 8px rgba(0, 0, 0, 0.2), 0 -3px 4px rgba(0, 0, 0, 0.14), 0 -3px 3px -2px rgba(0, 0, 0, 0.12)',
      'up-4': '0 -2px 4px -1px rgba(0, 0, 0, 0.2), 0 -4px 5px rgba(0, 0, 0, 0.14), 0 -1px 10px rgba(0, 0, 0, 0.12)',
      'up-5': '0 -3px 5px -1px rgba(0, 0, 0, 0.2), 0 -5px 8px rgba(0, 0, 0, 0.14), 0 -1px 14px rgba(0, 0, 0, 0.12)',
      'up-6': '0 -3px 5px -1px rgba(0, 0, 0, 0.2), 0 -6px 10px rgba(0, 0, 0, 0.14), 0 -1px 18px rgba(0, 0, 0, 0.12)',
      'up-7': '0 -4px 5px -2px rgba(0, 0, 0, 0.2), 0 -7px 10px 1px rgba(0, 0, 0, 0.14), 0 -2px 16px 1px rgba(0, 0, 0, 0.12)',
      'up-8': '0 -5px 5px -3px rgba(0, 0, 0, 0.2), 0 -8px 10px 1px rgba(0, 0, 0, 0.14), 0 -3px 14px 2px rgba(0, 0, 0, 0.12)',
      'up-9': '0 -5px 6px -3px rgba(0, 0, 0, 0.2), 0 -9px 12px 1px rgba(0, 0, 0, 0.14), 0 -3px 16px 2px rgba(0, 0, 0, 0.12)',
      'up-10': '0 -6px 6px -3px rgba(0, 0, 0, 0.2), 0 -10px 14px 1px rgba(0, 0, 0, 0.14), 0 -4px 18px 3px rgba(0, 0, 0, 0.12)',
      'up-11': '0 -6px 7px -4px rgba(0, 0, 0, 0.2), 0 -11px 15px 1px rgba(0, 0, 0, 0.14), 0 -4px 20px 3px rgba(0, 0, 0, 0.12)',
      'up-12': '0 -7px 8px -4px rgba(0, 0, 0, 0.2), 0 -12px 17px 2px rgba(0, 0, 0, 0.14), 0 -5px 22px 4px rgba(0, 0, 0, 0.12)',
      'up-13': '0 -7px 8px -4px rgba(0, 0, 0, 0.2), 0 -13px 19px 2px rgba(0, 0, 0, 0.14), 0 -5px 24px 4px rgba(0, 0, 0, 0.12)',
      'up-14': '0 -7px 9px -4px rgba(0, 0, 0, 0.2), 0 -14px 21px 2px rgba(0, 0, 0, 0.14), 0 -5px 26px 4px rgba(0, 0, 0, 0.12)',
      'up-15': '0 -8px 9px -5px rgba(0, 0, 0, 0.2), 0 -15px 22px 2px rgba(0, 0, 0, 0.14), 0 -6px 28px 5px rgba(0, 0, 0, 0.12)',
      'up-16': '0 -8px 10px -5px rgba(0, 0, 0, 0.2), 0 -16px 24px 2px rgba(0, 0, 0, 0.14), 0 -6px 30px 5px rgba(0, 0, 0, 0.12)',
      'up-17': '0 -8px 11px -5px rgba(0, 0, 0, 0.2), 0 -17px 26px 2px rgba(0, 0, 0, 0.14), 0 -6px 32px 5px rgba(0, 0, 0, 0.12)',
      'up-18': '0 -9px 11px -5px rgba(0, 0, 0, 0.2), 0 -18px 28px 2px rgba(0, 0, 0, 0.14), 0 -7px 34px 6px rgba(0, 0, 0, 0.12)',
      'up-19': '0 -9px 12px -6px rgba(0, 0, 0, 0.2), 0 -19px 29px 2px rgba(0, 0, 0, 0.14), 0 -7px 36px 6px rgba(0, 0, 0, 0.12)',
      'up-20': '0 -10px 13px -6px rgba(0, 0, 0, 0.2), 0 -20px 31px 3px rgba(0, 0, 0, 0.14), 0 -8px 38px 7px rgba(0, 0, 0, 0.12)',
      'up-21': '0 -10px 13px -6px rgba(0, 0, 0, 0.2), 0 -21px 33px 3px rgba(0, 0, 0, 0.14), 0 -8px 40px 7px rgba(0, 0, 0, 0.12)',
      'up-22': '0 -10px 14px -6px rgba(0, 0, 0, 0.2), 0 -22px 35px 3px rgba(0, 0, 0, 0.14), 0 -8px 42px 7px rgba(0, 0, 0, 0.12)',
      'up-23': '0 -11px 14px -7px rgba(0, 0, 0, 0.2), 0 -23px 36px 3px rgba(0, 0, 0, 0.14), 0 -9px 44px 8px rgba(0, 0, 0, 0.12)',
      'up-24': '0 -11px 15px -7px rgba(0, 0, 0, 0.2), 0 -24px 38px 3px rgba(0, 0, 0, 0.14), 0 -9px 46px 8px rgba(0, 0, 0, 0.12)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    },
  },

  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: 'Roboto',
        poppins: [
          {
            name: 'Poppins',
            weights: ['400', '500', '600', '700'],
            italic: false,
          },
          {
            name: 'sans-serif',
            provider: 'none',
          },
        ],
      },
    }),
  ],

  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
});
