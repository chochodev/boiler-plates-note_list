## INSTALLATION
To install, run this in you root directory:

```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

## SETUP
### TAILWIND.CONFIG.JS
Set-up your tailwind.config.js file in the root folder like this:
```
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx,svelte}"],
  theme: {
    colors: {
      primary: '#007bff',
      secondary: '#ffc107',
    },
    boxShadow: {
      'small': '0 2px 5px rgba(0, 0, 0, 0.2)',
      'inset-glow': 'inset 0 0 0 2px rgba(255, 255, 255, 0.5)',
    },
    screens: {
      'sm': '480px',
      'md': '768px',
      'lg': '1024px'
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