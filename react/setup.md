## REACT BOILER-PLATE/SETUP
This is my react boilerplate/setup for new projects

## TABLE OF CONTENTS
- [Setup](#setup)

## SETUP
  - [ENV File](#env)
  
#### ENV
1. Create a .env file in the root directory:
! Make sure it starts with 'REACT'
```
SECRET=your_secret_key
```

2. Access the secret in a any js/jsx or ts/tsx file like:
```
const secret = process.env.REACT_SECRET
```

#### ABSOLUTE IMPORTS
**JavaScript**
Modify your js.config.json file to look like this:
```
{
  "compilerOptions": {
    "baseUrl": "src"
  },
  "include": ["src"]
}
```
**TypeScript**
For typescript enabled react projects, add this to your tsconfig.json:
```
baseUrl: 'src',
```

Your tsconfig.json should look like this:
```
{
  "compilerOptions": {
    // ...
    "baseUrl": "src",
    // ...
  },
  "include": ["src/**/*", "./**/*.ts", "./**/*.tsx", "./**/*.js", "./**/*.jsx"]
}

```

Instead of relative import like this '../../../components/--all' (going back to root directory) or 'src/components/--all' (starting from root directory); 
Do this instead, 'components/--all'

**Vite - React**
**Typescript**
In your **vite.config.ts**, add:
```
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src"
    },
  }
});
```

Then, add this in your **tsconfig.json**:
```
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

If your **tsconfig.json** looks like this
```
{
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

Add this to the referenced json file(s)
```
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

**Javascript**
In your vite.config.js, add:
```
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src"
    },
  }
});
```

Then, add this in your js.config.json:
```
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```