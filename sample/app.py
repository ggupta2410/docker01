import os

app_version = os.environ.get('APP_VERSION','unknown')
environment = os.environ.get('ENVIRONMENT', 'unknown')

print("Running App version {APP_VERSION} IN {ENVIRONMENT} environment")

