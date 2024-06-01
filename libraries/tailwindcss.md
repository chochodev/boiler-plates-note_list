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
  content: ["./src/**/*.{html,js,ts,tsx,svelte}"],
  theme: {
    extend: {},
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

