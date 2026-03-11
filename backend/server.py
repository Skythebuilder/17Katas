from fastapi import FastAPI, APIRouter
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List, Optional
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI()
api_router = APIRouter(prefix="/api")


# ─── Health Check ───
@api_router.get("/")
async def root():
    return {"message": "17Katas API is live"}


# ─── Waitlist Models ───
class BrandWaitlistCreate(BaseModel):
    name: str
    email: str
    brand_name: str
    budget_range: str


class DistributorWaitlistCreate(BaseModel):
    name: str
    email: str
    handle: str
    primary_skill: str


# ─── Waitlist Endpoints ───
@api_router.post("/waitlist/brand")
async def submit_brand_waitlist(entry: BrandWaitlistCreate):
    doc = {
        "id": str(uuid.uuid4()),
        "type": "brand",
        **entry.model_dump(),
        "created_at": datetime.now(timezone.utc).isoformat(),
    }
    await db.waitlist.insert_one(doc)
    return {"success": True, "message": "You're on the list! We'll be in touch soon."}


@api_router.post("/waitlist/distributor")
async def submit_distributor_waitlist(entry: DistributorWaitlistCreate):
    doc = {
        "id": str(uuid.uuid4()),
        "type": "distributor",
        **entry.model_dump(),
        "created_at": datetime.now(timezone.utc).isoformat(),
    }
    await db.waitlist.insert_one(doc)
    return {"success": True, "message": "You're on the list! Get ready to earn."}


@api_router.get("/waitlist")
async def get_waitlist():
    entries = await db.waitlist.find({}, {"_id": 0}).to_list(1000)
    return entries


# ─── App Setup ───
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
