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