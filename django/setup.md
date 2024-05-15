## This should cover all I need to do to setup a django API

## Creating a django project
> In the projects directory
* run 
```
django-admin startproject my_project
```


> Add a .gitignore file containing: 
* .env 
* .venv 
* env/ 
* venv/ 
* ENV/ 
* env.bak/ 
* venv.bak/ 

`# Django`
* *.log
* *.pot
* *.pyc
* __pycache__
* db.sqlite3
* media

## To setup decouple for api secrets
* 
```
pip install python-decouple
```


> In your settings.py, add:
* 
```
from decouple import config
```


> Store your secrets in .env file like this:
* 
```
SECRET_KEY=your_long_and_complex_secret_key
```
--- without quotes
* 
```
DEBUG=False
```


> Use the decoupe like this:
* 
```
SECRET_KEY = config('SECRET_KEY', cast=str)
```

* 
```
DEBUG = config('DEBUG', default=False, cast=bool)
```


## To cloudinary:
* 
```
pip install cloudinary
```


> In settings.py
import cloudinary
import cloudinary.uploader
import cloudinary.api

cloudinary.config(
    cloud_name="your_cloud_name",
    api_key="your_api_key",
    api_secret="your_api_secret",
)