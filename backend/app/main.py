from fastapi import FastAPI
import os
from motor.motor_asyncio import AsyncIOMotorClient

app = FastAPI()
MONGODB_URL = os.environ.get("MONGODB_URL")

client = AsyncIOMotorClient(MONGODB_URL)
db = client.get_default_database()

print(db)

@app.get("/")
async def root():
    return {"message": "Hello, slap na flap na tchex!"}
