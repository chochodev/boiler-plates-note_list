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


### ADD CSS VALUE - FOR VITE
Add this to vite.config.ts

```
import tailwindcss from 'tailwindcss'

export default defineConfig({
  // ...
  css: {
    postcss: {
      plugins: [tailwindcss('./tailwind.config.js')],
    },
  },
})
```