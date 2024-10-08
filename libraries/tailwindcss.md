## INSTALLATION

To install, run this in you root directory:

```
npm install -D tailwindcss
npx tailwindcss init
```

## SETUP

### TAILWIND.CONFIG.JS

Set-up your tailwind.config.js file in the root folder like this:

```
// const defaultTheme = require('tailwindcss/defaultTheme');
import { defaultTheme } from 'tailwindcss/defaultTheme';

module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx,svelte}"],
  theme: {
    boxShadow: {
      'small': '0 2px 5px rgba(0, 0, 0, 0.2)',
      'inset-glow': 'inset 0 0 0 2px rgba(255, 255, 255, 0.5)',
    },
    screens: {
      'sm': '480px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1440px'
    },
    extend: {
      colors: {
        primary: '#893D07',
        secondary: '#F2B49B',
        tertiary: '#A65E30',
        ...defaultTheme.colors
      },
      <!-- colors: { 
        'oxford_blue': { 
          DEFAULT: '#0a2239', 
          100: '#02070b', 
          200: '#040e17', 
          300: '#061422', 
          400: '#081b2d', 
          500: '#0a2239', 
          600: '#174f84', 
          700: '#257dcf', 
          800: '#68a8e4', 
          900: '#b4d4f2' 
        }, 

        'moonstone': { 
          DEFAULT: '#53a2be', 
          100: '#0f2128', 
          200: '#1e4350', 
          300: '#2d6478', 
          400: '#3d85a0', 
          500: '#53a2be', 
          600: '#77b5cb', 
          700: '#99c7d8', 
          800: '#bbdae5', 
          900: '#ddecf2' 
        }, 

        'blue_(ncs)': { 
          DEFAULT: '#1d84b5', 
          100: '#061a24', 
          200: '#0c3548', 
          300: '#124f6c', 
          400: '#176a90', 
          500: '#1d84b5', 
          600: '#30a6dd', 
          700: '#64bde6', 
          800: '#97d3ee', 
          900: '#cbe9f7' 
        }, 

        'gunmetal': { 
          DEFAULT: '#132e32', 
          100: '#04090a', 
          200: '#081315', 
          300: '#0c1c1f', 
          400: '#102629', 
          500: '#132e32', 
          600: '#2c6a73', 
          700: '#44a4b3', 
          800: '#80c4cf', 
          900: '#bfe2e7' 
        }, 

        'lapis_lazuli': { 
          DEFAULT: '#176087', 
          100: '#05131b', 
          200: '#092636', 
          300: '#0e3a51', 
          400: '#124d6c', 
          500: '#176087', 
          600: '#218bc3', 
          700: '#4aace0', 
          800: '#87c8eb', 
          900: '#c3e3f5' 
        }
      } -->
    }
  },
  plugins: [],
}
```

### INDEX.CSS

In you src folder; add this to the first three lines of index.css:

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### OUTPUT.CSS

Run:

```
npx tailwindcss -i ./src/index.css -o ./src/output.css --watch
```

### ADD LINK - REF:stylesheet

Add this to the head tag of your index.html:

```
<link href="./src/output.css" rel="stylesheet">
```
