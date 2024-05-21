## BOILER PLATE Code and Setup/Installation for Django
This should cover all I need to do to setup a django API

## TABLE OF CONTENTS

- [Description](#description)
- [Installation](#installation)
  - [VirtualENV](#virtual-env)
  - [RestAPI](#djangorestapi)
  - [Requirements](#requirements-file)
- [Setup](#setup)
  - [Decouple](#decouple)
  - [Cloudinary](#cloudinary)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## DESCRIPTION
This should cover all I need to do in setting up and using Django Rest 

## INSTALLATION

- [VirtualENV](#virtual-env)
- [RestAPI](#djangorestapi)
- [Requirements](#requirements-file)

#### Virtual ENV
It is good practice to utilize virtual environment:

To use virtual environment:
<small style="font-size: 0.875rem;">Make sure python is installed properly. version 3.3^</small>

1. Create a virtual environment using the following command:
  ```
  python3 -m venv env
  ```
  or 
  ```
  python -m venv env
  ```

2. Activate the virtual environment:

- For Windows:
  In Powershell terminal of the root directory
  ```
  cd env
  Scripts\activate
  ```
  In Command Prompt terminal of the root directory
  ```
  env\Scripts\activate
  ```

- For macOS/Linux:

  ```
  source env/bin/activate
  ```

#### Start Project
In the projects directory 
  ```
  django-admin startproject my_project
  ```

Add a .gitignore file containing: 
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

#### DjangoRestAPI
For DjangoRestAPI, additional installation is required:
```
pip install djangorestframework
```

#### Requirements file 
It is good practice to utilize a file to save the libraries used your project:
1. Create a requirements.txt file in the root directory
- For Git Bash terminal:
  ```
  touch requirements.txt
  ```


## SETUP
- [Decouple](#decouple)
- [Cloudinary](#cloudinary)

#### Decouple
1. To setup decouple for api secrets
  ```
  pip install python-decouple
  ```

2. In your settings.py, add:
  ```
  from decouple import config
  ```

3. Store your secrets in .env file like this:
  ```
  SECRET_KEY=your_long_and_complex_secret_key
  DEBUG=False
  ```

4. Use the decoupe like this:
  ```
  SECRET_KEY = config('SECRET_KEY', cast=str)
  ```

  ```
  DEBUG = config('DEBUG', default=False, cast=bool)
  ```

#### Admin.py
> Don't forget to register your models after creating
- To register your models in admin.py
  ```
  from django.contrib import admin
  from .models import User

  admin.site.register(User)
  ```

#### Cloudinary
[Cloudinary](https://cloudinary.com) is a cloud service that is commonly used for media management and improvement of user experience by automatically delivering images and videos, enhance and optimize request for every user.

1. To install cloudinary:
  ```
  pip install cloudinary
  ```

2. In settings.py
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
