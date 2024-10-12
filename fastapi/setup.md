# TO RUN THE SERVER
```uvicorn app.main:app --reload```

# TO MIGRATE
For changes in database column

1. Make sure alembic is installed:
```pip install alembic```

2. Initialize alembic, if this is the first time
```alembic init alembic```

3. Configure your alembic/env.py file properly
```
import os
from dotenv import load_dotenv
from app.models import Business # make sure it's from the correct model class


# :::::::::::::::::::: overide the default database url
load_dotenv()
db_url = os.getenv('DATABASE_URL') # add your database url here
if db_url:
    config.set_main_option('sqlalchemy.url', db_url)

# :::::::::::::::::::: overide target_metadata, None by default
target_metadata = Business.metadata
```

4. Run this to migrate
```alembic revision --autogenerate -m "Add commit message"```

5. Apply the migration to the database
```alembic upgrade head```

