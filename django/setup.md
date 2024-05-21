## BOILER PLATE Code and Setup/Installation for Django
This should cover all I need to do to setup a django API

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Setup](#setup)
- - [Cloudinary](#cloudinary)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## DESCRIPTION
This should cover all I need to do in setting up and using Django Rest 

## INSTALLATION
Creating a django project
> In the projects directory 
```
django-admin startproject my_project
```

> Add a .gitignore file containing: 
```
.env 
.venv 
env/ 
venv/ 
ENV/ 
env.bak/ 
venv.bak/ 

# Django
*.log
*.pot
*.pyc
__pycache__
db.sqlite3
media
```

## SETUP
To setup decouple for api secrets
```
pip install python-decouple
```

> In your settings.py, add:
```
from decouple import config
```

> Store your secrets in .env file like this:
```
SECRET_KEY=your_long_and_complex_secret_key
DEBUG=False
```

> Use the decoupe like this:
```
SECRET_KEY = config('SECRET_KEY', cast=str)
```

```
DEBUG = config('DEBUG', default=False, cast=bool)
```

> To register your models in admin.py
```
from django.contrib import admin
from .models import User

admin.site.register(User)
```

## Cloudinary:
```
pip install cloudinary
```

> In settings.py
```
import cloudinary
import cloudinary.uploader
import cloudinary.api

cloudinary.config(
  cloud_name="your_cloud_name",
  api_key="your_api_key",
  api_secret="your_api_secret",
)
```
