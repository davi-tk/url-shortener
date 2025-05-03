import os
from motor.motor_asyncio import AsyncIOMotorClient

MONGODB_URL = os.environ.get("MONGODB_URL")

client = AsyncIOMotorClient(MONGODB_URL)
db = client.get_default_database()

url_collection = db.url